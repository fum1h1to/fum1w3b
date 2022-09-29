import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import base_styles from 'common/css/base.module.scss';
import styles from './style.module.scss';
import Typed from 'react-typed';

import bgImg from "common/imgs/top/img-programming.jpg";

const Home = () => {
  const { windowScroll } = useGlobalStateContext();

  return (
    <>
      <div 
        className={`${styles.homeImg} ${windowScroll.sy > 1500 ? styles.noShow : ''}`} 
        style={
          {backgroundImage: "url(" + bgImg}
        }
      ></div>
      <div className={styles.home} id="home">
        <div className={styles.box}>
          <h1>Fumihito <br />Sudo</h1>
          <p>
            <span>
              <Typed
                strings={["サイバーセキュリティ", "Cyber Security", "ホワイトハッカー", "White Hat Hacker"]}
                typeSpeed={90}
                startDelay={0}
                backSpeed={60}
                backDelay={750}
                loop={true}
                cursorChar={"|"}
              />
            </span>
            に<br />興味のある大学生
          </p>
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