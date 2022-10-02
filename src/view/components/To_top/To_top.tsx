import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import base_styles from 'common/css/base.module.scss';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const To_top = () => {
  const { windowScroll } = useGlobalStateContext();

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div 
      className={`${styles['to-top']} ${windowScroll.sy > 500 ? styles.show : ''}`}
      onClick={returnTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
}

export default To_top;