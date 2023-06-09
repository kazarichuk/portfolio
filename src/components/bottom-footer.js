import "./bottom-footer.css";
const BottomFooter = () => {
  return (
    <div className="footer">
      <div className="line-group">
        <div className="frame-child1" />
        <div className="footer-child" />
      </div>
      <div className="icons6">
        <a href="https://www.instagram.com/konstantin_kazarichuk/" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons5.svg" />
        </a>
        <a href="https://github.com/kazarichuk" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons6.svg" />
        </a>
        <a href="https://www.linkedin.com/in/konstantin-k-1124791a0/" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons7.svg" />
        </a>
        <a href="https://medium.com/@kazarichuk" target="_blank" rel="noopener noreferrer">
            <img className="icons1" alt="" src="/icons8.svg" />
        </a>
        <a href="https://dribbble.com/Kazarichuk" target="_blank" rel="noopener noreferrer">
            <img className="icons5" alt="" src="/icons9.svg" />
        </a>
    </div>
      <b className="designed-and-developed">
        DESIGNED AND DEVELOPED BY KAZARICHUK 2023 ©
      </b>
      <div className="footer-child" />
    </div>
  );
};

export default BottomFooter;
