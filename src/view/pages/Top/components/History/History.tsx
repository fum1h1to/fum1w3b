import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import HistoryBox from './components/HistoryBox/HistoryBox';
import styles from './style.module.scss';

const History = () => {
  return (
    <PageSection
      sectionId='history'
      bg_color='black'
      sectionTtl="History"
      sectionUnderTtl="自分の歴史"
    >
      <ul className={styles.historyList}> 
        <li className={styles.historyItem} data-aos="fade-up">
          <HistoryBox 
            until={true}
            year={2019}
            title="高校時代は吹奏楽部に所属"
            content={
              <>
                <p>テキスト</p>
              </>
            }
          />
        </li>
        <li className={styles.historyItem} data-aos="fade-up">
          <HistoryBox
            year={2020}
            month={1}
            day={1}
            title="情報系の勉強をはじめる"
            content={
              <>
                <p>テキスト</p>
              </>
            }
          />
        </li>
        <li className={styles.historyItem} data-aos="fade-up">
          <HistoryBox 
            year={2020}
            month={12}
            title="web系企業のアルバイト開始"
            content={
              <>
                <p>web系企業のアルバイトに合格し、勤務をはじめる</p>
              </>
            }
          />
        </li>
      </ul>
    </PageSection>
  );
}

export default History;