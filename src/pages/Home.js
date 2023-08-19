import SignUpContainer from "../components/SignUpContainer";
import GetStartedContainer from "../components/GetStartedContainer";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <SignUpContainer />
      <div className={styles.frameParent}>
        <div className={styles.traveltailorParent}>
          <h1 className={styles.traveltailor}>TravelTailor</h1>
          <h4 className={styles.tailorMadePlans}>
            TAILOR MADE PLANS FOR ALL YOUR TRAVELS
          </h4>
        </div>
        <img className={styles.frameChild} alt="" src="/group-21.svg" />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.unleashYourWanderlust}>
        <h1 className={styles.unleashYourWanderlust1}>
          Unleash your wanderlust
        </h1>
      </div>
      <div className={styles.frame}>
        <div className={styles.learnMoreButton}>
          <GetStartedContainer
            buttonText="Learn More"
            propTop="0px"
            propLeft="0px"
            propBackgroundColor="#bfe9db"
            propWidth="245px"
            propHeight="64px"
            propRight="unset"
            propBottom="unset"
            propFontSize="36px"
          />
        </div>
        <div className={styles.getStartedButton}>
          <GetStartedContainer buttonText="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Home;
