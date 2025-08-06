import { Container } from '@mui/material';
import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';
import { PAGE_MAX_WIDTH } from '../constants';
import AppDrawer from './AppDrawer';

function Layout() {
  return (
    <>
      <AppBar />
      <AppDrawer />
      <Container maxWidth={PAGE_MAX_WIDTH} id="app-container">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
