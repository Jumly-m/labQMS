import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const Subscribe = () => {
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    // Show the popover when the user visits
    setShowPopover(true);

    // Hide the popover after 5 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setShowPopover(false);
    }, 50000); // Duration in milliseconds

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
          <h4>Subscribe to LabQMS🔥🔥</h4>
          <p>Be the first to get all notifications on time!</p>
          <iframe
            width="100%"
            height="200"
            src="https://c40b38ed.sibforms.com/serve/MUIFABwzFbdDovt118p7SdI5cI3ZnXvVoEFrMPtVxlJnBU5sGW7-uagUK1MvZnb35m9bZqHhwcvsmOf5f47HmB-w5JjmXroVfyDRokXbhnJWuMcuj60XzekLJ20rJ8Qs-B7cK-j9VRjo2QH-EsJdVzc3T4avqZOQYWpAkDysYxhqIn8w9_6cQTsqF81CIZuCvth2RSDgLMGrdZB3"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{ borderRadius: '8px', marginTop: '10px' }}
          />
          <Button block color='primary' href='https://forms.office.com/r/VRa3jN7G3k'>Start Now</Button>
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

export default Subscribe;
