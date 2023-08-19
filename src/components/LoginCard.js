import styles from "./LoginCard.module.css";
const LoginCard = ({ loginButtonText = "Login" }) => {
  return (
    <button className={styles.hovertrue}>
      <div className={styles.button}>
        <div className={styles.signUp}>{loginButtonText}</div>
      </div>
    </button>
  );
};

export default LoginCard;
