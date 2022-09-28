import { useState } from 'react';
import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const Header = () => {
  const [ isNavOpen, setIsNavOpen ] = useState(false);

  const spAction = () => {
    setIsNavOpen(!isNavOpen);
    const body = document.querySelector('body');
    if (body){
      body.classList.toggle(base_styles.noScroll);
    }
  }

  return (
    <header className={base_styles.paddingLR}>
      <div className={`${styles.header} ${base_styles['max-width']}`}>
        <h1 className={styles.header__title}><a href="#">Fumi<span>Web</span></a></h1>
        <nav className={`${styles.navbar} ${isNavOpen ? styles.active : ''}`}>
          <ul>
            <li><a href="#home" onClick={spAction}>Home</a></li>
            <li><a href="#about" onClick={spAction}>About</a></li>
            <li><a href="#service" onClick={spAction}>Services</a></li>
            <li><a href="#skill" onClick={spAction}>Skills</a></li>
            <li><a href="#work" onClick={spAction}>Works</a></li>
            <li><a href="#contact" onClick={spAction}>Contact</a></li>
          </ul>
        </nav>
        <div 
          className={`${styles.humber} ${isNavOpen ? styles.active : ''}`}
          onClick={spAction}
        >
          <div className={styles.humber__bar}></div>
          <div className={styles.humber__bar}></div>
          <div className={styles.humber__bar}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
