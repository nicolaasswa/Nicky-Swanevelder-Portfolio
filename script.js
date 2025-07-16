document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"], [data-scroll-to]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href") ? this.getAttribute("href").substring(1) : this.dataset.scrollTo
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerHeight = 80 // Fixed header height
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Back to Top Button logic
  const backToTopButton = document.getElementById("back-to-top")

  const toggleBackToTopVisibility = () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show")
    } else {
      backToTopButton.classList.remove("show")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (backToTopButton) {
    window.addEventListener("scroll", toggleBackToTopVisibility)
    backToTopButton.addEventListener("click", scrollToTop)
  }

  // Handle "Get Started" button click in navigation
  const getStartedBtn = document.querySelector(".get-started-btn")
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      // For a static site, this would typically navigate to the contact page
      // or scroll to a contact section if on the same page.
      // Since we're on index.html, we'll scroll to the contact section.
      const contactSection = document.getElementById("contact-section")
      if (contactSection) {
        const headerHeight = 80
        const targetPosition = contactSection.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  }

  // Placeholder for mobile menu functionality (if needed)
  const menuBtn = document.querySelector(".menu-btn")
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      alert("Mobile menu functionality would be implemented here.")
      // Example: Toggle a class on the nav-links to show/hide
      // document.querySelector('.nav-links').classList.toggle('active');
    })
  }
})
