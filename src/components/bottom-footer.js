import "./bottom-footer.css";
const BottomFooter = ({
  productIds,
  productIdsArray,
  productIdsToDisplay,
  productIdsToDisplay2,
  productIdsToDisplay3,
}) => {
  return (
    <div className="footer">
      <div className="line-parent">
        <div className="frame-child" />
        <div className="frame-item" />
      </div>
      <div className="icons">
        <img className="icons1" alt="" src={productIds} />
        <img className="icons1" alt="" src={productIdsArray} />
        <img className="icons1" alt="" src={productIdsToDisplay} />
        <img className="icons1" alt="" src={productIdsToDisplay2} />
        <img className="icons5" alt="" src={productIdsToDisplay3} />
      </div>
      <div className="designed-and-developed">
        DESIGNED AND DEVELOPED BY KAZARICHUK 2023 ©
      </div>
      <div className="frame-item" />
    </div>
  );
};

export default BottomFooter;
