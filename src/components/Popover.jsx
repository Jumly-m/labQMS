import  { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

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
          <h4>JOIN LABQMS 🔥🔥</h4>
          <p>Join more than 500+  Medical lab experts and be the first to get all updates on time</p>
          <Button block="True" href='https://c40b38ed.sibforms.com/serve/MUIFAMT7Z8Uw53SI2lZzVWEeS8ZKcEvdK8b2Vr8awFsMV4H2W1LzowRtqSA_jc5EUbJvQhE1UIc_c2vHOcaiA4b2hLJZSH9pKLRpVCxbT1nOWTrAzaswNnfMZJChU2SxcJU8KStKIEjJaXoJsrafmUFhMdzPebVSaTa_4eV5q_NCGU794A1-CBf6uQm0EXn0w-UAuJjdPsemqhll' color='primary'>Subscribe Now</Button>
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
  width: '300px',
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
