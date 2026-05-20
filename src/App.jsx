import './App.css'
import logo from './logo.jpeg'

function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Real Junior School Logo" className="logo" />
          <div>
            <h1>Real Junior School</h1>
            <p className="motto">Devoted to Excellence</p>
          </div>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h2>Welcome to Real Junior School</h2>
          <p>Providing quality CBC education from Playgroup to Grade 9</p>
          <button>Enroll Today</button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>Real Junior School is a leading educational institution located in Mlolongo, Kenya. Established in 2005.</p>
        <div className="stats">
          <div className="stat-card"><h3>2005</h3><p>Established</p></div>
          <div className="stat-card"><h3>Playgroup – G9</h3><p>CBC Curriculum</p></div>
          <div className="stat-card"><h3>3 Years</h3><p>Entry Age</p></div>
          <div className="stat-card"><h3>8AM – 5PM</h3><p>School Hours</p></div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>To create a happy and safe learning environment and model excellence and equity in education for every child.</p>
        </div>
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>To see empowered learners think creatively, reason critically, guided by ethical and spiritual values.</p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <h2>Core Values</h2>
        <div className="cards">
          <div className="card"><h3>Discipline</h3><p>We nurture responsible and respectful learners.</p></div>
          <div className="card"><h3>Devotion</h3><p>Commitment to excellence in everything we do.</p></div>
          <div className="card"><h3>Determination</h3><p>Encouraging resilience, growth, and achievement.</p></div>
        </div>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="section bg-light">
        <h2>Academic Structure</h2>
        <div className="cards">
          <div className="card"><h3>Playgroup</h3><p>Foundation learning for early childhood development.</p></div>
          <div className="card"><h3>Pre-Primary</h3><p>PP1 & PP2 under the CBC curriculum.</p></div>
          <div className="card"><h3>Primary School</h3><p>Grade 1 – Grade 6 strong academic foundation.</p></div>
          <div className="card"><h3>Junior Secondary</h3><p>Grade 7 – Grade 9 preparing learners for future success.</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Services & Activities</h2>
        <div className="cards">
          <div className="card"><h3>School Meals</h3><p>Healthy and balanced meals provided daily.</p></div>
          <div className="card"><h3>Transport Services</h3><p>Safe and reliable transport for learners.</p></div>
          <div className="card"><h3>Sports & Clubs</h3><p>Sports, drama, music, karate, and clubs available.</p></div>
          <div className="card"><h3>Qualified Teachers</h3><p>Dedicated and experienced teaching staff.</p></div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section bg-light">
        <h2>School Gallery</h2>
        <div className="gallery">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600" />
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600" />
          <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600" />
          <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600" />
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600" />
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <div className="contact-box">
          <p><strong>Location:</strong> Mlolongo, Kenya</p>
          <p><strong>Email:</strong> realjuniorsch@gmail.com</p>
          <p><strong>School Hours:</strong> 8:00 AM – 5:00 PM</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Real Junior School — Devoted to Excellence</p>
      </footer>

    </div>
  )
}

export default App