import { createContext, useContext, useMemo, useState } from "react";

const CurrentPageContext = createContext({
  currentPage: 1,
  setCurrentPage: (page: number) => {},
});

export const useCurrentPage = () => {
  const [page, setPage] = useState<number>(1);

  const currentActivePage = useMemo(
    () => ({ currentPage: page, setCurrentPage: setPage }),
    [page]
  );

  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  const PageContextProvider = ({ children }: any) => {
    return (
      <CurrentPageContext.Provider value={currentActivePage}>
        {children}
      </CurrentPageContext.Provider>
    );
  };

  return { currentPage, setCurrentPage, PageContextProvider } as const;
};