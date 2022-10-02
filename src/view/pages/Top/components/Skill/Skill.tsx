import base_styles from 'common/css/base.module.scss';
import PageSection from '../PageSection/PageSection';
import styles from './style.module.scss';
import LogoBox from './component/LogoBox/LogoBox';
import { icon_arduino, icon_bootstrap, icon_burpsuite, icon_c_sharp, icon_cpp, icon_css3, icon_django, icon_docker, icon_firebase, icon_git, icon_github, icon_gulp, icon_html5,  icon_httpd, icon_java, icon_jquery, icon_js, icon_kali, icon_mui, icon_nginx, icon_node, icon_php, icon_postgres, icon_processing, icon_python, icon_react, icon_sass,  icon_svn, icon_ts, icon_virtualbox, icon_vscode, icon_wireshark } from 'common/imgs/top/icon';

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
          <ul className={styles.logoList} id="aos-anchor-1">
            {
              skilldata_1.map((ele, index) => {
                return (
                  <li 
                    className={styles.logoItem} 
                    key={index} 
                    data-aos="fade-up" 
                    data-aos-delay={500 + (index * 100)}
                    data-aos-anchor="#aos-anchor-1"
                  >
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
          <ul className={styles.logoList} id="aos-anchor-2">
            {
              skilldata_2.map((ele, index) => {
                return (
                  <li 
                    className={styles.logoItem}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={500 + (index * 100)}
                    data-aos-anchor="#aos-anchor-2"
                  >
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