import styles from "./InputField.module.css";

// @flow
import * as React from "react";
type Props = {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: () => void;
};
export class InputField extends React.Component<Props> {
  render() {
    return (
      <div>
        <label className={styles.label} htmlFor={this.props.name}>
          {this.props.name}
          <input
            onChange={this.props.onChange}
            className={styles.input}
            type={this.props.type}
            name={this.props.name}
            id={this.props.name}
            value={this.props.value}
            placeholder={` e.g. ${this.props.placeholder}`}
            required
          />
        </label>
      </div>
    );
  }
}
