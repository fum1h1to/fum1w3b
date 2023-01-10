import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import styles from './style.module.scss';
import Typed from 'react-typed';

import profImg from 'common/imgs/top/img-myprof.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <PageSection
      sectionId='about'
      bg_color='white'
      sectionTtl="About me"
      sectionUnderTtl="私について"
    >
      <div className={styles.wrap}>
        <div className={styles.left} data-aos="fade-in">
          <img src={profImg} alt="fum1h1to" />
        </div>
        <div className={styles.right}>
          <h3>
            <span className={styles.typed}>
            <Typed 
            strings={["fum1h1to", "ot1h1muf", "FUM!H!TO", "OT!H!MUF"]}
              typeSpeed={100}
              startDelay={0}
              backSpeed={50}
              backDelay={750}
              loop={true}
              cursorChar={"|"}
            />
            </span>
          </h3>
          <span className={styles.word}>fum1h1to</span>
          <span className={styles.word}>2002年生まれ　横浜市出身</span>
          <span className={styles.word}>現在　大学生</span>
          <p>~2019年：高校では吹奏楽部に所属し、打楽器を担当。</p>
          <p>2020年：将来は、昔から興味のあった<span>サイバーセキュリティ分野</span>で働きたいと考え、<span>情報系の大学</span>に進学。<br />
            現在は、サイバーセキュリティの勉強の一貫として学んでいたweb関連の技術に興味を持ち、web系の企業でアルバイトとして働いている。サイバーセキュリティと共にwebのフロントエンドの知識も学んでいる。
          </p>
          <div className={styles.icons}>
            <a href="https://twitter.com/fum1h1to" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon className={styles.twitter} icon={faTwitter} />
            </a>
            <a href="https://github.com/fum1h1to" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon className={styles.github} icon={faGithub} />
            </a>
            {/* <a href="mailto:Engineer.FumiM@gmail.com">
              <FontAwesomeIcon className={styles.mail} icon={faEnvelope} />
            </a> */}
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default About;