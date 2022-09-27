import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const To_top = () => {
  return (
    <div className={`${styles['to-top']} ${styles.show}`}>
      <i className="fas fa-angle-up"></i>
    </div>
  );
}

export default To_top;