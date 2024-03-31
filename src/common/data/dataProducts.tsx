import img_fum1w3b from 'common/imgs/top/product/img-fum1w3b.jpg';
import img_whatwasido from 'common/imgs/top/product/img-whatwasido.png';
import img_ecsite from 'common/imgs/top/product/img-ecsite.jpg';
import img_fridroomsystem from 'common/imgs/top/product/img-fridroomsystem.gif';
import img_fumandetection from 'common/imgs/top/product/img-fumandetection.jpg';
import img_janken from 'common/imgs/top/product/img-janken.jpg';
import img_3dmazeon2d from 'common/imgs/top/product/img-3dmazeon2d.gif';
import img_mybrain from 'common/imgs/top/product/img-mybrain.jpg';
import img_netvision from 'common/imgs/top/product/img-netvision.png';

import { icon_arduino, icon_bootstrap, icon_django, icon_docker, icon_firebase, icon_flask, icon_go, icon_java, icon_m5stack, icon_mui, icon_postgres, icon_processing, icon_python, icon_react, icon_sass, icon_ts } from 'common/imgs/top/icon';


const dataProducts = [
  {
    name: "Fum1W3b",
    imgsrc: img_fum1w3b,
    textArea: (
      <>
        <p>このサイト</p>
        <p><span>自分自身のことを紹介</span>するサイト</p>
      </>
    ),
    tech_icon: [icon_ts, icon_react, icon_sass],
    link: [
      {
        link_name: "code",
        link_url: "https://github.com/fum1h1to/fum1w3b"
      },
      {
        link_name: "site",
        link_url: "https://fum1h1to.github.io/fum1w3b/"
      }
    ]
  },
  {
    name: "WhatWasIDo",
    imgsrc: img_whatwasido,
    textArea: ( 
      <>
      <p>いつ何を何時間やっていたのか保存する<span>Webアプリ</span></p>
      <p>例えば、「7月7日の12:00 ～ 13:00の間にプログラミングの勉強をしていた」ということなどを保存していき、後で見返した時に、どの程度の生産性があったのかなどを確かめることができるアプリ。将来的な計画を立てることが主な目的ではなく、実際に何時間やったのか、何をしていたのかを保存することができる。</p>
      <p><span>自分のログを保存</span>するようなものである。</p>
      </>
    ),
    tech_icon: [icon_ts, icon_react, icon_mui, icon_firebase],
    link: [
      {
        link_name: "code",
        link_url: "https://github.com/fum1h1to/WhatWasIDo"
      }
    ]
  },
  {
    name: "NetVision",
    imgsrc: img_netvision,
    textArea: ( 
      <>
      <p><span>ネットワークの通信</span>を<span>リアルタイムに可視化する</span>システム</p>
      <p>あなたのパソコンのネットワーク通信を<span>3Dグラフィックス上で直感的に可視化する</span>ことができるシステム。</p>
      <p>このようなリアルタイム可視化システムは、企業向けのものがほとんどであり、個人が扱うには機能が多すぎたりコストもかかる。そこで、このシステムでは個人でも自分自身のネットワークを可視化することができる。</p>
      <p>セキュリティ啓発へ活かせないかと考えている。</p>
      </>
    ),
    tech_icon: [icon_go, icon_ts, icon_docker],
    link: [
      {
        link_name: "code",
        link_url: "https://github.com/fum1h1to/NetVision"
      }
    ]
  },
  {
    name: "住所を販売するECサイト",
    imgsrc: img_ecsite,
    textArea: ( 
      <>
      <p>このプログラムは、<span>住所を販売するECサイト</span>である。もちろん、実際に販売しているのではなく架空である。</p>
      <p>このECサイトには<span>約12万もの住所</span>があり、それらから自分の好きな場所を選び購入することができる。また、検索機能もついているため12万件という膨大なデータから自分の目的にあったものを<span>容易に見つける</span>ことができるのも特徴である。</p>
      </>
    ),
    tech_icon: [icon_python, icon_django, icon_bootstrap, icon_postgres, icon_docker],
    link: [
      {
        link_name: "code",
        link_url: "https://github.com/fum1h1to/EcSite"
      }
    ]
  },
  {
    name: "感情的なじゃんけんゲーム",
    imgsrc: img_janken,
    textArea: ( 
      <>
      <p>このプログラムは、入力された<span>文章を感情分析</span>し、その分析結果からプレイヤーの出す手を決め、ヒカキンさん、サザエさん、本田圭佑さんと勝負できるというゲームである。</p>
      </>
    ),
    tech_icon: [icon_java],
    link: [
      {
        link_name: "code",
        link_url: "https://github.com/fum1h1to/EmoJanken"
      }
    ]
  },
  {
    name: "3DMazeOn2D",
    imgsrc: img_3dmazeon2d,
    textArea: ( 
      <>
      <p>2Dで作られた3Dの迷路</p>
      <p>本来3Dの迷路はソフトやゲームエンジンなどに用意された3D空間上に作成するが、このプログラムでは<span>レイキャスティング</span>を用いて<span>2D空間上に3Dの迷路を作成</span>している。</p>
      </>
    ),
    tech_icon: [icon_processing],
    link: [
      {
        link_name: "code",
        link_url: "https://github.com/fum1h1to/3DMazeOn2D"
      }
    ]
  },
]

export default dataProducts;