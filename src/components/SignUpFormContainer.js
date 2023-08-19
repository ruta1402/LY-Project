import styles from "./SignUpFormContainer.module.css";
const SignUpFormContainer = ({ ctaButtonText = "Sign Up" }) => {
  return (
    <button className={styles.hovertrue}>
      <div className={styles.button}>
        <div className={styles.signUp}>{ctaButtonText}</div>
      </div>
    </button>
  );
};

export default SignUpFormContainer;
