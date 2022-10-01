import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import styles from './style.module.scss';
import LogoBox from './component/LogoBox/LogoBox';

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

const skilldata_1 = [
  {
    name: "HTML5",
    imgsrc: icon_html5,
  },
  {
    name: "CSS3",
    imgsrc: icon_css3,
  },
  {
    name: "SASS",
    imgsrc: icon_sass,
  },
  {
    name: "Bootstrap5",
    imgsrc: icon_bootstrap,
  },
  {
    name: "JavaScript",
    imgsrc: icon_js,
  },
  {
    name: "jQuery",
    imgsrc: icon_jquery,
  },
  {
    name: "Node.js",
    imgsrc: icon_node,
  },
  {
    name: "Gulp.js",
    imgsrc: icon_gulp,
  },
  {
    name: "TypeScript",
    imgsrc: icon_ts,
  },
  {
    name: "React",
    imgsrc: icon_react,
  },
  {
    name: "Material UI",
    imgsrc: icon_mui,
  },
  {
    name: "PHP",
    imgsrc: icon_php,
  },
  {
    name: "Python3",
    imgsrc: icon_python,
  },
  {
    name: "Django",
    imgsrc: icon_django,
  },
  {
    name: "Java",
    imgsrc: icon_java,
  },
  {
    name: "Processing",
    imgsrc: icon_processing,
  },
  {
    name: "C/C++",
    imgsrc: icon_cpp,
  },
  {
    name: "C#",
    imgsrc: icon_c_sharp,
  },
  {
    name: "Arduino",
    imgsrc: icon_arduino,
  },
]

const skilldata_2 = [
  {
    name: "VSCode",
    imgsrc: icon_vscode,
  },
  {
    name: "Git",
    imgsrc: icon_git,
  },
  {
    name: "GitHub",
    imgsrc: icon_github,
  },
  {
    name: "SVN",
    imgsrc: icon_svn,
  },
  {
    name: "Firebase",
    imgsrc: icon_firebase,
  },
  {
    name: "VirtualBox",
    imgsrc: icon_virtualbox,
  },
  {
    name: "Docker",
    imgsrc: icon_docker,
  },
  {
    name: "Kali Linux",
    imgsrc: icon_kali,
  },
  {
    name: "Burp Suite",
    imgsrc: icon_burpsuite,
  },
  {
    name: "Wireshark",
    imgsrc: icon_wireshark,
  },
  {
    name: "PostgreSQL",
    imgsrc: icon_postgres,
  },
  {
    name: "Nginx",
    imgsrc: icon_nginx,
  },
  {
    name: "Apache httpd",
    imgsrc: icon_httpd,
  },
]

const Skill = () => {

  return (
    <PageSection
      sectionId='skill'
      bg_color='black'
      sectionTtl="Skill"
      sectionUnderTtl="スキル"
      sectionSubTtl='今まで触れたことのあるものを記述しています。'
    >
      <div className={styles.wrap}>
        <div className={styles.left}>
          <h3 className={styles.skillCategory}>
            Languages & Library
            <span className={styles.skillCategory__subTtl}>言語とライブラリ</span>
          </h3>
          <ul className={styles.logoList}>
            {
              skilldata_1.map((ele, index) => {
                return (
                  <li className={styles.logoItem} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
            <span className={styles.skillCategory__subTtl}>ツールとその他</span>
          </h3>
          <ul className={styles.logoList}>
            {
              skilldata_2.map((ele, index) => {
                return (
                  <li className={styles.logoItem} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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