import './style.css'
import { createHeader } from './components/Header.js'
import { createHero } from './components/Hero.js'
import { createServices } from './components/Services.js'
import { createAbout } from './components/About.js'
import { createTeam } from './components/Team.js'
import { createContact } from './components/Contact.js'
import { createFooter } from './components/Footer.js'

document.querySelector('#app').innerHTML = `
  ${createHeader()}
  ${createHero()}
  ${createServices()}
  ${createAbout()}
  ${createTeam()}
  ${createContact()}
  ${createFooter()}
`

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
  })
}

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if (window.scrollY > 100) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el)
})