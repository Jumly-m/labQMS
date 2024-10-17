import  { useState, useEffect } from 'react';
import Subscribe from './subscribe';

const PopoverCard = () => {
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    // Show the popover when the user visits
    setShowPopover(true);

    // Hide the popover after 5 seconds
    const timer = setTimeout(() => {
      setShowPopover(false);
    }, 500000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Function to close the popover manually
  const closePopover = () => {
    setShowPopover(false);
  };

  return (
    <>
      {showPopover && (
        <div className='popovercard' style={popoverStyle}>
          <button style={closeButtonStyle} onClick={closePopover}>X</button>
          <Subscribe/>
        </div>
      )}
    </>
  );
};

// Popover styling
const popoverStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#fff',
  padding: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  zIndex: 1000,
  width: '500px',
};

// Close button styling
const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default PopoverCard;
