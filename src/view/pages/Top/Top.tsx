import Loading from 'view/components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import To_top from '../../components/To_top/To_top';
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
      <main style={{ height: 2000 }}>
        <PageSection
          sectionId='about'
          bg_color='white'
        >
          <div className="about">
            <h2 className="section__title">About me</h2>
            <div className="about__content content">
              aiueo
            </div>
          </div>
        </PageSection>
      </main>

      <Footer />
    </div>
  );
}

export default Top;
