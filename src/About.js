import { motion } from 'motion/react';
import { Scale, Shield, Eye, MapPin, Users, Code, Mail, ArrowLeft } from 'lucide-react';
import './About.css';

function About() {
  const handleBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="About">
      <div className="About-hero">
        <motion.div
          className="About-hero-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="About-icon-ring">
            <Scale size={40} color="#FF4D00" strokeWidth={1.5} />
          </div>
          <h1 className="About-title">About ShowUp</h1>
          <p className="About-lead">
            A tool for people who move together without leaving tracks.
          </p>
        </motion.div>
      </div>

      <div className="About-body">
        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <MapPin size={20} color="#FF4D00" strokeWidth={1.5} />
            <h2>What This Is</h2>
          </div>
          <p>
            ShowUp is a map-based gathering platform. You drop a pin. People show up. There is no account creation in the traditional sense — no email verification, no phone number, no social graph to import. Just a nickname and a secret token. You are a presence on a map, not a profile in a database.
          </p>
          <p>
            It was built for coordinated, peaceful collective action. For the moments when people need to find each other in the city without leaving a trail. For the protests that do not want to be tracked, the gatherings that do not want to be mined, and the conversations that do not want to be archived forever.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Scale size={20} color="#2979FF" strokeWidth={1.5} />
            <h2>Why It Exists</h2>
          </div>
          <p>
            The tools that exist were not built for this. Social platforms monetize attention. Messaging apps demand phone numbers. Map services log every coordinate. Even "privacy-focused" tools often require an identity layer that creates a single point of failure: if the server is compromised, the user list is a hit list.
          </p>
          <p>
            ShowUp exists because someone needed a tool that treated anonymity as the default, not a premium feature. Something that understood the stakes: surveillance, doxxing, arrest. Something built with the patience of people who know that trust is earned through competence, not marketing.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Shield size={20} color="#00C853" strokeWidth={1.5} />
            <h2>How It Works</h2>
          </div>
          <p>
            When you arrive, you receive a secret token. The server stores only a cryptographic hash — not the token itself. Lose the token, and your presence is gone. No recovery. No backdoor. No customer support ticket to trace.
          </p>
          <p>
            You create events by dropping pins on a map. Location is coarse by design — neighborhoods, not addresses. Events fade when they end. Messages disappear with them. Every image uploaded is stripped of metadata before it reaches another person. What you share is what you intended. Nothing more.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Users size={20} color="#FF4D00" strokeWidth={1.5} />
            <h2>Who Built It</h2>
          </div>
          <p>
            ShowUp was built by a collective of developers, designers, and activists who have been on both sides of the barricade. Some of us have had our accounts suspended for organizing. Some have seen what happens when a platform's user database becomes evidence. All of us believe that infrastructure for dissent should not be controlled by corporations or subject to government extraction.
          </p>
          <p>
            We do not publish names. We do not have a CEO. The code speaks for itself, and the code is open source. If you want to know who we are, read the commits. If you want to know what we believe, read the policy. If you want to help, open a pull request.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Shield size={20} color="#2979FF" strokeWidth={1.5} />
            <h2>Privacy</h2>
          </div>
          <p>
            We do not track your behavior. We do not build advertising profiles. We do not sell your data to third parties. We do not store your real identity because we never ask for it. Your activity on ShowUp is yours alone. The server knows only what it needs to function: a hash, a nickname, an event description, and a coarse zone. Everything else is ephemeral by design.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Scale size={20} color="#FF4D00" strokeWidth={1.5} />
            <h2>Integrity</h2>
          </div>
          <p>
            Reputation on ShowUp is not a score or a leaderboard. It is a quiet signal that genuine participation earns trust over time. The system is designed to distinguish real voices from manipulation — not by surveilling individuals, but by detecting suspicious patterns that suggest coordinated interference.
          </p>
          <p>
            Moderation is human where it matters. Edge cases get eyes, not just automated flags. Political speech and peaceful organizing are protected — always. The line is clear: no violence, no hate speech, no doxxing, no illegal coordination. We err on the side of voice, because safety and expression are not opposites.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Eye size={20} color="#00C853" strokeWidth={1.5} />
            <h2>Transparency</h2>
          </div>
          <p>
            Our code is fully open source. Security researchers, activists, and the public can inspect it to verify that ShowUp does exactly what we claim. There are no hidden algorithms, no secret data collection mechanisms, no backdoors. Our moderation rules are written in plain language, not legal jargon.
          </p>
          <p>
            We publish what we are building and why. When we make mistakes, we admit them. Regular transparency reports document moderation actions, government requests, and security incidents without spin.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Code size={20} color="#E8E8E8" strokeWidth={1.5} />
            <h2>Open Source</h2>
          </div>
          <p>
            Every line of this platform is available for inspection. We do not believe in "trust us" security. We believe in "check our work" security. The source code is hosted publicly, and the development roadmap is published openly. If you find a vulnerability, report it. If you want to contribute, the door is open.
          </p>
        </motion.section>

        <motion.section
          className="About-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-section-header">
            <Mail size={20} color="#E8E8E8" strokeWidth={1.5} />
            <h2>Contact</h2>
          </div>
          <p>
            Questions, concerns, or contributions? Reach us through the channels listed below. We read everything. We do not use automated response systems. If you are reporting a security issue, please use the responsible disclosure process outlined in our documentation.
          </p>
        </motion.section>
      </div>

      <footer className="About-footer">
        <button className="About-back" onClick={handleBack}>
          <ArrowLeft size={16} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
          <span>Back to ShowUp</span>
        </button>
        <span className="About-footer-brand">SHOWUP</span>
      </footer>
    </div>
  );
}

export default About;
