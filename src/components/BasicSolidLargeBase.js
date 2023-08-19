import GetStartedContainer from "./GetStartedContainer";
import styles from "./BasicSolidLargeBase.module.css";
const BasicSolidLargeBase = () => {
  return (
    <div className={styles.basicsolidLargeBase}>
      <GetStartedContainer
        buttonText="Create my plan"
        propTop="0%"
        propLeft="0%"
        propBackgroundColor="#07588a"
        propWidth="100%"
        propHeight="100%"
        propRight="0%"
        propBottom="0%"
        propFontSize="36px"
      />
    </div>
  );
};

export default BasicSolidLargeBase;
