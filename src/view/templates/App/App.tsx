import GlobalStateProvider, { useGlobalStateContext } from 'provider/GlobalStateProvider';
import React, { memo, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from '../../pages/Top/Top';
import './style.module.scss';

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

  return (
    <GlobalStateProvider>
      <AppRouter />
    </GlobalStateProvider>
  );
}

export default App;
