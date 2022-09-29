import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const Home = () => {
  const { windowScroll } = useGlobalStateContext();

  return (
    <>
      <div 
        className={`${styles.homeImg} ${windowScroll.sy > 1500 ? styles.noShow : ''}`} 
        style={
          {backgroundImage: "url(" + process.env.PUBLIC_URL + "/imgs/top/img-programming.jpg)"}
        }
      ></div>
      <div className={styles.home} id="home">
        <div className={styles.box}>
          <h1>Fumihito <br />Sudo</h1>
          <p><span>サイバーセキュリティ</span>に<br />興味のある大学生</p>
        </div>
        <div className={styles.arrow}>
          <p>SCROLL</p>
          <i className="fas fa-angle-double-down"></i>
        </div>
      </div>
    </>
  );
}

export default Home;