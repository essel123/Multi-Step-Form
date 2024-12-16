import { FunctionComponent } from "react";

import styles from "./SelectedAdon.module.css";

interface SelectAdonProps {
  title: string;
  price: number;
  term: string;
}

const SelectAdon: FunctionComponent<SelectAdonProps> = ({
  title,
  price,
  term
}) => {
  return (
    <div className={styles.section}>
      <h4 className={styles.title}>
        {title}
      </h4>
      <h5 className={styles.price}>
        +${price}/{term}
      </h5>
    </div>
  );
};

export default SelectAdon;
