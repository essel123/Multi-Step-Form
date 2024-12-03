
import styles from  './StepTitle.module.css'
import * as React from 'react';
type Props = {
  title:string,
  description:string

};
// type State = {
  
// };
export class StepTitle extends React.Component<Props>{
  render() {
    return (
      <div>
         <section className={styles.section}>
            <h1 className={styles.title}>{this.props.title}</h1>
            <p className={styles.description}>{this.props.description}</p>
         </section>
        
      </div>
    );
  };
};