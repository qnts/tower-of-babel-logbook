import { makeStyles } from 'tss-react/mui';
import { COLOR } from '@common/constants';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: 120,
    // maxroll style
    borderImage: 'url(/legendary_border1.webp) 76 fill/1.9em stretch',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: 1,
      borderImage: 'url(/legendary_border2.webp) 128 fill/3.2em stretch',
      borderImageOutset: 3,
    },
  },
  main: {
    padding: theme.spacing(2, 2.5),
    cursor: 'pointer',
    display: 'flex',
    textTransform: 'none',
    flexWrap: 'wrap',
    height: '100%',
    color: COLOR.legendaryText,
  },
  title: {
    width: '100%',
  },
  legendaryName: {
    paddingBottom: theme.spacing(2),
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      display: 'block',
      width: '100%',
      height: 1,
      bottom: 0,
      backgroundColor: theme.palette.divider,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  legendaryDescription: {
    fontSize: 18,
    width: '100%',
    '&.no-desc': {
      color: theme.palette.text.secondary,
      fontStyle: 'italic',
    },
  },
  icon: {
    marginLeft: 'auto',
  },
}));

interface Props {
  legendary?: {
    name: string;
    description: string;
  } | null;
  onClick: (e: any) => void;
  noLegendary?: React.ReactNode;
}

const LegendaryCard = ({ legendary, onClick, noLegendary }: Props) => {
  const { classes, cx } = useStyles();
  return (
    <div onClick={onClick} className={classes.root}>
      <div className={classes.main}>
        <div className={classes.legendaryName}>{legendary?.name || '-'}</div>
        <div
          className={cx(
            classes.legendaryDescription,
            !legendary?.description && 'no-desc'
          )}
        >
          {legendary?.description || noLegendary || 'No Legendary Selected'}
        </div>
      </div>
    </div>
  );
};

export default LegendaryCard;
