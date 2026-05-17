import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import './MapGrid.css';

const MapGrid = ({ className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-200px' });

  return (
    <div ref={ref} className={`map-grid ${className}`}>
      <motion.div
        className="map-grid-lines"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      />
      <div className="map-grid-dots" />
      <div className="map-grid-radial" />
      <div className="map-grid-scan" />
    </div>
  );
};

export default MapGrid;
