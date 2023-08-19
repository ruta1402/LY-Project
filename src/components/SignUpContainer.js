import LoginCard from "./LoginCard";
import SignUpFormContainer from "./SignUpFormContainer";
import styles from "./SignUpContainer.module.css";
const SignUpContainer = () => {
  return (
    <div className={styles.roundButtonParent}>
      <div className={styles.roundButton}>
        <LoginCard loginButtonText="Login" />
      </div>
      <div className={styles.roundButton1}>
        <SignUpFormContainer ctaButtonText="Sign Up" />
      </div>
    </div>
  );
};

export default SignUpContainer;
