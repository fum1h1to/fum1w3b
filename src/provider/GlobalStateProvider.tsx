import { createContext, useContext, useEffect, useState } from "react";

type GlobalStateContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  windowDimensions: {
    width: number;
    height: number;
  }
  windowScroll: {
    sx: number;
    sy: number;
  }
}

const GlobalStateContext = createContext<GlobalStateContextType>({} as GlobalStateContextType);
export function useGlobalStateContext() {
  return useContext(GlobalStateContext);
}

const GlobalStateProvider = ({ children }: {
  children?: React.ReactNode;
}) => {
  // loading処理
  const [ isLoading, setIsLoading ] = useState(true);

  // 画面がリサイズされたときの処理
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [windowDimensions]);

  // 画面のスクロール位置取得
  const getWindowScroll = () => {
    const { scrollX: sx, scrollY: sy } = window;
    return {
      sx,
      sy
    };
  }
  const [ windowScroll, setWindowScroll ] = useState(getWindowScroll());
  useEffect(() => {
    const onScroll = () => {
      setWindowScroll(getWindowScroll());
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [windowScroll]);

  return (
    <GlobalStateContext.Provider
      value={{
        isLoading,
        setIsLoading,
        windowDimensions,
        windowScroll,
      }}
    >
      { children }
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;