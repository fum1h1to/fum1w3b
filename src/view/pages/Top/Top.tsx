import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import To_top from '../../components/To_top/To_top';
import Home from './Home/Home';
import './style.module.scss';

const Top = () => {
  return (
    <div className="top">
      <To_top />
      <Header />
      
      <Home />
      <Footer />
    </div>
  );
}

export default Top;
