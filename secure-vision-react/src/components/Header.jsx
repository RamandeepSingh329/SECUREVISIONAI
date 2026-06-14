import React from 'react';

const Header = () => {
  return (
    <header className="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="title" style={{ marginTop: '0' }}>SecureVision <span>AI</span></h1>
      <p className="subtitle" style={{ marginBottom: '2.5rem' }}>Advanced Neural Surveillance & Activity Recognition.</p>
      
      {/* Elegantly Simple Premium Team Roster */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.02)', 
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        padding: '1.5rem 4rem 2rem 4rem', 
        borderRadius: '16px', 
        border: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
        marginTop: '0.5rem'
      }}>
        
        {/* Simple Premium Title */}
        <div style={{ 
          color: 'var(--accent-bronze)',
          fontSize: '0.7rem',
          fontWeight: '500',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          width: '100%',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          Team Tech Titans
        </div>
        
        {/* Clean Line-up */}
        <div style={{ display: 'flex', gap: '3.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 400 }}>Mentor</span>
            <span style={{ fontSize: '0.95rem', fontWeight: '400', color: 'rgba(255, 255, 255, 0.9)', letterSpacing: '0.5px' }}>Manmeet Kaur</span>
          </div>
          
          <div style={{ width: '1px', height: '24px', background: 'rgba(255, 255, 255, 0.08)' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 400 }}>Team Leader</span>
            <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#fff', letterSpacing: '0.5px' }}>Ramandeep Singh</span>
          </div>

          <div style={{ width: '1px', height: '24px', background: 'rgba(255, 255, 255, 0.08)' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 400 }}>Members</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '300', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '0.5px' }}>
              Ramandeep Kaur <span style={{ opacity: 0.2, margin: '0 8px' }}>|</span> Pooja Lamba
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
