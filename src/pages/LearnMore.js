import LoginCard1 from "../components/LoginCard1";
import SignUpFormContainer1 from "../components/SignUpFormContainer1";
import CreateTripSection from "../components/CreateTripSection";
import TravelPlanForm from "../components/TravelPlanForm";
import styles from "./LearnMore.module.css";
const LearnMore = () => {
  return (
    <div className={styles.learnMore}>
      <div className={styles.frameParent}>
        <div className={styles.traveltailorParent}>
          <a className={styles.traveltailor}>TravelTailor</a>
          <div className={styles.tailorMadePlans}>
            TAILOR MADE PLANS FOR ALL YOUR TRAVELS
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/group-21.svg" />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.roundButtonParent}>
        <div className={styles.roundButton}>
          <LoginCard1 loginButtonText="Login" />
        </div>
        <div className={styles.roundButton1}>
          <SignUpFormContainer1 ctaButtonText="Sign Up" />
        </div>
      </div>
      <section className={styles.ourPersonalisedTravel}>
        Our personalised travel planner is your ultimate guide to discover the
        world!
      </section>
      <CreateTripSection />
      <TravelPlanForm />
    </div>
  );
};

export default LearnMore;
