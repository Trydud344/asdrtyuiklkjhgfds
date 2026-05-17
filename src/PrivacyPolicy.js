import { motion } from 'motion/react';
import { Shield, Eye, Clock, MapPin, FileImage, Lock, GitBranch, Mail } from 'lucide-react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const handleBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="PrivacyPolicy">
      <div className="PrivacyPolicy-hero">
        <motion.div
          className="PrivacyPolicy-hero-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="PrivacyPolicy-icon-ring">
            <img src="/logo.png" alt="" width="100" height="100" />
          </div>
          <h1 className="PrivacyPolicy-title">Privacy Policy</h1>
          <p className="PrivacyPolicy-updated">Last updated: May 17, 2026</p>
          <p className="PrivacyPolicy-lead">
            We wrote this in plain language because you deserve to understand what happens to your data — without a law degree.
          </p>
        </motion.div>
      </div>

      <div className="PrivacyPolicy-body">
        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <Shield size={20} color="#2979FF" strokeWidth={1.5} />
            <h2>The Short Version</h2>
          </div>
          <p>
            ShowUp is built on a single principle: <strong>your identity is yours alone.</strong> We do not ask for your name, email, phone number, or any government ID. We do not track your behavior, build advertising profiles, or sell your data. We design our systems so that data disappears when it is no longer needed. If we do not have your data, we cannot lose it, leak it, or hand it over.
          </p>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <Lock size={20} color="#FF4D00" strokeWidth={1.5} />
            <h2>What We Collect</h2>
          </div>
          <p>When you create a presence on ShowUp, we store only the following:</p>
          <ul>
            <li>A nickname of your choosing (this is public to other people in your events)</li>
            <li>A cryptographic hash of your secret token (we never store the token itself in plaintext)</li>
            <li>Event descriptions, times, and coarse geographic zones that you choose to create or join</li>
            <li>Messages and files you send within events</li>
          </ul>
          <p>We explicitly <strong>do not</strong> collect or store:</p>
          <ul>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Real names or government identities</li>
            <li>Precise GPS coordinates</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Browsing history outside of ShowUp</li>
            <li>Biometric data</li>
          </ul>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <Eye size={20} color="#00C853" strokeWidth={1.5} />
            <h2>How We Use Your Data</h2>
          </div>
          <p>We use the minimal data we collect for exactly these purposes:</p>
          <ul>
            <li>To display events and channels you have joined</li>
            <li>To show your nickname to other participants in shared events</li>
            <li>To protect the platform from automated abuse and coordinated manipulation</li>
            <li>To enforce our community standards against violence, hate speech, and doxxing</li>
            <li>To maintain the security and stability of the service</li>
          </ul>
          <p>We do not use your data for advertising, recommendation algorithms, or any purpose not listed here.</p>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <Clock size={20} color="#FF4D00" strokeWidth={1.5} />
            <h2>Data Retention</h2>
          </div>
          <p>
            ShowUp is designed to forget. Events and their associated messages are ephemeral by design — they fade when they are no longer needed. Specific retention periods depend on the type of data:
          </p>
          <ul>
            <li><strong>Active events:</strong> Retained for the duration of the event plus a short grace period for follow-up coordination.</li>
            <li><strong>Ended events:</strong> Automatically purged. We do not archive old events indefinitely.</li>
            <li><strong>Messages:</strong> Deleted along with the event they belong to.</li>
            <li><strong>Account presence:</strong> If your token is lost, your presence is gone. We have no recovery mechanism because we have no record of who you are.</li>
            <li><strong>Moderation logs:</strong> Retained for platform safety and transparency reporting, but stripped of identifying detail wherever possible.</li>
          </ul>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <MapPin size={20} color="#2979FF" strokeWidth={1.5} />
            <h2>Location Data</h2>
          </div>
          <p>
            We never store precise GPS coordinates. Location on ShowUp is intentionally coarse — broad areas, neighborhoods, or custom zones that you define. The map shows presence at a scale that helps people gather without pinpointing individuals. Geo-Integrity protections detect suspicious patterns that suggest coordinated interference, not individual tracking.
          </p>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <FileImage size={20} color="#00C853" strokeWidth={1.5} />
            <h2>Files and Metadata</h2>
          </div>
          <p>
            Every image and file uploaded to ShowUp is automatically stripped of identifying metadata before it reaches another person. This includes EXIF location tags, device information, timestamps, and camera details. What you share is what you intended to share. Nothing more.
          </p>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <Shield size={20} color="#FF4D00" strokeWidth={1.5} />
            <h2>Your Rights</h2>
          </div>
          <p>Because we do not collect identifying information, traditional data subject rights work a little differently here:</p>
          <ul>
            <li><strong>Access:</strong> Everything we store about your presence is visible to you inside the app.</li>
            <li><strong>Deletion:</strong> Burn your session. Delete your events. Once gone, we cannot recover them — and neither can anyone else.</li>
            <li><strong>Portability:</strong> Your token grants you access. We do not hold your data hostage because we do not hold your identity.</li>
            <li><strong>Objection and restriction:</strong> If you believe your signal has been misclassified by our systems, contact us. Edge cases get human eyes.</li>
          </ul>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <GitBranch size={20} color="#00C853" strokeWidth={1.5} />
            <h2>Open Source and Verification</h2>
          </div>
          <p>
            Our code is open source. Security researchers, activists, and the public can inspect it to verify that ShowUp does exactly what we claim. There are no hidden backdoors, no secret data collection mechanisms, and no opaque algorithms making decisions you cannot understand. If you know how to read code, you do not have to trust our word. You can check our work.
          </p>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <Eye size={20} color="#2979FF" strokeWidth={1.5} />
            <h2>Transparency Reports</h2>
          </div>
          <p>
            We publish regular transparency reports documenting moderation actions, government requests, and security incidents. When we make mistakes, we admit them. No spin, no burying the bad news in footnotes. The reports are public and plain-language, just like this policy.
          </p>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <img src="/logo.png" alt="" width="50" height="50" />
            <h2>Changes to This Policy</h2>
          </div>
          <p>
            If we change this policy, we will publish the update here and note the effective date. We will not sneak in changes that reduce your privacy. If a material change is required by law or necessary for platform safety, we will make it visible. The public development roadmap is always available for review.
          </p>
        </motion.section>

        <motion.section
          className="PrivacyPolicy-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="PrivacyPolicy-section-header">
            <Mail size={20} color="#E8E8E8" strokeWidth={1.5} />
            <h2>Contact</h2>
          </div>
          <p>
            Questions about this policy? Concerns about how we handle data? Reach us through the channels listed on our contact page. We read everything. We do not use automated response systems.
          </p>
        </motion.section>
      </div>

      <footer className="PrivacyPolicy-footer">
        <button className="PrivacyPolicy-back" onClick={handleBack}>
          <img src="/logo.png" alt="" width="40" height="40" style={{ opacity: 0.5 }} />
          <span>Back to ShowUp</span>
        </button>
        <span className="PrivacyPolicy-footer-brand">SHOWUP</span>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
