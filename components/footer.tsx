// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: 'black',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  };

  const socialIconStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    margin: '0 0.5rem',
    color: 'white',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>© {new Date().getFullYear()} &copy; Copyright <strong><span>Panda</span></strong
          >. All Rights Reserved</p>
        <div>
          {/* Add your social media icons or links here */}
          {/* Example: */}
          <div className="credits">
          Designed by <a href="http://dhruvsanan.vercel.app" className='text-gradient-to-l' target="_blank">Dhruv Sanan</a>
            </div>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
