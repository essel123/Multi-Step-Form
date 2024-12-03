import styles from "./Toggler.module.css";

// @flow
import * as React from "react";
type Props = {
  handleclick: () => void;
};

export class Toggler extends React.Component<Props> {
  render() {
    return (
      <div>
        <section className={styles.section}>
          <h3 className={styles.plantype}>Monthly</h3>
          <label className={styles.switch}>
            <input type="checkbox" id="mode" onClick={this.props.handleclick} />
            <span className={`${styles.slider} ${styles.round}`} />
          </label>
          <h3 className={styles.plantype}>Yearly</h3>
        </section>
      </div>
    );
  }
}
