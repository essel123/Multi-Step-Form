import styles from "./NavButtons.module.css";

export default function NavButtons() {
  return <div className={styles.btn}>
        <button className={styles.prevbtn}> Go Back</button>
        <button className={styles.nextbtn}> Next Step</button>
     </div>;
}
