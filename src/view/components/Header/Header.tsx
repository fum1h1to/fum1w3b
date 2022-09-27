import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={base_styles.paddingLR}>
      <div className={`${styles.header} ${base_styles['max-width']}`}>
        <h1 className={styles.header__title}><a href="#">Fumi<span>Web</span></a></h1>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#home" className={styles.respAction}>Home</a></li>
            <li><a href="#about" className={styles.respAction}>About</a></li>
            <li><a href="#service" className={styles.respAction}>Services</a></li>
            <li><a href="#skill" className={styles.respAction}>Skills</a></li>
            <li><a href="#work" className={styles.respAction}>Works</a></li>
            <li><a href="#contact" className={styles.respAction}>Contact</a></li>
          </ul>
        </nav>
        <div className={`${styles.respAction} ${styles.humber}`}>
          <div className={styles.humber__bar}></div>
          <div className={styles.humber__bar}></div>
          <div className={styles.humber__bar}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
