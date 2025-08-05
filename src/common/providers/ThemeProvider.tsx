import { ConfigProvider, theme } from 'antd';
import { useAppContext } from './AppProvider';

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useAppContext();
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
