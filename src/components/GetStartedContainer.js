import { useMemo } from "react";
import styles from "./GetStartedContainer.module.css";
const GetStartedContainer = ({
  buttonText,
  propTop,
  propLeft,
  propBackgroundColor,
  propWidth,
  propHeight,
  propRight,
  propBottom,
  propFontSize,
}) => {
  const basicSolidLargeBaseStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      backgroundColor: propBackgroundColor,
      width: propWidth,
      height: propHeight,
      right: propRight,
      bottom: propBottom,
    };
  }, [
    propTop,
    propLeft,
    propBackgroundColor,
    propWidth,
    propHeight,
    propRight,
    propBottom,
  ]);

  const getStartedStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
    };
  }, [propFontSize]);

  return (
    <div
      className={styles.basicsolidLargeBase}
      style={basicSolidLargeBaseStyle}
    >
      <div className={styles.content}>
        <button className={styles.getStarted} style={getStartedStyle}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default GetStartedContainer;
