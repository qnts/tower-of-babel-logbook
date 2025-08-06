import { usePlanner } from '@common/providers/PlannerProvider';
import Slot from './Slot';
import { Grid } from '@mui/material';
import { useState } from 'react';
import LegendaryChooser from './LegendaryChooser';

function Home() {
  const { data, setSlot } = usePlanner();
  const [slotIndex, setSlotIndex] = useState(-1);
  const openLegendaryChooser = (index: number) => {
    setSlotIndex(index);
  };
  const chooseLegendary = (index: number, legendary: Legendary) => {
    setSlot(index, legendary.id);
    setSlotIndex(-1); // close the chooser after selection
  };
  return (
    <div style={{ paddingTop: 8 }}>
      <Grid container spacing={1}>
        {data.map((_, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Slot
              index={index}
              openLegendaryChooser={() => openLegendaryChooser(index)}
            />
          </Grid>
        ))}
      </Grid>
      <LegendaryChooser
        index={slotIndex}
        onClose={() => setSlotIndex(-1)}
        onChoose={chooseLegendary}
      />
    </div>
  );
}

export default Home;
