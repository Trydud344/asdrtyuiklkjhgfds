import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { UserX, Eye, ChevronDown, Mail, AtSign } from 'lucide-react';
import LightRays from './components/LightRays';
import ShinyText from './components/ShinyText';
import BorderGlow from './components/BorderGlow';
import MapGrid from './components/MapGrid';
import ParticleField from './components/ParticleField';
import GradualBlur from './components/GradualBlur';
import DotField from './components/DotField';
import ScrollReveal from './components/ScrollReveal';
import PrivacyPolicy from './PrivacyPolicy';
import About from './About';
import './App.css';

const LogoIcon = ({ size = 24, style = {} }) => (
  <img src="/logo.png" alt="" width={size} height={size} style={{ display: 'block', ...style }} />
);

const features = [
  {
    title: 'Privacy',
    tagline: 'You are a presence, not a profile.',
    icon: UserX,
    color: '#2979FF',
    sections: [
      {
        label: 'Zero-Identity Architecture',
        text: 'No email. No phone. No password. Just a nickname and a secret token. Your real identity never touches our servers. Lose your token, and your presence is gone — no recovery, no backdoor.',
      },
      {
        label: 'No Behavioral Tracking',
        text: 'We do not track your behavior, build advertising profiles, or sell your data to third parties. Your activity on ShowUp is yours alone.',
      },
      {
        label: 'Ephemeral Data by Design',
        text: 'Conversations and events are designed to fade when they are no longer needed. We minimize data retention by default, because data that does not exist cannot be leaked.',
      },
      {
        label: 'Automatic Metadata Stripping',
        text: 'Every image and file uploaded is automatically stripped of identifying metadata — location tags, device info, timestamps — before it ever reaches another user.',
      },
      {
        label: 'Intentionally Coarse Location',
        text: 'Location data is intentionally coarse and imprecise. We never store GPS coordinates, and local organizing relies on broad areas rather than exact addresses.',
      },
    ],
  },
  {
    title: 'Integrity',
    tagline: 'Trust built through real presence.',
    icon: LogoIcon,
    color: '#FF4D00',
    sections: [
      {
        label: 'Signal-Based Reputation',
        text: 'Not a karma score. Not a leaderboard. Just a quiet signal that genuine participation earns trust over time. It is invisible, ungameable, and helps the platform distinguish real voices from manipulation.',
      },
      {
        label: 'Geo-Integrity Protection',
        text: 'We protect local conversations from outside manipulation without ever tracking where you actually are. Geo-Integrity detects suspicious patterns that suggest coordinated interference, not individuals.',
      },
      {
        label: 'Built-In Bot Resistance',
        text: 'Account creation is built to be easy for real people and frustrating for automated abuse. No CAPTCHAs, no surveillance-based verification. One person, one account.',
      },
      {
        label: 'Fair & Transparent Moderation',
        text: 'Content is reviewed with care — not by blunt algorithms alone. Political speech and peaceful organizing are always protected. Edge cases get human eyes, not just automated flags.',
      },
      {
        label: 'Clear Community Standards',
        text: 'The line is clear: no violence, no hate speech, no doxxing, no illegal coordination. We err on the side of voice, because safety and expression are not opposites.',
      },
    ],
  },
  {
    title: 'Transparency',
    tagline: 'No opaque algorithms. No hidden rules.',
    icon: Eye,
    color: '#00C853',
    sections: [
      {
        label: 'Fully Open Source Code',
        text: 'Our code is open for inspection. Security researchers, activists, and the public can verify that ShowUp does exactly what we claim — no hidden backdoors, no secret data collection.',
      },
      {
        label: 'Plain Language Policies',
        text: 'Our moderation rules are written in plain language, not legal jargon. You will always know why a decision was made and how to appeal it.',
      },
      {
        label: 'Public Development Roadmap',
        text: 'We publish what we are building and why. No surprises, no stealth changes. The community helps shape the platform through open feedback channels.',
      },
      {
        label: 'No Hidden Algorithms',
        text: 'What you see is not determined by hidden engagement metrics or opaque recommendation engines. Feeds are chronological and community-driven by default.',
      },
      {
        label: 'Public Accountability Reports',
        text: 'When we make mistakes, we admit them. Regular transparency reports document moderation actions, government requests, and security incidents without spin.',
      },
    ],
  },
];

