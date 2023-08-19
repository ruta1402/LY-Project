import GetStartedContainer from "./GetStartedContainer";
import styles from "./TravelPlanForm.module.css";
const TravelPlanForm = () => {
  return (
    <div className={styles.button}>
      <GetStartedContainer
        buttonText="Let’s Create Your Travel Plan"
        propTop="0%"
        propLeft="0%"
        propBackgroundColor="#6ac1b8"
        propWidth="100%"
        propHeight="100%"
        propRight="0%"
        propBottom="0%"
        propFontSize="40px"
      />
    </div>
  );
};

export default TravelPlanForm;
