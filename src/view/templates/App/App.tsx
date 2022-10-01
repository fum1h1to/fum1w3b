import GlobalStateProvider, { useGlobalStateContext } from 'provider/GlobalStateProvider';
import React, { memo, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from '../../pages/Top/Top';
import './style.module.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AppRouter = memo(() => {

  const { setIsLoading } = useGlobalStateContext();

  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => {
      clearTimeout(time);
    }
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={ <Top /> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
});

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
    });
  }, [])

  return (
    <GlobalStateProvider>
      <AppRouter />
    </GlobalStateProvider>
  );
}

export default App;
