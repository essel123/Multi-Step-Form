import SelectedAdon from "../../atoms/SelectedAdon/SelectedAdon";

import { SelectedPlan } from "../../atoms/SelectedPlan/SelectedPlan";
import styles from "./Finishing.module.css";

// @flow
import * as React from "react";
type Props = {
  onClick: () => void;
};

export default class Finishing extends React.Component<Props> {
  render() {
    return (
      <div className="slide-in">
        <div className={styles.section}>
          <main className={styles.main}>
            <div>
              <SelectedPlan
                name="Arcade"
                term="Yearly"
                rate={90}
                term_="yr"
                onClick={this.props.onClick}
              />
            </div>
            <div className={styles.line} />
            <SelectedAdon title={"Local Storage"} price={9} term={"yr"} />
          </main>
          <div className={styles.total} />
        </div>
      </div>
    );
  }
}
