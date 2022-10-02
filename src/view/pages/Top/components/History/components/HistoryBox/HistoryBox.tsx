import base_styles from 'common/css/base.module.scss';
import styles from './style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";

const HistoryBox = (props: {
  until?: boolean;
  year: number;
  month?: number;
  day?: number;
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className={styles.historyBox}>
      <div className={styles.historyBox__time}>
        <span className={styles.time}>{props.until ? "～" : ""}{ props.year }{props.month ? "." + props.month : ""}{props.day ? "." + props.day : ""}</span>
        <FontAwesomeIcon className={styles.clock} icon={faClock} />
      </div>
      <div className={styles.historyBox__contentArea}>
        <div className={styles.historyBox__ttl}>{ props.title }</div>
        <div className={styles.historyBox__content}>
          { props.content }
        </div>
      </div>
    </div>
  );
}

export default HistoryBox;