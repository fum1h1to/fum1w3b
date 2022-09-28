import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const Loading = () => {
  const { isLoading } = useGlobalStateContext();

  return (
    <div className={`${styles.loading} ${isLoading ? styles.show : ''}`}>
        <div className={styles["loading-content"]}>
            <p>Loading..</p>
            {
              [...Array(20)].map((_, i) => <span style={{ "--i": i+1 } as React.CSSProperties} key={i}></span>)
            }
        </div>
    </div>
  );
}

export default Loading;