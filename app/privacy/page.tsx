import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />
      <main className="px-6 py-12 md:py-16 lg:py-20 pt-32 max-w-4xl mx-auto text-brand-gray-dark">
        <h1 className="text-4xl font-bold text-brand-black mb-8 text-center">Black Rocket Consult Privacy Policy</h1>
        <p className="text-brand-gray-dark mb-8 text-center">Effective Date: 2024</p>

        <div className="space-y-8 prose lg:prose-xl max-w-none">
          <p>
            At Black Rocket Consult, we recognize that data is a strategic asset in today’s digital economy. Our
            commitment to privacy goes beyond compliance; we view it as a cornerstone of ethical business innovation and
            customer-centric transparency.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-brand-black mb-4">1. Data Collection & Purpose-Driven Use</h2>
            <p className="mb-4">
              We collect personal data solely to optimize our consulting services, enhance client experience, and foster
              mutually beneficial relationships. This includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Contact information (e.g., name, email, phone)</li>
              <li>Business details relevant to consulting engagements</li>
              <li>Website interaction data (via cookies and analytics)</li>
            </ul>
            <p>
              Our data capture mechanisms are designed to fuel continuous improvement and actionable insights while
              maintaining rigorous privacy standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-black mb-4">2. Data Security & Governance</h2>
            <p>
              Leveraging cutting-edge encryption protocols and proactive risk management frameworks, Black Rocket
              Consult ensures your data is secured against unauthorized access, breaches, or leaks. Our privacy
              governance aligns with best-in-class regulatory standards, including GDPR and CCPA compliance frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-black mb-4">3. Data Sharing & Third-Party Ecosystem</h2>
            <p>
              We operate within a trusted ecosystem of partners and technology providers who are contractually obligated
              to uphold our stringent privacy policies. Data sharing is limited, purposeful, and fully compliant with
              applicable regulations, ensuring your data is never commoditized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-black mb-4">4. User Rights & Empowerment</h2>
            <p>
              In our progressive privacy ethos, you retain full control over your personal data. We empower you with
              rights to access, correct, delete, and port your information seamlessly. Our user-centric privacy
              dashboard facilitates real-time management of your data preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-black mb-4">5. Cookies & Digital Footprint</h2>
            <p>
              To innovate user experience and optimize site performance, we deploy cookies and similar technologies with
              your explicit consent. These tools enable personalized interactions while respecting your autonomy over
              digital footprints.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-black mb-4">6. Continuous Evolution & Transparency</h2>
            <p>
              Black Rocket Consult commits to ongoing transparency through regular privacy audits, stakeholder feedback
              loops, and adaptive policy enhancements. We proactively anticipate regulatory shifts and integrate
              privacy-by-design into all business operations.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
