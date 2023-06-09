import "./footer.css";
const Footer = ({ icons, icons1, icons2, icons3, icons4 }) => {
  return (
    <div className="footer">
      <div className="line-parent">
        <div className="frame-child" />
        <div className="frame-item" />
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/konstantin_kazarichuk/" target="_blank" rel="noopener noreferrer">
          <img className="icons1" alt="" src={icons} />
        </a>
        <a href="https://github.com/kazarichuk" target="_blank" rel="noopener noreferrer">
          <img className="icons1" alt="" src={icons1} />
        </a>
        <a href="https://www.linkedin.com/in/konstantin-k-1124791a0/" target="_blank" rel="noopener noreferrer">
          <img className="icons2" alt="" src={icons2} />
        </a>
        <a href="https://medium.com/@kazarichuk" target="_blank" rel="noopener noreferrer">
          <img className="icons3" alt="" src={icons3} />
        </a>
        <a href="https://dribbble.com/Kazarichuk" target="_blank" rel="noopener noreferrer">
          <img className="icons5" alt="" src={icons4} />
        </a>
      </div>
      <div className="designed-and-developed">
        DESIGNED AND DEVELOPED BY KAZARICHUK 2023 ©
      </div>
      <div className="frame-item" />
    </div>
  );
};

export default Footer;
