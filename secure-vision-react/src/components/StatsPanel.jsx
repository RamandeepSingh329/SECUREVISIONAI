import React from 'react';

const StatsPanel = ({ status, predictions, isMonitoring, isLoading, alertLevel, alertUrgency, onInit }) => {
  const getProbabilityColor = (val) => {
    return val > 80 ? '#c9302c' : '#c9a962';
  };

  return (
    <div className="stats-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Binary Stream Background */}
      {isMonitoring && (
        <div className="binary-stream">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="binary-column" 
              style={{ 
                left: `${i * 10}%`, 
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            >
              {Math.random().toString(2).substring(2, 20)}<br/>
              {Math.random().toString(2).substring(2, 20)}<br/>
              {Math.random().toString(2).substring(2, 20)}<br/>
            </div>
          ))}
        </div>
      )}

      <div className="label-card">
        <div className="label-title">System Status</div>
        <p className="output-status" style={{
          color: status.includes('⚠') || status.includes('CRITICAL') ? '#c9302c' : 
                 status.includes('ALERT') ? '#d97706' :
                 status === 'Protocol Resolved' ? '#2d5a3d' : '#fff'
        }}>
          {status}
        </p>
        
        {/* Neural Activity Graph */}
        {isMonitoring && (
          <div className="neural-heartbeat">
            <div className="heartbeat-line"></div>
          </div>
        )}

        <p className="clock-display">
          {isMonitoring ? `SYNCED: ${new Date().toLocaleTimeString([], { hour12: false })}` : 'SYNCING...'}
        </p>
      </div>

      {/* Neural Gauges */}
      {isMonitoring && (
        <div className="gauge-container">
          <div className="neural-gauge">
            <svg className="gauge-svg" width="60" height="60">
              <circle className="gauge-bg" cx="30" cy="30" r="28" />
              <circle className="gauge-fill" cx="30" cy="30" r="28" style={{ strokeDashoffset: 176 - (176 * 0.85) }} />
            </svg>
            <span className="gauge-value">85%</span>
            <span className="gauge-label">LOAD</span>
          </div>
          <div className="neural-gauge">
            <svg className="gauge-svg" width="60" height="60">
              <circle className="gauge-bg" cx="30" cy="30" r="28" />
              <circle className="gauge-fill" cx="30" cy="30" r="28" style={{ strokeDashoffset: 176 - (176 * (alertUrgency / 100)) }} />
            </svg>
            <span className="gauge-value">{alertUrgency}%</span>
            <span className="gauge-label">RISK</span>
          </div>
        </div>
      )}

      {/* Threat Level Indicator */}
      {isMonitoring && (
        <div className={`label-card threat-indicator ${alertLevel}`}>
          <div className="label-title">Threat Level</div>
          <div className="threat-level-display">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span className={`threat-badge ${alertLevel}`}>
                {alertLevel === 'critical' ? '🔴 CRITICAL' : 
                 alertLevel === 'warning' ? '🟠 ELEVATED' : 
                 alertLevel === 'normal' ? '🟢 NORMAL' : '⚪ STANDBY'}
              </span>
              
              <div className="threat-blob-container" style={{ color: getProbabilityColor(alertUrgency) }}>
                <div className="threat-blob"></div>
              </div>
            </div>

            {alertUrgency > 0 && (
              <div className="urgency-bar">
                <div 
                  className="urgency-fill" 
                  style={{ 
                    width: `${alertUrgency}%`,
                    background: alertUrgency > 80 ? '#c9302c' : 
                                alertUrgency > 50 ? '#d97706' : '#c9a962'
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="prediction-box">
        <div className="label-title" style={{ marginBottom: '15px' }}>Neural Inference Logs</div>
        {predictions.map((pred, index) => (
          <div key={index} className="prediction-card" style={{ color: getProbabilityColor(pred.probability * 100) }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 'bold' }}>
              <span style={{ letterSpacing: '1px' }}>CLASS: {pred.className || 'SCANNING...'}</span>
              <span>{Math.round(pred.probability * 100)}%</span>
            </div>
            
            <div className="confidence-waveform-container" style={{ height: '15px', background: 'transparent', border: 'none', padding: 0 }}>
              <div className="neural-waveform" style={{ width: '100%', height: '6px' }}>
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="waveform-bar" style={{ animationDelay: `${i * 0.1}s`, height: `${Math.random() * 100}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`start-btn ${isLoading ? 'loading' : ''}`}
        onClick={onInit}
        disabled={isMonitoring || isLoading}
      >
        {isLoading ? (
          <div className="mini-scan-container">
            <span className="btn-loading-text">Initializing</span>
            <div className="mini-scan-bar">
              <div className="mini-scan-fill"></div>
            </div>
          </div>
        ) : isMonitoring ? (
          'System Active'
        ) : (
          'Initialize Secure Protocol'
        )}
      </button>
    </div>
  );
};

export default StatsPanel;
