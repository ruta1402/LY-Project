import styles from "./LoginCard2.module.css";
const LoginCard2 = ({ loginButtonText = "Login" }) => {
  return (
    <button className={styles.hovertrue}>
      <div className={styles.button}>
        <div className={styles.signUp}>{loginButtonText}</div>
      </div>
    </button>
  );
};

export default LoginCard2;
