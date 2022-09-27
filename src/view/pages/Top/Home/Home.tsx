import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const Home = () => {
  return (
    <>
      <div 
        className={styles.homeImg} 
        style={
          {backgroundImage: "url(/imgs/top/programming.jpg"}
        }
      ></div>
      <div className={styles.home} id="home">
        <div className={styles.box}>
          <h1>Fumihito <br />Sudo</h1>
          <p>あなたのデザイン<br /><span>完璧に</span>コーディングします</p>
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