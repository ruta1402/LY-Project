import styles from "./SignUpFormContainer1.module.css";
const SignUpFormContainer1 = ({ ctaButtonText = "Sign Up" }) => {
  return (
    <button className={styles.hovertrue}>
      <div className={styles.button}>
        <div className={styles.signUp}>{ctaButtonText}</div>
      </div>
    </button>
  );
};

export default SignUpFormContainer1;
