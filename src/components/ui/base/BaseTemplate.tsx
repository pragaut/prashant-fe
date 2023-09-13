import styles from './BaseTemplate.module.css';
export interface IBaseTemplate {
  children?: any;
}

const BaseTemplate: React.FC<IBaseTemplate> = (props) => {
  return <div className={styles.container}></div>;
};

export default BaseTemplate;
