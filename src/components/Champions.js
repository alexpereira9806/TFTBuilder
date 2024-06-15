import React from 'react';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'; // Import your ItemTypes
import ChampionItem from './ChampionItem'


const ChampionPool = ({champions}) => {
  return (
    <div className="champion-pool">
      {champions.map((champion) => (
        <ChampionItem key={champion.name} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionPool;