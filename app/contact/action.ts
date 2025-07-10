"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const company = formData.get("company") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string
  const consent = formData.get("consent") === "on"
  const newsletter = formData.get("newsletter") === "on"

  if (!firstName || !lastName || !email || !company || !message || !consent) {
    return {
      success: false,
      message: "Please fill in all required fields and agree to the consent.",
    }
  }

  const emailContent = `
    New Contact Form Submission:

    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone || "N/A"}
    Company: ${company}
    Service Interest: ${service || "Not specified"}
    Message:
    ${message}

    Consent: ${consent ? "Agreed" : "Not Agreed"}
    Newsletter Opt-in: ${newsletter ? "Yes" : "No"}
  `

  let resendSuccess = false
  let hubspotSuccess = false
  let overallMessage = ""

  // 1. Send email via Resend
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Replace with your verified sender email
      to: "hello@blackrocket.co.za",
      subject: "New Contact Form Submission from Black Rocket Consult Website",
      html: `<pre>${emailContent}</pre>`, // Or use a more structured HTML template
    })
    console.log("Email sent successfully via Resend!")
    resendSuccess = true
  } catch (error) {
    console.error("Failed to send email via Resend:", error)
    overallMessage += "Failed to send email. "
  }

  // 2. Send data to HubSpot
  const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
  const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID // Optional

  // --- DIAGNOSTIC LOGGING ---
  console.log("--- HubSpot Environment Variables Check ---")
  console.log(`HUBSPOT_API_KEY: ${HUBSPOT_API_KEY ? "Set" : "Not Set"}`)
  console.log(`HUBSPOT_PORTAL_ID: ${HUBSPOT_PORTAL_ID ? "Set" : "Not Set"}`)
  console.log(`HUBSPOT_FORM_ID: ${HUBSPOT_FORM_ID ? "Set" : "Not Set"}`)
  console.log("-----------------------------------------")
  // --- END DIAGNOSTIC LOGGING ---

  if (!HUBSPOT_API_KEY || !HUBSPOT_PORTAL_ID) {
    console.error("HubSpot API Key or Portal ID is missing. HubSpot integration skipped.")
    overallMessage += "HubSpot integration skipped due to missing configuration. "
  } else {
    const hubspotEndpoint = HUBSPOT_FORM_ID
      ? `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`
      : `https://api.hubapi.com/crm/v3/objects/contacts` // Fallback for direct contact creation

    const hubspotPayload = HUBSPOT_FORM_ID
      ? {
          fields: [
            { name: "firstname", value: firstName },
            { name: "lastname", value: lastName },
            { name: "email", value: email },
            { name: "phone", value: phone },
            { name: "company", value: company },
            { name: "service_interest", value: service }, // Ensure this is a custom property in HubSpot
            { name: "message", value: message },
          ],
          context: {
            pageUri: "https://www.blackrocket.co.za/contact", // Replace with actual page URI
            pageName: "Contact Us Page",
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: consent,
            },
          },
        }
      : {
          properties: {
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            company: company,
            service_interest: service,
            message: message,
          },
        }

    try {
      const hubspotResponse = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify(hubspotPayload),
      })

      if (hubspotResponse.ok) {
        console.log("Form data sent to HubSpot successfully!")
        hubspotSuccess = true
      } else {
        const errorData = await hubspotResponse.json()
        console.error("Failed to send data to HubSpot:", hubspotResponse.status, errorData)
        overallMessage += `Failed to send data to HubSpot: ${errorData.message || hubspotResponse.statusText}. `
      }
    } catch (error) {
      console.error("Error sending data to HubSpot:", error)
      overallMessage += "Error connecting to HubSpot. "
    }
  }

  // Determine final success message
  if (resendSuccess && hubspotSuccess) {
    return { success: true, message: "Your message has been sent successfully and recorded!" }
  } else if (resendSuccess) {
    return { success: true, message: "Your message has been sent successfully (HubSpot integration had issues)." }
  } else if (hubspotSuccess) {
    return { success: true, message: "Your message has been recorded (email sending had issues)." }
  } else {
    return { success: false, message: overallMessage || "Failed to send your message. Please try again later." }
  }
}
