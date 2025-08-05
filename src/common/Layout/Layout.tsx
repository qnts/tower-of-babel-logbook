import { tss } from 'tss-react';
import { Flex } from 'antd';
import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';

const useStyles = tss.create({
  root: {
    height: '100vh',
    // make this component centered in the viewport
    position: 'relative',
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
  },
  container: {
    flex: 1,
    overflow: 'auto',
    minHeight: 1,
  },
});

function Layout() {
  const { classes } = useStyles();
  return (
    <Flex vertical className={classes.root}>
      <AppBar />
      <div className={classes.container} id="app-container">
        <Outlet />
      </div>
    </Flex>
  );
}

export default Layout;
