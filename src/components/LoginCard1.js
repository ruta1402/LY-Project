import styles from "./LoginCard1.module.css";
const LoginCard1 = ({ loginButtonText = "Login" }) => {
  return (
    <button className={styles.hovertrue}>
      <div className={styles.button}>
        <div className={styles.signUp}>{loginButtonText}</div>
      </div>
    </button>
  );
};

export default LoginCard1;
