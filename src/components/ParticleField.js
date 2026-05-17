import { useRef, useEffect, useState } from 'react';
import './ParticleField.css';

const PARTICLE_COUNT = 60;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const ParticleField = ({ className = '', density = 1 }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    observerRef.current = new IntersectionObserver(
      entries => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1 }
    );
    observerRef.current.observe(containerRef.current);
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * (Math.min(window.devicePixelRatio, 2));
      canvas.height = h * (Math.min(window.devicePixelRatio, 2));
      ctx.setTransform(canvas.width / w, 0, 0, canvas.height / h, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const count = Math.floor(PARTICLE_COUNT * density);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: randomBetween(0.5, 2),
      speed: randomBetween(0.15, 0.5),
      opacity: randomBetween(0.08, 0.35),
      drift: randomBetween(-0.2, 0.2),
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: randomBetween(0.01, 0.03),
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particlesRef.current.forEach(p => {
        p.y -= p.speed;
        p.x += p.drift + Math.sin(p.pulse + performance.now() * 0.001 * p.pulseSpeed) * 0.3;
        p.pulse += p.pulseSpeed;

        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 77, 0, ${p.opacity})`;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isVisible, density]);

  return (
    <div ref={containerRef} className={`particle-field ${className}`}>
      <canvas ref={canvasRef} className="particle-field-canvas" />
    </div>
  );
};

export default ParticleField;
