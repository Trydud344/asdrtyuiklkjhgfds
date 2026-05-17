import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import './SignalMeter.css';

const BAR_COUNT = 5;
const MAX_SCORE = 1000;

const SignalMeter = ({ score = 500, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) setAnimated(true);
  }, [isInView, animated]);

  const normalizedScore = Math.min(Math.max(score, 1), MAX_SCORE);
  const barValue = normalizedScore / MAX_SCORE;

  const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
    const threshold = (i + 1) / BAR_COUNT;
    const isActive = barValue >= threshold;
    const isPartial = !isActive && barValue > i / BAR_COUNT;
    const partialHeight = isPartial
      ? ((barValue - i / BAR_COUNT) / (threshold - i / BAR_COUNT)) * 100
      : 0;

    const rawHeight = isActive ? 100 : partialHeight;
    const minHeight = 8;
    const height = Math.max(rawHeight, minHeight);
    const delay = i * 0.12;

    let barColor;
    if (i < 2) barColor = '#FF1744';
    else if (i < 4) barColor = '#FFB300';
    else barColor = '#00C853';

    return { i, height, delay, barColor, isActive, isPartial };
  });

  return (
    <div ref={ref} className={`signal-meter ${className}`}>
      <div className="signal-meter-label">SIGNAL</div>
      <div className="signal-meter-display">
        <div className="signal-meter-bars">
          {bars.map((bar) => (
            <div key={bar.i} className="signal-meter-bar-track">
              <motion.div
                className="signal-meter-bar-fill"
                initial={{ height: '8%' }}
                animate={animated ? { height: `${bar.height}%` } : {}}
                transition={{
                  duration: 0.7,
                  delay: bar.delay,
                  type: 'spring',
                  stiffness: 180,
                  damping: 18,
                }}
                style={{
                  '--bar-color': bar.barColor,
                  '--bar-glow': `${bar.barColor}66`,
                }}
              />
              <div
                className={`signal-meter-bar-glow ${bar.isActive ? 'active' : ''}`}
                style={{
                  '--bar-color': bar.barColor,
                  '--bar-glow': `${bar.barColor}44`,
                  animationDelay: `${bar.delay + 0.7}s`,
                }}
              />
            </div>
          ))}
        </div>
        <motion.div
          className="signal-meter-score"
          initial={{ opacity: 0, y: 10 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="signal-meter-number">{score}</span>
          <span className="signal-meter-max">/ {MAX_SCORE}</span>
        </motion.div>
      </div>
      <div className="signal-meter-ticks">
        <span>1</span>
        <span>250</span>
        <span>500</span>
        <span>750</span>
        <span>1000</span>
      </div>
    </div>
  );
};

export default SignalMeter;
