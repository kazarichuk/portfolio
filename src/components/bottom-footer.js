import { useMemo } from "react";
import "./bottom-footer.css";
const BottomFooter = ({
  productIds,
  productIds24x24,
  productIds24x24x,
  propZIndex,
}) => {
  const footerStyle = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div className="footer1" style={footerStyle}>
      <div className="line-group">
        <div className="frame-inner" />
        <div className="footer-item" />
      </div>
      <div className="icons6">
  <a href="https://www.instagram.com/konstantin_kazarichuk/" target="_blank" rel="noopener noreferrer">
    <img className="icons7" alt="" src={productIds} />
  </a>
  <a href="https://github.com/kazarichuk" target="_blank" rel="noopener noreferrer">
    <img className="icons7" alt="" src={productIds24x24} />
  </a>
  <a href="https://www.linkedin.com/in/konstantin-k-1124791a0/" target="_blank" rel="noopener noreferrer">
    <img className="icons7" alt="" src="/icons7.svg" />
  </a>
  <a href="https://medium.com/@kazarichuk" target="_blank" rel="noopener noreferrer">
    <img className="icons7" alt="" src={productIds24x24x} />
  </a>
  <a href="https://dribbble.com/Kazarichuk" target="_blank" rel="noopener noreferrer">
    <img className="icons11" alt="" src="/icons9.svg" />
  </a>
</div>
      <b className="designed-and-developed1">
        DESIGNED AND DEVELOPED BY KAZARICHUK 2023 ©
      </b>
      <div className="footer-item" />
    </div>
  );
};

export default BottomFooter;
