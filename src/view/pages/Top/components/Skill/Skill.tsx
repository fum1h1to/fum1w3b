import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import styles from './style.module.scss';
import LogoBox from './component/LogoBox/LogoBox';

import skilldata_1 from 'common/data/dataSkills_1';
import skilldata_2 from 'common/data/dataSkills_2';

const Skill = () => {

  return (
    <PageSection
      sectionId='skill'
      bg_color='black'
      sectionTtl="Skill"
      sectionUnderTtl="スキル"
    >
      <div className={styles.wrap}>
        <div className={styles.left}>
          <h3 className={styles.skillCategory}>
            Languages & Library
            <span className={styles.skillCategory__subTtl}>言語やライブラリ</span>
          </h3>
          <ul className={styles.logoList} id="aos-anchor-1">
            {
              skilldata_1.map((ele, index) => {
                return (
                  <li 
                    className={styles.logoItem} 
                    key={index} 
                    data-aos="fade-up"
                    data-aos-delay={100 + (index * 100)}
                    data-aos-anchor="#aos-anchor-1"
                    data-aos-once={false}
                  >
                    <LogoBox
                      name={ele.name}
                      imgsrc={ele.imgsrc}
                      useModal={false}
                    />
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className={styles.right}>
          <h3 className={styles.skillCategory}>
            Tools & Other
            <span className={styles.skillCategory__subTtl}>ツールやその他</span>
          </h3>
          <ul className={styles.logoList} id="aos-anchor-2">
            {
              skilldata_2.map((ele, index) => {
                return (
                  <li 
                    className={styles.logoItem}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={100 + (index * 100)}
                    data-aos-anchor="#aos-anchor-2"
                    data-aos-once={false}
                  >
                    <LogoBox
                      name={ele.name}
                      imgsrc={ele.imgsrc}
                      useModal={false}
                    />
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </PageSection>
  );
}

export default Skill;