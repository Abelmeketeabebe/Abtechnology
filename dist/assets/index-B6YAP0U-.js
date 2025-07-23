(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function l(){return`
    <header>
      <div class="container">
        <div class="header-content">
          <a href="#" class="logo"> <img src="image/0.jpg" alt="abel"width="200" height="150"></a>
          <nav>
            <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button class="mobile-menu-btn">☰</button>
          <div class="mobile-menu">
            <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  `}function d(){return`
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content animate-on-scroll">
          <h1>Innovative Technology Solutions for Tomorrow</h1>
          <p>We transform businesses through cutting-edge technology, delivering scalable solutions that drive growth and innovation in the digital age.</p>
          <div class="cta-buttons">
            <a href="#services" class="btn btn-primary">
              Explore Services
              <span>→</span>
            </a>
            <a href="#contact" class="btn btn-secondary">
              Get Started
              <span>✉</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function v(){return`
    <section id="services" class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.</p>
        </div>
        <div class="services-grid">
          <div class="service-card animate-on-scroll">
            <div class="service-icon">
              <span>💻</span>
            </div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern frameworks and technologies. From responsive websites to complex web platforms, we deliver scalable solutions.</p>
          </div>
          <div class="service-card animate-on-scroll">
            <div class="service-icon">
              <span>📱</span>
            </div>
            <h3>Mobile Applications</h3>
            <p>Native and cross-platform mobile apps that provide exceptional user experiences across iOS and Android devices with seamless performance.</p>
          </div>
          <div class="service-card animate-on-scroll">
            <div class="service-icon">
              <span>☁️</span>
            </div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and migration services that optimize performance, reduce costs, and enhance security for your business operations.</p>
          </div>
          <div class="service-card animate-on-scroll">
            <div class="service-icon">
              <span>🤖</span>
            </div>
            <h3>AI & Machine Learning</h3>
            <p>Intelligent automation and data-driven insights through advanced AI and machine learning solutions that transform how you do business.</p>
          </div>
          <div class="service-card animate-on-scroll">
            <div class="service-icon">
              <span>🔒</span>
            </div>
            <h3>Cybersecurity</h3>
            <p>Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain customer trust in an evolving threat landscape.</p>
          </div>
          <div class="service-card animate-on-scroll">
            <div class="service-icon">
              <span>📊</span>
            </div>
            <h3>Data Analytics</h3>
            <p>Transform raw data into actionable insights with advanced analytics, business intelligence, and data visualization solutions.</p>
          </div>
        </div>
      </div>
    </section>
  `}function u(){return`
    <section id="about" class="section about">
      <div class="container">
        <div class="about-content">
          <div class="about-text animate-on-scroll">
            <h2>Leading Innovation Since 2015</h2>
            <p>AB Technology has been at the forefront of digital transformation, helping businesses leverage cutting-edge technology to achieve their goals. Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that drive real results.</p>
            <p>We believe in the power of technology to transform businesses and improve lives. Our commitment to excellence, innovation, and customer success has made us a trusted partner for companies ranging from startups to Fortune 500 enterprises.</p>
            <a href="#contact" class="btn btn-primary">Learn More About Us</a>
          </div>
          <div class="stats-grid animate-on-scroll">
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">150+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">8+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function m(){return`
    <section id="team" class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-subtitle">Our diverse team of experts brings together years of experience in technology, design, and business strategy.</p>
        </div>
        <div class="team-grid">
          <div class="team-card animate-on-scroll">
         
            <div class="team-image">
             <img src="image/3.jpg" alt="abel"width="200" height="150"></div>
            <div class="team-info">
              <h3 class="team-name">ABEL MEKETE </h3>
              <p class="team-role">CEO & Founder</p>
            </div>
          </div>
          <div class="team-card animate-on-scroll">
            <div class="team-image">
            <img src="image/12.jpg" alt="hana"width="200" height="150">
            </div>
            <div class="team-info">
            
              <h3 class="team-name">HANA WORKU </h3>
              <p class="team-role">CTO</p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function p(){return`
    <section id="contact" class="section contact">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Ready to transform your business with innovative technology solutions? Let's discuss your project.</p>
        </div>
        <div class="contact-content">
          <div class="contact-info animate-on-scroll">
            <h3>Contact Information</h3>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <strong>Address</strong><br>
               ADDIS ABABA <br>
                ADDIS KETEMA WEREDA 5 ,H.O 049
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <strong>Phone</strong><br>
                +251 922950423
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <strong>Email</strong><br>
                belamekete@gmail.com
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div>
                <strong>Business Hours</strong><br>
                Mon - Fri: 9:00 AM - 6:00 PM PST
              </div>
            </div>
          </div>
          <form class="contact-form animate-on-scroll">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" name="company">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  `}function h(){return`
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>AB Technology</h4>
            <p>Transforming businesses through innovative technology solutions. We're committed to delivering excellence and driving digital transformation for our clients worldwide.</p>
          </div>
          <div class="footer-section">
            <h4>Services</h4>
            <ul class="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Applications</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
              <li><a href="#services">AI & Machine Learning</a></li>
              <li><a href="#services">Cybersecurity</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Company</h4>
            <ul class="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <ul class="footer-links">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 AB Technology. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  `}document.querySelector("#app").innerHTML=`
  ${l()}
  ${d()}
  ${v()}
  ${u()}
  ${m()}
  ${p()}
  ${h()}
`;document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(t){t.preventDefault();const a=document.querySelector(this.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth",block:"start"})})});const r=document.querySelector(".mobile-menu-btn"),c=document.querySelector(".mobile-menu");r&&c&&r.addEventListener("click",()=>{c.classList.toggle("active")});window.addEventListener("scroll",()=>{const i=document.querySelector("header");window.scrollY>100?i.classList.add("scrolled"):i.classList.remove("scrolled")});const f={threshold:.1,rootMargin:"0px 0px -50px 0px"},b=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&t.target.classList.add("animate-in")})},f);document.querySelectorAll(".animate-on-scroll").forEach(i=>{b.observe(i)});
