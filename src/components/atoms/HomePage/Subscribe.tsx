import { Button } from "../Button/Button";
import styles from "./Subscribe.module.css";

type props = {
  handleClick: () => void;
};

const Subscribe = ({ handleClick }: props) => {
  return (
    <div className={styles.welcomecontainer}>
      <div className={styles.herosection}>
        <h1>Welcome to Our Service</h1>
        <p>Join us today to experience something amazing.</p>
        <Button bgColor="" color="white" name="Sign Up" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Subscribe;
