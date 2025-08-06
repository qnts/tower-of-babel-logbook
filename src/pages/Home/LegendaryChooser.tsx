import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useMemo, useState } from 'react';
import { Grid, TextField, Typography, useTheme } from '@mui/material';
import { legendaries } from '@data/index';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import { COLOR } from '@common/constants';
import LegendaryCard from './LegendaryCard';

const useStyles = makeStyles()((theme) => ({
  input: {
    marginBottom: theme.spacing(2),
  },
  item: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    flexWrap: 'wrap',
    height: '100%',
    alignItems: 'initial',
    textAlign: 'left',
    backgroundColor: COLOR.legendaryBg2,
    color: COLOR.legendaryText,
    borderColor: COLOR.legendaryBorder,
    background: `linear-gradient(180, ${COLOR.legendaryBg1} 0%, ${COLOR.legendaryBg2} 100%)`,
  },
  legendaryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  legendaryDescription: {
    // fontSize: 14,
  },
}));

interface Props {
  index: number;
  onClose: () => void;
  onChoose: (index: number, legendary: Legendary) => void;
}

const LegendaryChooser = (props: Props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const open = useMemo(() => props.index > -1, [props.index]);
  const [keyword, setKeyword] = useState('');
  const legendaryList = useMemo(() => {
    if (keyword.trim() === '') {
      return legendaries;
    }
    const k = keyword.toLowerCase();
    return legendaries.filter(
      (legendary) =>
        legendary.name.toLowerCase().includes(k) ||
        legendary.description.toLowerCase().includes(k) ||
        legendary.skillTags?.some((tag) => tag.toLowerCase().includes(k))
    );
  }, [keyword]);

  return (
    <Dialog
      open={open}
      onClose={(e) => props.onClose}
      fullWidth
      maxWidth="md"
      fullScreen={fullScreen}
      aria-labelledby="legendary-chooser-dialog"
    >
      <DialogTitle
        id="legendary-chooser-dialog"
        aria-label="legendary-chooser-dialog-title"
      >
        Choose Legendary for Slot {props.index + 1}
      </DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Search legendary"
          variant="outlined"
          fullWidth
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="small"
          className={classes.input}
          color="primary"
        />
        {legendaryList.length > 0 ? (
          <Grid container spacing={1}>
            {legendaryList.map((legendary) => (
              <Grid size={{ xs: 12, sm: 6 }} key={legendary.id}>
                <LegendaryCard
                  legendary={legendary}
                  onClick={() => {
                    props.onChoose(props.index, legendary);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body2" color="textSecondary">
            No legendaries found
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LegendaryChooser;
