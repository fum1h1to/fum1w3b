import Loading from 'view/components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import To_top from '../../components/To_top/To_top';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import PageSection from './components/PageSection/PageSection';
import './style.module.scss';

const Top = () => {

  return (
    <div className="top">
      <Loading />
      <To_top />
      <Header />

      <Home />
      <main>
        <About />
        <PageSection
          sectionId='output'
          bg_color='black'
          sectionTtl="Output"
          sectionUnderTtl="制作物"
        >
          準備中
        </PageSection>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Top;
