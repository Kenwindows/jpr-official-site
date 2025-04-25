document.addEventListener("DOMContentLoaded", () => {
  // Hero section parallax effect
  const hero = document.getElementById("hero")

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    if (hero) {
      hero.style.backgroundPositionY = `${scrollY * 0.5}px`
    }
  })

  // Menu items animation
  const menuItems = document.querySelectorAll(".menu-item")
  const menuAnimation = document.querySelector(".menu-animation")

  if (menuAnimation) {
    menuAnimation.style.opacity = "1"
  }

  menuItems.forEach((item, index) => {
    setTimeout(
      () => {
        item.style.animation = `fadeIn 0.8s ease-out forwards`
        item.style.opacity = "1"
      },
      200 + index * 200,
    )
  })

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Title animations
        const title = entry.target.querySelector(".title-fade-in")
        if (title) {
          title.style.animation = "fadeIn 0.6s ease-out forwards"
        }

        // Content animations
        const content = entry.target.querySelector(".content-fade-in")
        if (content) {
          content.style.animation = "fadeIn 0.8s ease-out 0.2s forwards"
        }

        // Box animations
        const box = entry.target.querySelector(".box-slide-in")
        if (box) {
          box.style.animation = "slideInLeft 0.6s ease-out 0.4s forwards"
        }

        // Delayed fade in
        const fadeDelay = entry.target.querySelector(".fade-in-delay")
        if (fadeDelay) {
          fadeDelay.style.animation = "fadeIn 0.8s ease-out 0.6s forwards"
        }

        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all sections with animations
  const sections = document.querySelectorAll(".section-animation")
  sections.forEach((section) => {
    observer.observe(section)
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const navbarHeight = document.getElementById("navbar").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})
