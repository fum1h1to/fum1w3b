import base_styles from 'common/css/base.module.scss';
import styles from './style.module.scss';

const ProductBox = (props: {
  name: string;
  imgsrc: string;
  textArea: React.ReactNode;
  tech_icon: string[];
  link: {
    link_name: string;
    link_url: string;
  }[];
}) => {
  return (
    <div className={styles.productBox}>
      <div className={`${styles.productBox__inner}`}>
        <div className={styles.productBox__img}>
          <img src={props.imgsrc} alt="" />
        </div>
        <div className={styles.productBox__area}>
          <div className={styles.productBox__title}>
            {props.name}
          </div>
          <div className={styles.productBox__textArea}>
            {props.textArea}
          </div>
          { props.tech_icon.length > 0 || props.link.length > 0?
          <div className={styles.productBox__iconArea}>
            {props.tech_icon.map((iconsrc: string) => {
              return (
                <div className={styles.icon}>
                  <img src={iconsrc} alt="" />
                </div>
              )
            })}
            <div style={{width: "100%"}} className={base_styles.spOnly}></div>
            { props.link.length > 0 ?
            <div className={styles.linkwrap}>
              {props.link.map((ele) => {
                return (
                  <a href={ele.link_url} className={styles.link} target="_blank" rel="noreferrer noopener">
                    {ele.link_name}
                  </a>
                )
              })}
            </div>
            : <></>}
          </div>
          : <></>}
        </div>
      </div>
    </div>
  );
}

export default ProductBox;