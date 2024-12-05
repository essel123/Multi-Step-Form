import styles from "./Button.module.css";

// @flow
import * as React from "react";
type Props = {
  onClick: () => void;
  bgColor: string;
  color: string;
  name: string;
};

export class Button extends React.Component<Props> {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onClick}
          className={styles.btn}
          style={{
            background: `${this.props.bgColor}`,
            color: `${this.props.color}`
          }}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
