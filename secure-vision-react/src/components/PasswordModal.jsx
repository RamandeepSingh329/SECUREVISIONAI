import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, X, Sparkles } from 'lucide-react';

const PasswordModal = ({ open, onSubmit, onClose, error, isVerifying, success }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (open) {
      setValue('');
    }
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isVerifying && !success) {
      onSubmit(value.trim());
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="password-modal-root" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="password-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="password-modal-card"
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          >
            <div className="password-modal-header">
              <div>
                <div className="password-modal-title">Secure Access Verification</div>
                <div className="password-modal-subtitle">Authenticate before initialization</div>
              </div>
              <button
                type="button"
                className="password-modal-close"
                onClick={onClose}
                disabled={isVerifying}
              >
                <X size={16} />
              </button>
            </div>

            <div className="password-modal-body">
              <div className="password-modal-holo">
                <div className="password-modal-visual" />
                <div className="password-modal-highlight" />

                <div className="password-modal-inner-glow">
                  {success ? (
                    <div className="password-modal-success-state">
                      <div className="password-modal-animate-ring">
                        <div className="password-modal-ring" />
                        <div className="password-modal-ring password-modal-ring--small" />
                        <div className="password-modal-check">
                          <ShieldCheck size={22} />
                          ACCESS GRANTED
                        </div>
                      </div>
                      <div className="password-modal-success">Initializing secure protocol...</div>
                    </div>
                  ) : (
                    <div className="password-modal-action-grid">
                      <div className="password-modal-icon-shell">
                        <Lock size={34} />
                      </div>
                      <div className="password-modal-copy">
                        <div className="password-modal-copy-title">Encrypted initialization lock</div>
                        <div className="password-modal-copy-detail">Enter the master key to unlock the secure startup sequence.</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {!success && (
                <form className="password-modal-form" onSubmit={handleSubmit}>
                  <label htmlFor="secure-password" className="password-modal-label">
                    Master password
                  </label>
                  <input
                    id="secure-password"
                    className="password-modal-input"
                    type="password"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Enter Password To Access Secure Vision"
                    autoFocus
                    disabled={isVerifying}
                  />
                  {error && <div className="password-modal-error">{error}</div>}

                  <div className="password-modal-actions">
                    <button
                      type="button"
                      className="password-modal-btn secondary"
                      onClick={onClose}
                      disabled={isVerifying}
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="password-modal-btn primary"
                      disabled={isVerifying || !value.trim()}
                    >
                      {isVerifying ? 'VERIFYING...' : 'VERIFY'}
                      {isVerifying && <Sparkles size={14} />}
                    </button>
                  </div>
                </form>
              )}

              <div className="password-modal-footer-note">
                This access checkpoint uses a one-time verification sequence for secure startup.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordModal;
