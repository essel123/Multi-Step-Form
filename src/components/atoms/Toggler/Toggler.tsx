import styles from "./Toggler.module.css";

// @flow
import * as React from "react";
type Props = {
  handleclick: () => void;
  yearcolor: string;
  monthcolor: string;
  checked: boolean;
};

export class Toggler extends React.Component<Props> {
  render() {
    return (
      <div>
        <section className={styles.section}>
          <h3
            className={styles.plantype}
            style={{ color: `${this.props.monthcolor}` }}
          >
            Monthly
          </h3>
          <label className={styles.switch}>
            <input
              type="checkbox"
              id="mode"
              onClick={this.props.handleclick}
              checked={this.props.checked}
            />
            <span className={`${styles.slider} ${styles.round}`} />
          </label>
          <h3
            className={styles.plantype}
            style={{ color: `${this.props.yearcolor}` }}
          >
            Yearly
          </h3>
        </section>
      </div>
    );
  }
}
