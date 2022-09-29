import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import styles from './style.module.scss';

const Contact = () => {
  return (
    <PageSection
      sectionId='contact'
      bg_color='white'
      sectionTtl="Contact"
      sectionUnderTtl="お問い合わせ"
    >
      <ul className={styles.wrap}>
        <li>
          <p className={styles.type}>Github</p>
          <a href="https://github.com/fum1h1to" target="_blank" rel="noreferrer noopener"><i className={`${styles.github} fab fa-brands fa-github`}></i></a>
          <p className={styles.exp}>fum1h1to</p>
        </li>
        <li>
          <p className={styles.type}>Email</p>
          <a href="mailto:Engineer.FumiM@gmail.com"><i className={`${styles.mail} far fa-envelope`}></i></a>
          <p className={styles.exp}>Engineer.FumiM@gmail.com</p>
        </li>
      </ul>
    </PageSection>
  );
}

export default Contact;