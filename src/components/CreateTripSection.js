import styles from "./CreateTripSection.module.css";
const CreateTripSection = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <h1 className={styles.createYourPerfect}>Create your Perfect Trip</h1>
      <h1 className={styles.discoverNewExperiences}>
        Discover New Experiences
      </h1>
      <h1 className={styles.travelYourWay}>
        Travel your way by selecting your preferred destinations and activities
      </h1>
      <h1 className={styles.findLocalExperiences}>
        Find local experiences and enjoy the world like never before!
      </h1>
    </section>
  );
};

export default CreateTripSection;
