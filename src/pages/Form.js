import SignUpContainer from "../components/SignUpContainer";
import BasicSolidLargeBase from "../components/BasicSolidLargeBase";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <div className={styles.form}>
      <SignUpContainer />
      <div className={styles.frameParent}>
        <div className={styles.traveltailorParent}>
          <h2 className={styles.traveltailor}>TravelTailor</h2>
          <div className={styles.tailorMadePlans}>
            TAILOR MADE PLANS FOR ALL YOUR TRAVELS
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/group-2.svg" />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.whereDoYou}>Where do you want to go?</div>
      <div className={styles.formInner}>
        <input className={styles.componentChild} type="text" />
      </div>
      <div className={styles.whatIsYour}>What is your budget?</div>
      <div className={styles.formChild}>
        <input className={styles.componentChild} type="text" />
      </div>
      <div className={styles.howManyPeople}>How many people?</div>
      <div className={styles.rectangleDiv}>
        <input className={styles.componentChild} type="text" />
      </div>
      <div className={styles.howManyDaysContainer}>
        <p className={styles.howManyDays}>How many days will your trip be?</p>
      </div>
      <div className={styles.formInner1}>
        <input className={styles.componentChild} type="text" />
      </div>
      <BasicSolidLargeBase />
    </div>
  );
};

export default Form;
