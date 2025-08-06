import { usePlanner } from '@common/providers/PlannerProvider';
import { useMemo } from 'react';
import { legendaryMaps } from '@data/index';
import LegendaryCard from './LegendaryCard';

interface Props {
  index: number;
  openLegendaryChooser: () => void;
}

const Slot = (props: Props) => {
  const { data } = usePlanner();
  const legendary = useMemo(() => {
    const legendaryId = data[props.index]?.legendary;
    if (!legendaryId) return null;
    return legendaryMaps[legendaryId] || null;
  }, [data[props.index]?.legendary]);
  return (
    <LegendaryCard
      legendary={legendary}
      onClick={props.openLegendaryChooser}
      noLegendary={`Click to choose legendary for slot ${props.index + 1}`}
    />
  );
};

export default Slot;
