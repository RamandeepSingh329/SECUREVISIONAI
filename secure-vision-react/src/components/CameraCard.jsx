import React from 'react';

const CameraCard = ({ canvasRef, isBreach, cameraStartup }) => {
  return (
    <div className={`camera-card ${isBreach ? 'breach-active' : ''} ${cameraStartup ? 'camera-startup' : ''}`} id="cam-viewport">
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
      
      {/* Breach Glitch Effect */}
      <div className="breach-glitch"></div>

      <div className="rec-indicator">
        <div className="rec-disk"></div>
        <span className="rec-text">REC • 4K</span>
      </div>
      
      <div className="neural-grid-overlay" style={{ opacity: 0.3 }}>
        <div className="grid-lines"></div>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="data-node" 
            style={{ 
              top: `${Math.random() * 80 + 10}%`, 
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <canvas ref={canvasRef} id="canvas"></canvas>
      <div className="scan-line"></div>
      <div className="camera-id">CAM-001 • SECUREVISION</div>
      <div className="timestamp-overlay">LIVE FEED</div>
    </div>
  );
};

export default CameraCard;
