import styles from "./Step.module.css";

// @flow
import * as React from "react";
type Props = {
  id: number;
  formtitle: string;
};

export class Step extends React.Component<Props> {
  render() {
    return (
      <div>
        <section className={styles.section}>
          <div className={styles.circle}>
            <h1 className={styles.id}>
              {this.props.id}
            </h1>
          </div>
          <div className={styles.formdetails}>
            <h2 className={styles.stepid}>
              step {this.props.id}
            </h2>
            <h1 className={styles.formtitle}>
             {this.props.formtitle}
            </h1>
          </div>
        </section>
      </div>
    );
  }
}
