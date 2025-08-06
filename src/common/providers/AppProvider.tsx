import { useColorScheme } from '@mui/material/styles';
import { createContext, useContext, useMemo, useState } from 'react';
import PlannerProvider from './PlannerProvider';

export type Mode = 'light' | 'dark' | 'system';

export interface AppContextProps {
  mode?: Mode;
  setMode: (mode: Mode | null) => void;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppContext = createContext<AppContextProps>({
  mode: 'system',
  setMode: () => null,
  drawerOpen: false,
  setDrawerOpen: () => null,
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, setMode } = useColorScheme();
  const value = useMemo(
    () => ({ mode, setMode, drawerOpen, setDrawerOpen }),
    [mode, setMode, drawerOpen, setDrawerOpen]
  );
  return (
    <AppContext.Provider value={value}>
      <PlannerProvider>{children}</PlannerProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
