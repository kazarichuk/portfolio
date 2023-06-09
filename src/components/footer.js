import "./footer.css";
const Footer = () => {
  return (
    <div className="frame-group">
      <div className="line-parent">
        <div className="frame-child" />
        <div className="frame-item" />
      </div>
      <div className="frame-inner" />
      <b className="designed-by-kazarichuk">DESIGNED BY KAZARICHUK 2023 ©</b>
      <div className="icons">
        <a href="https://www.instagram.com/konstantin_kazarichuk/" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons.svg" />
        </a>
        <a href="https://github.com/kazarichuk" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons1.svg" />
        </a>
        <a href="https://www.linkedin.com/in/konstantin-k-1124791a0/" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons2.svg" />
        </a>
        <a href="https://medium.com/@kazarichuk" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons3.svg" />
        </a>
        <a href="https://dribbble.com/Kazarichuk" target="_blank" rel="noopener noreferrer">
            <img className="icons5" alt="" src="/icons4.svg" />
        </a>
    </div>
    </div>
  );
};

export default Footer;
