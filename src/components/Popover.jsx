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
          <h4>LABQMS SURVEY! 🔥🔥</h4>
          <p>Hello Labqms team ,take 2 minutes to suggest and make success of our community!</p>
          <Button block="True" href='https://forms.office.com/r/VRa3jN7G3k' color='primary'>Start Now</Button>
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
