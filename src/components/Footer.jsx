import { Input,Button } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscriber-container">
        <div className="subscribe-content">
        <h3>Never miss an update.</h3>
        <p> Sign up to our newsletter and stay up to date on new features and exciting new projects.</p>
        </div>
        <div className="subscribe-form">
        <div className="subscribeform">
        <Button  href="https://c40b38ed.sibforms.com/serve/MUIFABwzFbdDovt118p7SdI5cI3ZnXvVoEFrMPtVxlJnBU5sGW7-uagUK1MvZnb35m9bZqHhwcvsmOf5f47HmB-w5JjmXroVfyDRokXbhnJWuMcuj60XzekLJ20rJ8Qs-B7cK-j9VRjo2QH-EsJdVzc3T4avqZOQYWpAkDysYxhqIn8w9_6cQTsqF81CIZuCvth2RSDgLMGrdZB3" className="subscribe-btn" color="primary">Subscribe Now</Button>
        </div>
      <p>By subscribing you agree to the <a href="">Terms of Use</a> and <a href="">Privacy Policy</a></p>
        </div>
        </div>
        <ul className="footer-links">
        <div className="footergroup1">
        <h5>Academy</h5>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
        </div>
        <div className="footergroup2">
          <h5>Links</h5>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </div>
        <div className="footergroup3">
          <h5>Social Links</h5>
          <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
          <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
        </div>
        <div className="footergroup4">
        <h5>More</h5>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
        </div>
        </ul>
        <p>&copy; {new Date().getFullYear()} LabQMS</p>
      </div>
    </footer>
  );
};

export default Footer;
