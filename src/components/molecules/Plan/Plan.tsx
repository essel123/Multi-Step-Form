import styles from "./Plan.module.css";
// @flow
import * as React from "react";
type Props = {
  icon: string;
  title: string;
  planprice: string;
  handleClick: () => void;
  borderColor: string;
  isBenefit: boolean;
  benefit: string;
};

export class Plan extends React.Component<Props> {
  render() {
    return (
      <div>
        <section
          className={styles.section}
          onClick={this.props.handleClick}
          style={{ border: `1px solid ${this.props.borderColor}` }}
        >
          <img
            className={styles.icon}
            src={this.props.icon}
            alt={this.props.title}
          />

          <div className={styles.textsection}>
            <h2 className={styles.title}>
              {this.props.title}
            </h2>
            <h3 className={styles.planprice}>
              +${this.props.planprice}
            </h3>
            <p className={styles.benefit}>
              {this.props.isBenefit && this.props.benefit}
            </p>
          </div>
        </section>
      </div>
    );
  }
}
