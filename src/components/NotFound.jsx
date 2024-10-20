// NotFound.js
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <>
    <Header/>
     <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="404.png" alt="Page Not Found" />
      <button className="home-button" onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
    <Footer/>
    </>
   
  );
};

export default NotFound;
