import styles from "./AddOn.module.css";
// @flow
import * as React from "react";
type Props = {
  name: string;
  description: string;
  plan: string;
};

export class AddOn extends React.Component<Props> {
  render() {
    return (
      <div>
        <section className={styles.section}>
          <div className={styles.leftside}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={event => {
                console.log(event);
              }}
            />
            <div>
              <h3 className={styles.name}>
                {this.props.name}
              </h3>
              <h3 className={styles.description}>
                {this.props.description}
              </h3>
            </div>
          </div>
          <h3 className={styles.plan}>
            +${this.props.plan}
          </h3>
        </section>
      </div>
    );
  }
}
