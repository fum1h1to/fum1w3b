import { ReactNode } from 'react';
import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const PageSection = (props: {
  sectionId: string;
  bg_color: "white" | "black";
  children: ReactNode;
}) => {
  return (
    <section 
      className={`${styles.section} ${styles["section--" + props.bg_color]} ${props.bg_color === "white" ? base_styles.paddingLR : ''}`}
      id={props.sectionId}
    >
      <div className={`${styles["max-width"]}`}>
        { props.children }
      </div>
    </section>
  );
}

export default PageSection;