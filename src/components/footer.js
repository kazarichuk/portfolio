import { useMemo } from "react";
import "./footer.css";
const Footer = ({
  productIds,
  productIdsArray,
  productIdsString,
  productIds24x24,
  productIds24x24Array,
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
        <img className="icons7" alt="" src={productIds} />
        <img className="icons7" alt="" src={productIdsArray} />
        <img className="icons7" alt="" src={productIdsString} />
        <img className="icons7" alt="" src={productIds24x24} />
        <img className="icons11" alt="" src={productIds24x24Array} />
      </div>
      <b className="designed-and-developed1">
        DESIGNED AND DEVELOPED BY KAZARICHUK 2023 ©
      </b>
      <div className="footer-item" />
    </div>
  );
};

export default Footer;
