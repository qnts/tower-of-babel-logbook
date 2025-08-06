import { Drawer, IconButton, Stack, Typography } from '@mui/material';
import { Mode, useAppContext } from '../providers/AppProvider';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 300,
  },
  drawerTitle: {
    padding: theme.spacing(1, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  title: {
    padding: theme.spacing(1, 2),
    fontStyle: 'italic',
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
}));

const buttons: {
  value: Mode;
  label: string;
  icon: React.ReactNode;
}[] = [
  { value: 'light', label: 'Light', icon: <LightModeOutlinedIcon /> },
  { value: 'dark', label: 'Dark', icon: <DarkModeOutlinedIcon /> },
  { value: 'system', label: 'System', icon: <AdjustOutlinedIcon /> },
];

const AppDrawer = () => {
  const { drawerOpen, setDrawerOpen, mode, setMode } = useAppContext();
  const { classes, cx } = useStyles();
  return (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      anchor="right"
    >
      <div className={classes.root}>
        <Stack
          direction="row"
          spacing={2}
          className={classes.drawerTitle}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="h6">Settings</Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        {/* Settings content goes here */}
        <Typography variant="body1" className={classes.title}>
          Mode
        </Typography>
        <ButtonGroup variant="outlined" aria-label="Mode selection">
          {buttons.map((button) => (
            <Button
              onClick={() => setMode(button.value)}
              key={button.value}
              className={cx(mode === button.value && classes.active)}
            >
              {button.icon}
              {button.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
