import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import './VerdictBadge.css';

const VERDICTS = {
  ALLOWED: {
    label: 'ALLOWED',
    glow: 'rgba(0, 200, 83, 0.4)',
    border: '#00C853',
    text: '#00C853',
    desc: 'Content passes all moderation layers. Published immediately.',
  },
  DENIED: {
    label: 'DENIED',
    glow: 'rgba(255, 23, 68, 0.4)',
    border: '#FF1744',
    text: '#FF1744',
    desc: 'Blocked automatically. Violence, hate speech, or illegal coordination.',
  },
  AMBIGUOUS: {
    label: 'AMBIGUOUS',
    glow: 'rgba(255, 179, 0, 0.4)',
    border: '#FFB300',
    text: '#FFB300',
    desc: 'Routed to human moderator queue. Claim timeout at 60 seconds.',
  },
};

const VerdictBadge = ({ verdict = 'ALLOWED', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) setAnimated(true);
  }, [isInView, animated]);

  const v = VERDICTS[verdict] || VERDICTS.ALLOWED;

  return (
    <motion.div
      ref={ref}
      className={`verdict-badge verdict-${verdict.toLowerCase()} ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={animated ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      style={{
        '--verdict-glow': v.glow,
        '--verdict-border': v.border,
        '--verdict-text': v.text,
      }}
    >
      <div className="verdict-badge-inner">
        <div className="verdict-badge-label">
          <motion.span
            className="verdict-dot"
            animate={animated ? { scale: [1, 1.4, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ background: v.text }}
          />
          <span className="verdict-badge-status">{v.label}</span>
        </div>
        <p className="verdict-badge-desc">{v.desc}</p>
      </div>
      <div className="verdict-badge-ring" />
    </motion.div>
  );
};

export default VerdictBadge;
