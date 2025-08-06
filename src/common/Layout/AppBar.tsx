import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { PAGE_MAX_WIDTH } from '../constants';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppContext } from '../providers/AppProvider';

function AppBar() {
  const { setDrawerOpen } = useAppContext();
  return (
    <MuiAppBar position="sticky" color="primary">
      <Container maxWidth={PAGE_MAX_WIDTH}>
        <Toolbar disableGutters>
          <Typography variant="h6">Tower Logbook</Typography>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            style={{ color: 'white' }}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
export default AppBar;
