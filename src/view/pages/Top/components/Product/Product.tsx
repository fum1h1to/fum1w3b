import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import ProductBox from './component/ProductBox/ProductBox';
import styles from './style.module.scss';

import dataProducts from 'common/data/dataProducts';

const Product = () => {
  return (
    <PageSection
      sectionId='product'
      bg_color='white'
      sectionTtl="Product"
      sectionUnderTtl="制作物"
    >
      <ul className={styles.productList}>
        { dataProducts.map((ele, index) => {
          return (
          <li className={styles.productItem} key={index}>
            <ProductBox
              name={ele.name}
              imgsrc={ele.imgsrc}
              textArea={ele.textArea}
              tech_icon={ele.tech_icon}
              link={ele.link}
            />
          </li>
          )
        }) }
      </ul>
    </PageSection>
  );
}

export default Product;