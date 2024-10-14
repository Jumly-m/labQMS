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
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter Email address"
          type="text"
          className="subscribeInput"
        />
        <Button className="subscribe-btn" color="primary">Subscribe</Button>
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
