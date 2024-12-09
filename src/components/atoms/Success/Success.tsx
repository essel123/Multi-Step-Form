import styles from "./Succes.module.css";
import "../../../App.css";

export default function Success() {
  return (
    <div className="slide-in">
      <section className={styles.section}>
        <img src="./images/icon-thank-you.svg" alt="" />
        <h1 className={styles.thanks}>Thank you!</h1>
        <p className={styles.thanksMessage}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </section>
    </div>
  );
}
