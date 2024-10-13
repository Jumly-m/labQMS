

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} LabQMS</p>
        <ul className="footer-links">
          <li><a href="/services">Courses</a></li>
          <li><a href="/contact">Articles</a></li>
          <li><a href="/privacy">Presentations</a></li>
          <li><a href="/privacy">Exams</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
