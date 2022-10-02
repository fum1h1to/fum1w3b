import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import HistoryBox from './components/HistoryBox/HistoryBox';
import styles from './style.module.scss';

const dataHistory = [
  {
    until: true,
    year: 2019,
    title: "高校時代は吹奏楽部に所属",
    content: (
      <>
        <p>高校では吹奏楽部に所属し、一般社団法人日本マーチングバンド協会が主催するマーチング全国大会に出場。在籍中に二度の日本一を経験した。</p>
      </>
    )
  },
  {
    year: 2020,
    month: 1,
    day: 1,
    title: "情報系の勉強をはじめる",
    content: (
      <>
        <p>将来は、昔から興味のあった<span>サイバーセキュリティ分野</span>で働きたいと考えていたため、タイピングの練習やプログラミングの勉強をはじめる。</p>
        <p>この時は、<span>タイピングもまともに出来ないレベル</span>であり、もちろん情報工学についての知識もゼロに等しい状態であった。</p>
        <p>そのため、「寿司打」などでタイピングの練習を行ったり、「ハッカーの学校」という書籍を読むなどして経験や知識を得た。</p>
      </>
    )
  },
  {
    year: 2020,
    month: 3,
    title: "ITパスポートに合格",
    content: (
      <>
        <p>試験2週間前にITパスポートの書籍を購入し勉強を始め、無事合格。</p>
        <p><span>VirtualBox</span>や<span>Kali Linux</span>を初めて触ったのはこの時期である。</p>
      </>
    )
  },
  {
    year: 2020,
    month: 4,
    title: "大学に入学",
    content: (
      <>
        <p>東京電機大学 未来科学部 情報メディア学科に進学。</p>
        <p>当時は、コロナ鍋であり入学式もオンラインで行われ、授業が始まったのも5月頃であった。その授業もオンラインで行われ、大学に登校しての授業は翌年に再開した。</p>
        <p>この時に、初めて<span>HTML, CSS, JavaScript</span>に触れる。だが、CSSに苦戦し一度挫折。</p>
      </>
    )
  },
  {
    year: 2020,
    month: 12,
    title: "Web制作会社でアルバイトをはじめる",
    content: (
      <>
        <p>一度挫折したHTML, CSSをもう一度学び直したことにより、Web関連の技術に興味を持ちWeb制作会社のアルバイトに応募。<span>無事合格</span>し勤務をはじめる。そこでは、不動産系のサイトの保守管理を担当した。</p>
      </>
    )
  },
  {
    year: 2021,
    month: 3,
    title: "基本情報技術者試験に合格",
    content: (
      <>
        <p>本来は前年度の10月に受ける予定であったが、コロナ鍋で延期。<span>無事合格</span>。</p>
      </>
    )
  },
  {
    year: 2021,
    month: 10,
    title: "応用情報技術者試験に不合格",
    content: (
      <>
        <p>午後の点数が2点足りず<span>不合格</span>。</p>
      </>
    )
  },
  {
    year: 2022,
    month: 8,
    title: "NTTデータ先端技術株式会社の夏インターンに参加",
    content: (
      <>
        <p>脅威インテリジェンスを活用して、企業のセキュリティ対策を検討、提案した。</p>
      </>
    )
  },
  {
    year: 2022,
    month: 9,
    title: "株式会社インフォセックの夏インターンに参加",
    content: (
      <>
        <p>セキュリティ業務の一連の流れを学ぶ。</p>
      </>
    )
  },
]

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