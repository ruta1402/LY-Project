import styles from "./SignUpFormContainer2.module.css";
const SignUpFormContainer2 = ({ ctaButtonText = "Sign Up" }) => {
  return (
    <button className={styles.hovertrue}>
      <div className={styles.button}>
        <div className={styles.signUp}>{ctaButtonText}</div>
      </div>
    </button>
  );
};

export default SignUpFormContainer2;
