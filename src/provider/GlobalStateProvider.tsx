import { createContext, useContext, useState } from "react";

type GlobalStateContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType>({} as GlobalStateContextType);
export function useGlobalStateContext() {
  return useContext(GlobalStateContext);
}

const GlobalStateProvider = ({ children }: {
  children?: React.ReactNode;
}) => {
  const [ isLoading, setIsLoading ] = useState(true);

  return (
    <GlobalStateContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      { children }
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;