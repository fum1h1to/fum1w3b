import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import { useEffect } from 'react';
import Loading from 'view/components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import To_top from '../../components/To_top/To_top';
import Home from './components/Home/Home';
import './style.module.scss';

const Top = () => {
  const { windowScroll } = useGlobalStateContext();
  console.log(windowScroll);

  return (
    <div className="top">
      <Loading />
      <To_top />
      <Header />
      
      <Home />
      <main>

      </main>

      <Footer />
    </div>
  );
}

export default Top;
