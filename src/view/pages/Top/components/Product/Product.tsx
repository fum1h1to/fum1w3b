import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import ProductBox from './component/ProductBox/ProductBox';
import styles from './style.module.scss';

import img_fumiweb from 'common/imgs/top/product/img-fumiweb.jpg';
import img_whatwasido from 'common/imgs/top/product/img-whatwasido.png';
import img_ecsite from 'common/imgs/top/product/img-ecsite.jpg';
import img_fumandetection from 'common/imgs/top/product/img-fumandetection.jpg';
import img_janken from 'common/imgs/top/product/img-janken.jpg';
import img_3dmazeon2d from 'common/imgs/top/product/img-3dmazeon2d.gif';
import img_mybrain from 'common/imgs/top/product/img-mybrain.jpg';

import icon_html5 from 'common/imgs/top/icon/icon-html5.png';
import icon_css3 from 'common/imgs/top/icon/icon-css3.png';
import icon_sass from 'common/imgs/top/icon/icon-sass.png';
import icon_bootstrap from 'common/imgs/top/icon/icon-bootstrap.png';
import icon_js from 'common/imgs/top/icon/icon-js.png';
import icon_ts from 'common/imgs/top/icon/icon-ts.png';
import icon_node from 'common/imgs/top/icon/icon-node.png';
import icon_gulp from 'common/imgs/top/icon/icon-gulp.png';
import icon_react from 'common/imgs/top/icon/icon-react.png';
import icon_mui from 'common/imgs/top/icon/icon-mui.png';
import icon_jquery from 'common/imgs/top/icon/icon-jquery.png';
import icon_php from 'common/imgs/top/icon/icon-php.png';
import icon_python from 'common/imgs/top/icon/icon-python.png';
import icon_django from 'common/imgs/top/icon/icon-django.png';
import icon_java from 'common/imgs/top/icon/icon-java.png';
import icon_processing from 'common/imgs/top/icon/icon-processing.png';
import icon_c_sharp from 'common/imgs/top/icon/icon-c-sharp.png';
import icon_cpp from 'common/imgs/top/icon/icon-cpp.png';
import icon_arduino from 'common/imgs/top/icon/icon-arduino.png';

import icon_vscode from 'common/imgs/top/icon/icon-vscode.png';
import icon_git from 'common/imgs/top/icon/icon-git.png';
import icon_github from 'common/imgs/top/icon/icon-github.png';
import icon_svn from 'common/imgs/top/icon/icon-svn.png';
import icon_firebase from 'common/imgs/top/icon/icon-firebase.png';
import icon_virtualbox from 'common/imgs/top/icon/icon-virtualbox.png';
import icon_docker from 'common/imgs/top/icon/icon-docker.png';
import icon_kali from 'common/imgs/top/icon/icon-kali.png';
import icon_burpsuite from 'common/imgs/top/icon/icon-burpsuite.png';
import icon_wireshark from 'common/imgs/top/icon/icon-wireshark.png';
import icon_postgres from 'common/imgs/top/icon/icon-postgres.png';
import icon_nginx from 'common/imgs/top/icon/icon-nginx.png';
import icon_httpd from 'common/imgs/top/icon/icon-httpd.png';

