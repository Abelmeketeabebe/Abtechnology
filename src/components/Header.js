export function createHeader() {
  return `
    <header>
      <div class="container">
        <div class="header-content">
          <a href="#" class="logo"> </a>
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
  `
}