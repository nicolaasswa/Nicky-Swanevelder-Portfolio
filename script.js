document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"], button[data-scroll-to]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
        ? this.getAttribute("href").substring(1)
        : this.getAttribute("data-scroll-to")
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top")
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("show")
      } else {
        backToTopButton.classList.remove("show")
      }
    })

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn")
  const navLinks = document.querySelector(".nav-links")
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none"
      } else {
        navLinks.style.display = "flex"
        navLinks.style.flexDirection = "column"
        navLinks.style.position = "absolute"
        navLinks.style.top = "60px"
        navLinks.style.left = "0"
        navLinks.style.width = "100%"
        navLinks.style.backgroundColor = "var(--brand-white)"
        navLinks.style.padding = "1rem"
        navLinks.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
      }
    })
  }

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to a server
      // For this example, we'll just show an alert
      alert("Thank you for your message! We will get back to you soon.")
      contactForm.reset()
    })
  }
})
