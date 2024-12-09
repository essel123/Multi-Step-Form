import styles from "./InputField.module.css";

// @flow
import * as React from "react";
type Props = {
  name: string;
  type: string;
  value: string;
  required :string
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  borderstyle: string;
};
export class InputField extends React.Component<Props> {
  render() {
    return (
      <div>
        <label className={styles.label} htmlFor={this.props.name}>
          <div className={styles.errorlabel}>
            <span> {this.props.name}</span>{" "}
            <span className={styles.error} id="error">
              {this.props.required}
            </span>
          </div>
          <input
            onChange={this.props.onChange}
            className={styles.input}
            type={this.props.type}
            name={this.props.name}
            id={this.props.name}
            value={this.props.value}
            placeholder={` e.g. ${this.props.placeholder}`}
            style={{ border: `${this.props.borderstyle}` }}
           
          />
        </label>
      </div>
    );
  }
}
