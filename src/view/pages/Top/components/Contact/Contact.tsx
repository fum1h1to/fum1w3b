import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import styles from './style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
          <a href="https://github.com/fum1h1to" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon className={styles.github} icon={faGithub} />
          </a>
          <p className={styles.exp}>fum1h1to</p>
        </li>
        <li>
          <p className={styles.type}>Email</p>
          <a href="mailto:Engineer.FumiM@gmail.com">
            <FontAwesomeIcon className={styles.mail} icon={faEnvelope} />
          </a>
          <p className={styles.exp}>Engineer.FumiM@gmail.com</p>
        </li>
      </ul>
    </PageSection>
  );
}

export default Contact;