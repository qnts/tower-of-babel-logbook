// create context
import React, { createContext, useContext, useState } from 'react';

export interface Slot {
  index: number;
  /**
   * legendary ID
   */
  legendary: string | null;
}

interface PlannerContextType {
  data: Slot[];
  setData: React.Dispatch<React.SetStateAction<Slot[]>>;
  setSlot: (index: number, legendary: string | null) => void;
}

export const PlannerContext = createContext<PlannerContextType>({
  data: [],
  setData: () => {},
  setSlot: () => {},
});

const defaultData = Array.from({ length: 10 }, (_, index) => ({
  index,
  legendary: null,
}));

const loadSavedData = () => {
  try {
    const savedData = localStorage.getItem('plannerData');
    if (!savedData) {
      return defaultData;
    }
    const data = JSON.parse(savedData);
    return data;
  } catch (error) {
    return defaultData;
  }
};

const PlannerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Slot[]>(loadSavedData());

  const setSlot = (index: number, legendary: string | null) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], legendary };
      return newData;
    });
  };

  // auto-save to localStorage whenever data changes
  React.useEffect(() => {
    localStorage.setItem('plannerData', JSON.stringify(data));
  }, [data]);

  return (
    <PlannerContext.Provider value={{ data, setData, setSlot }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlanner = () => useContext(PlannerContext);

export default PlannerProvider;