const glowProps = {
  edgeSensitivity: 30,
  glowColor: '20 100 50',
  backgroundColor: '#0A0A0A',
  borderRadius: 20,
  glowRadius: 30,
  glowIntensity: 0.8,
  coneSpread: 25,
  colors: ['#FF4D00', '#E8E8E8', '#FF4D00'],
};

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [sourceRect, setSourceRect] = useState(null);
  const [showPrivacy, setShowPrivacy] = useState(window.location.hash === '#/privacy');
  const [showAbout, setShowAbout] = useState(window.location.hash === '#/about');
  const [contactExpanded, setContactExpanded] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowPrivacy(window.location.hash === '#/privacy');
      setShowAbout(window.location.hash === '#/about');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openExpanded = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSourceRect(rect);
    setActiveSection(0);
    setExpandedIndex(index);
  };

  if (showPrivacy) {
    return <PrivacyPolicy />;
  }

  if (showAbout) {
    return <About />;
  }

  return (
    <div className="App">
      <section className="App-hero">
        <MapGrid />
        <div className="App-rays-background">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#FF4D00"
            raysSpeed={0.6}
            lightSpread={0.25}
            rayLength={3.5}
            followMouse={true}
            mouseInfluence={0.04}
            noiseAmount={0.015}
            distortion={0.02}
            pulsating={true}
          />
        </div>
        <div className="App-hero-gradient" />
        <div className="App-content">
          <motion.div
            className="App-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <LogoIcon size={140} />
          </motion.div>
          <h1 className="App-headline">
            <ShinyText
              text="Your city is waiting. Are you?"
              speed={3.5}
              color="#8A8A8A"
              shineColor="#C2A090"
              spread={130}
              direction="left"
              yoyo
            />
          </h1>
          <p className="App-subheadline">
            <ShinyText
              text="Create an event in seconds. Watch your people show up."
              speed={4}
              color="rgba(255,255,255,0.3)"
              shineColor="#E8E8E8"
              spread={100}
              direction="left"
              yoyo
            />
          </p>
        </div>
        <motion.div
          className="App-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="App-scroll-indicator-inner"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
              <ChevronDown size={16} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
              <span className="App-scroll-indicator-text">scroll</span>
          </motion.div>
        </motion.div>
        <GradualBlur preset="footer" height="8rem" strength={2.5} curve="ease-out" opacity={0.9} />
      </section>

      <section className="App-about-section">
        <div className="App-about-content">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0.5}
            blurStrength={7}
            textClassName="App-about-scroll-text"
          >{`ShowUp is a platform built to help people organize, discover, and follow real-world events happening around them.

Whether it's a parade, marathon, concert, local gathering, or public demonstration, ShowUp makes coordination simple through live maps, event updates, and community-driven interaction.

The app is designed to feel fast, direct, and easy to use, without unnecessary clutter.

Instead of focusing on algorithms or endless scrolling, ShowUp focuses on helping people connect in the real world and stay informed about what's happening nearby.`}</ScrollReveal>
        </div>
        <GradualBlur preset="footer" height="5rem" strength={1.5} curve="ease-out" opacity={0.7} />
      </section>

      <section className="App-features">
        <div className="App-section-header">
          <motion.h2
            className="App-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Built for the streets.
            <br />
            <span style={{ color: '#FF4D00' }}>Engineered for the stakes.</span>
          </motion.h2>
          <motion.p
            className="App-section-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every piece of this platform is designed for privacy, safety, and real collective power.
          </motion.p>
        </div>

        <div className={`App-cards${expandedIndex !== null ? ' App-cards--dimmed' : ''}`}>
          {features.map((feature, i) => (
            <div key={i} className="App-card-slot">
              <AnimatePresence mode="wait">
                {expandedIndex !== i && (
                  <motion.div
                    key={`grid-card-${i}`}
                    className="App-card-wrapper"
                    onClick={(e) => openExpanded(i, e)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 0.985, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    whileTap={{ scale: 0.90, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  >
                    <BorderGlow {...glowProps} colors={[feature.color, '#E8E8E8', feature.color]}>
                      <div className="App-card-content">
                        <div className="App-icon-square">
                          <feature.icon size={18} color="#FFFFFF" strokeWidth={2} />
                        </div>
                        <h2 className="App-card-title">{feature.title}</h2>
                        <p className="App-card-desc">{feature.tagline}</p>
                      </div>
                    </BorderGlow>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <motion.p
          className="App-cards-hint"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Click to learn more
        </motion.p>
      </section>

      <AnimatePresence>
        {expandedIndex !== null && sourceRect && (
          <>
            <motion.div
              key="backdrop"
              className="App-overlay-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setExpandedIndex(null)}
            />
            <motion.div
              key={`expanded-${expandedIndex}`}
              className="App-expanded-card"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  transformOrigin: 'center center',
                }}
                initial={{
                  x: sourceRect.left + sourceRect.width / 2 - window.innerWidth / 2,
                  y: sourceRect.top + sourceRect.height / 2 - window.innerHeight / 2,
                  scaleX: sourceRect.width / (window.innerWidth * 0.92),
                  scaleY: sourceRect.height / (window.innerHeight * 0.92),
                }}
                animate={{ x: 0, y: 0, scaleX: 1, scaleY: 1 }}
                transition={{ type: 'spring', stiffness: 160, damping: 22, mass: 0.7 }}
              >
                <BorderGlow
                  {...glowProps}
                  borderRadius={24}
                  colors={[features[expandedIndex].color, '#E8E8E8', features[expandedIndex].color]}
                >
                  <div className="App-expanded-content">
                    <motion.div
                      className="App-expanded-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.25 }}
                    >
                      <div className="App-expanded-header">
                        <div className="App-expanded-icon-square">
                          {(() => {
                            const Icon = features[expandedIndex].icon;
                            return <Icon size={24} color="#FFFFFF" strokeWidth={2} />;
                          })()}
                        </div>
                        <h2 className="App-expanded-title">{features[expandedIndex].title}</h2>
                        <p className="App-expanded-desc">{features[expandedIndex].tagline}</p>
                      </div>
                      <div className="App-expanded-buttons">
                        {features[expandedIndex].sections.map((section, idx) => (
                          <motion.button
                            key={idx}
                            className={`App-expanded-pill${activeSection === idx ? ' App-expanded-pill--active' : ''}`}
                            onClick={() => setActiveSection(idx)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                          >
                            <span
                              className="App-expanded-pill-dot"
                              style={{
                                backgroundColor: activeSection === idx ? features[expandedIndex].color : 'transparent',
                                borderColor: activeSection === idx ? features[expandedIndex].color : 'var(--color-border-strong)',
                              }}
                            />
                            <span className="App-expanded-pill-label">{section.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                    <div className="App-expanded-right">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSection}
                          className="App-expanded-text-panel"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25 }}
                        >
                          <h3
                            className="App-expanded-section-title"
                            style={{ color: features[expandedIndex].color }}
                          >
                            {features[expandedIndex].sections[activeSection].label}
                          </h3>
                          <p className="App-expanded-section-text">
                            {features[expandedIndex].sections[activeSection].text}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </BorderGlow>
                <motion.button
                  className="App-close-btn"
                  onClick={() => setExpandedIndex(null)}
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 360, damping: 22 }}
                >
                  &times;
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="App-moderation-section">
        <motion.div
          className="App-moderation-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="App-section-title">
            Fairness first.
            <br />
            <span style={{ color: '#FF4D00' }}>Always.</span>
          </h2>
          <p className="App-section-sub">
            We pay extra attention to moderation because your voice matters.
            No blunt filters. No opaque algorithms making unaccountable decisions.
            Just a commitment to fairness, transparency, and protecting legitimate speech.
          </p>
        </motion.div>
        <motion.div
          className="App-moderation-message"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="App-moderation-line">
            <span className="App-moderation-dot" />
            <p>Political speech and peaceful organizing are protected — always.</p>
          </div>
          <div className="App-moderation-line">
            <span className="App-moderation-dot" />
            <p>Edge cases get human eyes, not just automated flags.</p>
          </div>
          <div className="App-moderation-line">
            <span className="App-moderation-dot" />
            <p>We err on the side of voice — safety and expression aren&apos;t opposites.</p>
          </div>
        </motion.div>
        <GradualBlur preset="footer" height="5rem" strength={1.5} curve="ease-out" opacity={0.7} />
      </section>

      <section className="App-identity-section">
        <ParticleField density={0.4} />
        <motion.div
          className="App-identity-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="App-identity-icon-ring">
            <LogoIcon size={100} />
          </div>
          <h2 className="App-section-title App-identity-title">Zero-Identity Architecture</h2>
          <p className="App-section-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
            When you create an account, you receive a secret token. The server never stores it in plaintext — 
            and once it is hashed, even we cannot recover it. Your presence is purely cryptographic.
          </p>
          <p className="App-identity-warning">
            Lose your token, and your presence is gone.
            <br />
            No recovery. No backdoor. No exceptions.
          </p>
        </motion.div>
        <GradualBlur preset="footer" height="6rem" strength={2} curve="ease-out" opacity={0.8} />
      </section>

      <footer className={`App-footer${contactExpanded ? ' App-footer--expanded' : ''}`}>
        <div className="App-footer-field">
          <DotField
            dotRadius={1.8}
            dotSpacing={13}
            bulgeStrength={70}
            glowRadius={120}
            sparkle
            waveAmplitude={0}
            gradientFrom="rgba(255, 77, 0, 0.50)"
            gradientTo="rgba(255, 140, 80, 0.22)"
            glowColor="#1A0A00"
          />
        </div>
        <div className="App-footer-content">
          <motion.div
            className={`App-footer-panel${contactExpanded ? ' App-footer-panel--expanded' : ''}`}
            layout
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          >
            <AnimatePresence mode="wait">
              {!contactExpanded ? (
                <motion.div
                  key="footer-grid"
                  className="App-footer-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="App-footer-col">
                    <h4 className="App-footer-heading">Try ShowUp on</h4>
                    <ul className="App-footer-links">
                      <li><a href="#">iOS</a></li>
                      <li><a href="#">Android</a></li>
                    </ul>
                  </div>
                  <div className="App-footer-col">
                    <h4 className="App-footer-heading">Developers</h4>
                    <ul className="App-footer-links">
                      <li><a href="#">API Overview</a></li>
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">Open Source</a></li>
                      <li><a href="#">GitHub</a></li>
                    </ul>
                  </div>
                  <div className="App-footer-col">
                    <h4 className="App-footer-heading">Company</h4>
                    <ul className="App-footer-links">
                      <li><a href="#/about">About</a></li>
                      <li>
                        <button
                          className="App-footer-contact-btn"
                          onClick={() => setContactExpanded(true)}
                        >
                          Contact
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="App-footer-col">
                    <h4 className="App-footer-heading">Resources</h4>
                    <ul className="App-footer-links">
                      <li><a href="#/privacy">Privacy Policy</a></li>
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="footer-contact"
                  className="App-footer-contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                >
                  <h3 className="App-footer-contact-title">Get in Touch</h3>
                  <p className="App-footer-contact-sub">
                    Reach out. We read everything.
                  </p>
                  <div className="App-footer-contact-buttons">
                    <a
                      href="mailto:showupinbox.refocus327@passinbox.com"
                      className="App-footer-contact-btn-large"
                    >
                      <Mail size={28} strokeWidth={1.5} />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://instagram.com/showup.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="App-footer-contact-btn-large"
                    >
                      <AtSign size={28} strokeWidth={1.5} />
                      <span>Instagram</span>
                    </a>
                  </div>
                  <motion.button
                    className="App-close-btn App-close-btn--footer"
                    onClick={() => setContactExpanded(false)}
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 360, damping: 22 }}
                  >
                    &times;
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            className="App-footer-panel App-footer-panel--brand"
            layout
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          >
            <div className="App-footer-bottom">
              <LogoIcon size={50} style={{ opacity: 0.12 }} />
              <span className="App-footer-brand">SHOWUP</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
