import './App.css'

import logo from './assets/logo.jpeg'
import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpeg'
import img4 from './assets/4.jpeg'

import { useState, useEffect } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="brand">
          <img src={logo} alt="School Logo" className="logo" />
          <div className="brand-text">
            <span className="brand-name">Real Junior School</span>
            <span className="brand-motto">Devoted to Excellence</span>
          </div>
        </div>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#levels" onClick={closeMenu}>Programs</a>
          <a href="#director" onClick={closeMenu}>Director</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu} className="nav-cta">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-overlay"> 
        </div>
        <div className="hero-scroll-hint">
          <span>↓</span>
        </div>
      </header>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stat"><span className="stat-num">4</span><span className="stat-label">School Levels</span></div>
        <div className="stat"><span className="stat-num">PG–G9</span><span className="stat-label">Age Range</span></div>
        <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Devoted to Excellence</span></div>
        <div className="stat"><span className="stat-num">🇰🇪</span><span className="stat-label">Mlolongo, Kenya</span></div>
      </div>

      {/* ABOUT SCHOOL */}
      <section id="about" className="section">
        <div className="section-inner">
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">About Real Junior School</h2>
          <p className="section-desc">
            A modern learning institution committed to nurturing responsible, disciplined,
            and confident learners in a safe and supportive environment.
          </p>

          <div className="about-grid">
            <div className="about-box">
              <div className="about-icon">🎯</div>
              <h3>Motto</h3>
              <p><strong>Devoted to Excellence</strong></p>
            </div>

            <div className="about-box featured">
              <div className="about-icon">🌍</div>
              <h3>Vision</h3>
              <p>
                To empower learners and educators to think creatively, reason critically,
                and engage proactively guided by ethical and spiritual values.
              </p>
            </div>

            <div className="about-box">
              <div className="about-icon">🎓</div>
              <h3>Mission</h3>
              <p>
                Create a happy, safe learning environment — modeling excellence and equity
                for every child at every level through quality instructions and providing
                efficient systems and structures in school to sustain a culture committed
                to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL LEVELS */}
      <section id="levels" className="section section-alt">
        <div className="section-inner">
          <div className="section-label">Academic Structure</div>
          <h2 className="section-title">School Programs</h2>

          <div className="levels-grid">
            <div className="level-card">
              <div className="level-icon">🧒</div>
              <div className="level-title">Pre School</div>
              <div className="level-range">PG – PP2</div>
            </div>
            <div className="level-card">
              <div className="level-icon">📘</div>
              <div className="level-title">Lower Primary</div>
              <div className="level-range">Grade 1 – 3</div>
            </div>
            <div className="level-card">
              <div className="level-icon">📗</div>
              <div className="level-title">Upper Primary</div>
              <div className="level-range">Grade 4 – 6</div>
            </div>
            <div className="level-card">
              <div className="level-icon">🎓</div>
              <div className="level-title">Junior Secondary</div>
              <div className="level-range">Grade 7 – 9</div>
            </div>
          </div>

          <div className="co-curricular">
            <h3>Co-Curricular Activities</h3>
            <p>Sports · Music · Drama · Ballet dancing · Karate · Scouting · Talent Development</p>
          </div>
        </div>
      </section>

      {/* DIRECTOR MESSAGE */}
      <section id="director" className="section director-section">
        <div className="section-inner">
          <div className="section-label">Leadership</div>
          <h2 className="section-title">Director's Message</h2>
          <div className="director-box">
            <div className="quote-mark">"</div>
            <p>
              Welcome to Real Junior School. We are committed to providing quality education,
              strong values, and a nurturing environment where every child can thrive academically,
              socially, and morally. Together, we build futures.
            </p>
            <div className="director-sig">
              <div className="sig-line"></div>
              <h4>School Director</h4>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section section-alt">
        <div className="section-inner">
          <div className="section-label">Our School Life</div>
          <h2 className="section-title">Gallery</h2>
          <div className="gallery">
            <div className="gallery-item tall"><img src={img1} alt="School 1" /></div>
            <div className="gallery-item"><img src={img2} alt="School 2" /></div>
            <div className="gallery-item"><img src={img3} alt="School 3" /></div>
            <div className="gallery-item wide"><img src={img4} alt="School 4" /></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-inner">
          <div className="section-label">Reach Us</div>
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h4>Location</h4>
              <p>Mlolongo, Kenya</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🏫</div>
              <h4>Levels Offered</h4>
              <p>PG – Grade 9</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h4>Email</h4>
              <a href="mailto:realjuniorsch@gmail.com">realjuniorsch@gmail.com</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h4>Phone</h4>
              <a href="tel:+254722788927">+254 722 788 927</a>
              <a href="tel:+254702990238">+254 702 990 238</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🕐</div>
              <h4>School Hours</h4>
              <p>Monday – Friday</p>
              <p>8:00 AM – 5:00 PM</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🎯</div>
              <h4>Motto</h4>
              <p>Devoted to Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div>
              <div className="footer-name">Real Junior School</div>
              <div className="footer-sub">Devoted to Excellence</div>
            </div>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#levels">Programs</a>
            <a href="#gallery">Gallery</a>
            <a href="mailto:realjuniorsch@gmail.com">Email Us</a>
          </div>
          <p className="footer-copy">© 2026 Real Junior School. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App