import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import styles from './style.module.scss';
import Typed from 'react-typed';

import profImg from 'common/imgs/top/img-myprof.jpg';

const About = () => {
  return (
    <PageSection
      sectionId='about'
      bg_color='white'
      sectionTtl="About me"
      sectionUnderTtl="私について"
    >
      <div className={styles.wrap}>
        <div className={styles.left}>
          <img src={profImg} alt="須藤文仁" />
        </div>
        <div className={styles.right}>
          <h3>
            <span className={styles.typed}>
            <Typed 
              strings={["Fumihito Sudo", "すどうふみひと", "須藤 文仁"]}
              typeSpeed={100}
              startDelay={0}
              backSpeed={50}
              backDelay={750}
              loop={true}
              cursorChar={"|"}
            />
            </span>
          </h3>
          <span className={styles.word}>須藤文仁（すどうふみひと）</span>
          <span className={styles.word}>2002年生まれ　横浜市出身</span>
          <p>~2019年：高校では吹奏楽部に所属し、<a href="https://www.japan-mba.org/" target="_blank" rel="noreferrer noopener">一般社団法人日本マーチングバンド協会</a>が主催するマーチング全国大会に出場。在籍中に二度の日本一を経験した。</p>
          <p>2020年：将来は、昔から興味のあった<span>サイバーセキュリティ分野</span>で働きたいと考え、<span>情報系の大学</span>に進学。<br />
            現在は、サイバーセキュリティの勉強の一貫として学んでいたweb関連の技術に興味を持ち、web制作会社でアルバイトとして働いている。
          </p>
          <div className={styles.icons}>
            <a href="https://github.com/fum1h1to" target="_blank" rel="noreferrer noopener"><i className={`${styles.github} fab fa-brands fa-github`}></i></a>
            <a href="mailto:Engineer.FumiM@gmail.com"><i className={`${styles.mail} far fa-envelope`}></i></a>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default About;