const Product = () => {
  return (
    <PageSection
      sectionId='product'
      bg_color='white'
      sectionTtl="Product"
      sectionUnderTtl="制作物"
    >
      <ul className={styles.productList}>
      <li className={styles.productItem}>
          <ProductBox
            name="FumiWeb"
            imgsrc={img_fumiweb}
            textArea={ 
              <>
              <p>このサイト</p>
              <p><span>自分自身のことを紹介</span>するサイト</p>
              </>
             }
            tech_icon={[icon_ts, icon_react, icon_sass]}
            link={[
              {
                link_name: "code",
                link_url: "https://github.com/fum1h1to/220927_fumiwebs2"
              },
              {
                link_name: "site",
                link_url: "https://fum1h1to.github.io/220927_fumiwebs2/"
              }
            ]}
          />
        </li>
        <li className={styles.productItem}>
          <ProductBox
            name="WhatWasIDo"
            imgsrc={img_whatwasido}
            textArea={ 
              <>
              <p>いつ何を何時間やっていたのか保存する<span>Webアプリ</span></p>
              <p>例えば、「7月7日の12:00 ～ 13:00の間にプログラミングの勉強をしていた」ということなどを保存していき、後で見返した時に、どの程度の生産性があったのかなどを確かめることができるアプリ。将来的な計画を立てることが主な目的ではなく、実際に何時間やったのか、何をしていたのかを保存することができる。</p>
              <p><span>自分のログを保存</span>するようなものである。</p>
              </>
            }
            tech_icon={[icon_ts, icon_react, icon_mui, icon_firebase]}
            link={[
              {
                link_name: "code",
                link_url: "https://github.com/fum1h1to/220603_WhatWasIDo"
              },
              {
                link_name: "site",
                link_url: "https://whatwasido.firebaseapp.com/"
              },
            ]}
          />
        </li>
        <li className={styles.productItem}>
          <ProductBox
            name="住所を販売するECサイト"
            imgsrc={img_ecsite}
            textArea={ 
              <>
              <p>このプログラムは、<span>住所を販売するECサイト</span>である。もちろん、実際に販売しているのではなく架空である。</p>
              <p>このECサイトには<span>約12万もの住所</span>があり、それらから自分の好きな場所を選び購入することができる。また、検索機能もついているため12万件という膨大なデータから自分の目的にあったものを<span>容易に見つける</span>ことができるのも特徴である。</p>
              </>
            }
            tech_icon={[icon_python, icon_django, icon_bootstrap, icon_postgres, icon_docker]}
            link={[
              {
                link_name: "code",
                link_url: "https://github.com/fum1h1to/220620_EcSite"
              }
            ]}
          />
        </li>
        <li className={styles.productItem}>
          <ProductBox
            name="人を検知してSlackに通知、通信の暗号化"
            imgsrc={img_fumandetection}
            textArea={ 
              <>
              <p>これは、Arduinoを用いて作られた、<span>人を検知</span>して<span>Slackに通知</span>するプログラムである。<br />また、独自の暗号化プロトコルを考え<span>通信の暗号化</span>にも挑戦した。</p>
              <p>この装置を、不審者が入って来そうな場所に置くことで自宅の<span>防犯対策</span>になる。</p>
              </>
             }
            tech_icon={[icon_arduino, icon_python]}
            link={[
              {
                link_name: "code",
                link_url: "https://github.com/fum1h1to/220702_fumanDetection"
              }
            ]}
          />
        </li>
        <li className={styles.productItem}>
          <ProductBox
            name="感情的なじゃんけんゲーム"
            imgsrc={img_janken}
            textArea={ 
              <>
              <p>このプログラムは、入力された<span>文章を感情分析</span>し、その分析結果からプレイヤーの出す手を決め、ヒカキンさん、サザエさん、本田圭佑さんと勝負できるというゲームである。</p>
              </>
             }
            tech_icon={[icon_java]}
            link={[
              {
                link_name: "code",
                link_url: "https://github.com/fum1h1to/220108_janken"
              }
            ]}
          />
        </li>
        <li className={styles.productItem}>
          <ProductBox
            name="3DMazeOn2D"
            imgsrc={img_3dmazeon2d}
            textArea={ 
              <>
              <p>2Dで作られた3Dの迷路</p>
              <p>本来3Dの迷路はソフトやゲームエンジンなどに用意された3D空間上に作成するが、このプログラムでは<span>レイキャスティング</span>を用いて<span>2D空間上に3Dの迷路を作成</span>している。</p>
              </>
             }
            tech_icon={[icon_processing]}
            link={[
              {
                link_name: "code",
                link_url: "https://github.com/fum1h1to/210102_3DMazeOn2D"
              }
            ]}
          />
        </li>
        <li className={styles.productItem}>
          <ProductBox
            name="myBrain"
            imgsrc={img_mybrain}
            textArea={ 
              <>
              <p>このプログラムは、自分の得た知識を保存することができる<span>知識保存システム</span>。</p>
              <p>プログラミングなどの勉強中に学んだことを保存しておける。JavaのSwingで<span>ライトモード、ダークモード</span>の実装にも挑戦した。</p>
              </>
             }
            tech_icon={[icon_java]}
            link={[
              {
                link_name: "code",
                link_url: "https://github.com/fum1h1to/220112_myBrain"
              }
            ]}
          />
        </li>
      </ul>
    </PageSection>
  );
}

export default Product;