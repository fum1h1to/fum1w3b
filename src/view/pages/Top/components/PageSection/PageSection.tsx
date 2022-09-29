import { ReactNode } from 'react';
import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const PageSection = (props: {
  sectionId: string;
  sectionTtl: string;
  sectionUnderTtl: string;
  sectionSubTtl? : string;
  bg_color: "white" | "black";
  children: ReactNode;
}) => {
  return (
    <section 
      className={`${styles.section} ${styles["section--" + props.bg_color]} ${props.bg_color === "white" ? base_styles.paddingLR : ''}`}
      id={props.sectionId}
    >
      <div className={`${base_styles["max-width"]}`}>
        <div>
          <h2 className={styles.section__title}>
            {props.sectionTtl}
            <span className={styles.section__underTitle}>{props.sectionUnderTtl}</span>
          </h2>
          {
            props.sectionSubTtl ? <div className={styles.section__subTitle}>{props.sectionSubTtl}</div> : <></>
          } 
          <div className={styles.section__content}>
            { props.children }
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageSection;