import styles from "./NavButtons.module.css";
// @flow
import * as React from "react";
type Props = {
  nextClick: () => void;

  prevClick: () => void;
};

class NavButtons extends React.Component<Props> {
  render() {
    return (
      <div className={styles.btn}>
        <button className={styles.prevbtn} onClick={this.props.prevClick}>
          {" "}Go Back
        </button>
        <button onClick={this.props.nextClick} className={styles.nextbtn}>
          {" "}Next Step
        </button>
      </div>
    );
  }
}

export default NavButtons;
