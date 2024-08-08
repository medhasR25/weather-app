import React from 'react';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: 'rgba(28, 28, 30, 0.85)',
      position: 'sticky',
      top: '0',
    }}>
      <Typography variant="h2" style={{ color: '#f5f5f7' }}>
        MR
      </Typography>
      <img 
        src="https://static.vecteezy.com/system/resources/previews/020/067/904/original/kmr-abstract-technology-circle-setting-logo-design-on-black-background-kmr-creative-initials-letter-logo-vector.jpg" 
        alt="Logo" 
        style={{
          height: '100px', // Adjust as needed
          width: 'auto',
          marginLeft: 'auto',
        }}
      />
    </header>
  );
};

export default Header;
