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
      <div>
        <a href="https://dsanan01.notion.site/Elevate-Web-Privacy-Policy-e6678b9111f14827bf041edbca0f9393" 
        className='text-blue-500'
        target="_blank">
          Privacy Policy &nbsp; &nbsp;
          </a>
        <a href="https://dsanan01.notion.site/Elevate-Web-Terms-Conditions-4efa13de8c23479d9f09376329fe553c" 
        className='text-blue-500'
          target="_blank">
          &nbsp; &nbsp; Terms and Conditions
          </a>
        </div>
        <p>© {new Date().getFullYear()} &copy; Copyright <strong><span>Elevate Web</span></strong
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
