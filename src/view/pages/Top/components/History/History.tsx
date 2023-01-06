import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import HistoryBox from './components/HistoryBox/HistoryBox';
import styles from './style.module.scss';

import dataHistory from 'common/data/dataHistory';

const History = () => {
  return (
    <PageSection
      sectionId='history'
      bg_color='black'
      sectionTtl="History"
      sectionUnderTtl="自分の歴史"
    >
      <ul className={styles.historyList}> 
        { dataHistory.map((ele, index) => {
          return (
          <li className={styles.historyItem} key={index} data-aos="fade-up">
            <HistoryBox 
              until={ele.until}
              year={ele.year}
              month={ele.month}
              day={ele.day}
              title={ele.title}
              content={ele.content}
            />
          </li>
          )
        }) }
      </ul>
    </PageSection>
  );
}

export default History;