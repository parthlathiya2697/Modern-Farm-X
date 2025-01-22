// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ModernFarm-X</title>
        <meta name="description" content="Welcome to ModernFarm-X, the future of sustainable farming!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={styles.header}>
        <h1 style={styles.brandName}>ModernFarm-X</h1>
        <nav>
          <a href="#about" style={styles.link}>About</a>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>
      </header>

      <main style={styles.main}>
        <section id="about" style={styles.section}>
          <h2>About Us</h2>
          <p>ModernFarm-X is dedicated to revolutionizing agriculture with innovative and sustainable solutions like hydroponics, aeroponics, and vertical farming.</p>
        </section>

        <section id="services" style={styles.section}>
          <h2>Our Services</h2>
          <ul>
            <li>Consultation on modern farming techniques</li>
            <li>Custom hydroponic and vertical farming systems</li>
            <li>Workshops and training programs</li>
          </ul>
        </section>

        <section id="contact" style={styles.section}>
          <h2>Contact Us</h2>
          <p>Email: contact@modernfarmx.com</p>
          <p>Phone: +1-800-555-1234</p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 ModernFarm-X. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Define a custom type for the styles object
type Styles = {
  header: React.CSSProperties;
  brandName: React.CSSProperties;
  link: React.CSSProperties;
  main: React.CSSProperties;
  section: React.CSSProperties;
  footer: React.CSSProperties;
};

// Use the custom type for the styles object
const styles: Styles = {
  header: {
    padding: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  },
  main: {
    padding: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  footer: {
    textAlign: 'center' as const,
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },
};
