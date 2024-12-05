import styles from "./SelectedPlan.module.css";

// @flow
import * as React from "react";
type Props = {
  name: string;
  term: string;
  rate: number;
  term_: string;

  onClick: () => void;
};

export class SelectedPlan extends React.Component<Props> {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.leftside}>
          <h3 className={styles.plancheck}>
            {this.props.name} ({this.props.term})
          </h3>
          <h3 className={styles.change} onClick={this.props.onClick}>
            Change
          </h3>
        </div>
        <div className={styles.rightside}>
          <h3>
            ${this.props.rate}/{this.props.term_}
          </h3>
        </div>
      </div>
    );
  }
}
