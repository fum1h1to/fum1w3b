import base_styles from 'common/css/base.module.scss';
import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import styles from './style.module.scss';

const LogoBox = (props: {
  name: string;
  imgsrc: string;
}) => {
  const { windowDimensions } = useGlobalStateContext();

  return (
    <div className={styles.logoBox}>
      <div className={styles.logoBox__inner}>
        <div className={styles.logoBox__img}>
          <img src={props.imgsrc} alt=""/>
        </div>
        { windowDimensions.width > 800 ? <div className={styles.logoBox__name}>{props.name}</div> : <></>}
      </div>
      { windowDimensions.width <= 800 ? <div className={styles.logoBox__name}>{props.name}</div> : <></>}
    </div>
  );
}

export default LogoBox;