import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  Download, 
  X, 
  MapPin, 
  Activity, 
  Clock, 
  Shield,
  Zap,
  Camera
} from 'lucide-react';

const AlertPopup = ({ alert, onResolve, evidenceCapture }) => {
  const [elapsed, setElapsed] = useState(0);
  
  useEffect(() => {
    if (!alert) return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - new Date(alert.timestamp).getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [alert]);
  
  const getSeverityColor = (severity) => {
    switch (severity?.toUpperCase()) {
      case 'CRITICAL': return '#ff3333';
      case 'HIGH': return '#f5a623';
      case 'MEDIUM': return '#c9a962';
      default: return '#64748b';
    }
  };

  const severityColor = getSeverityColor(alert?.severity);

  return (
    <AnimatePresence>
      {alert && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className={`adv-alert-popup alert-${alert.severity?.toLowerCase()}`}
          style={{ '--accent-color': severityColor }}
        >
          {/* Scanning Line Animation */}
          <div className="adv-scan-line"></div>
          
          <div className="adv-popup-inner">
            {/* Header */}
            <div className="adv-header" style={{ borderColor: `${severityColor}44` }}>
              <div className="adv-badge">
                <div className="neural-waveform" style={{ color: severityColor }}>
                  <div className="waveform-bar"></div>
                  <div className="waveform-bar"></div>
                  <div className="waveform-bar"></div>
                  <div className="waveform-bar"></div>
                  <div className="waveform-bar"></div>
                </div>
                <ShieldAlert size={14} style={{ color: severityColor }} />
                <span>{alert.severity} PRIORITY</span>
              </div>
              <div className="adv-timer">
                <Clock size={12} />
                <span>-{elapsed}s</span>
              </div>
            </div>

            <div className="adv-body">
              {/* Image Preview / Visual Evidence */}
              <div className="adv-visual">
                <AnimatePresence mode="wait">
                  {evidenceCapture ? (
                    <motion.div 
                      key="evidence"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="adv-evidence-container"
                    >
                      <img src={evidenceCapture} alt="Neural Evidence" />
                      <div className="adv-overlay-grid"></div>
                      <div className="adv-corners">
                        <span></span><span></span><span></span><span></span>
                      </div>
                      <div className="adv-capture-tag">
                        <Camera size={10} />
                        EVIDENCE SECURED
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="scanning"
                      className="adv-scanning-placeholder"
                    >
                      <div className="adv-scanning-bar">
                        <motion.div 
                          animate={{ left: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="adv-bar-glow"
                        />
                      </div>
                      <Shield size={32} className="adv-center-icon" />
                      <span className="adv-scanning-text">STITCHING NEURAL COLLAGE...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Data Section */}
              <div className="adv-info">
                <h2 className="adv-title">
                  <span className="adv-glitch" data-text={`${alert.type?.toUpperCase()} DETECTED`}>
                    {alert.type?.toUpperCase()} DETECTED
                  </span>
                </h2>
                
                <div className="adv-stats-grid">
                  <div className="adv-stat-item">
                    <div className="adv-stat-label"><Activity size={10} /> CONFIDENCE</div>
                    <div className="adv-stat-value" style={{ color: severityColor }}>{alert.confidence}%</div>
                  </div>
                  <div className="adv-stat-item">
                    <div className="adv-stat-label"><MapPin size={10} /> LOCATION</div>
                    <div className="adv-stat-value">{alert.location}</div>
                  </div>
                  <div className="adv-stat-item">
                    <div className="adv-stat-label"><Zap size={10} /> SENSOR</div>
                    <div className="adv-stat-value">CAM-01</div>
                  </div>
                </div>

                <div className="adv-terminal">
                  <div className="adv-terminal-line">_ [SYSTEM] ANOMALY MATCHED SIGNATURE</div>
                  <div className="adv-terminal-line">_ [A.I.] INITIATING SECURE ARCHIVE...</div>
                  <div className="adv-terminal-line highlight" style={{ color: severityColor }}>
                    {evidenceCapture ? "> EVIDENCE DOWNLOADED" : "> CAPTURING NEURAL FRAMES..."}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="adv-actions">
              <button 
                onClick={onResolve}
                className="adv-btn adv-btn-outline"
              >
                <X size={14} />
                <span>OVERRIDE</span>
              </button>
              
              {evidenceCapture && (
                <a 
                  href={evidenceCapture}
                  download={`SECURE_EVIDENCE_${alert.id}.jpg`}
                  className="adv-btn adv-btn-primary"
                  style={{ backgroundColor: severityColor }}
                >
                  <Download size={14} />
                  <span>EXTRACT CASE LOG</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertPopup;
