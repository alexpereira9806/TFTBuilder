// HexagonCell.jsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Import your ItemTypes


const HexagonCell = ({ position, _champion, onDrop }) => {
  const [championData, setChampionData] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CHAMPION,
    drop: (droppedChampion) => {
      setChampionData(droppedChampion);
      onDrop(droppedChampion, position); 
      console.log(1, droppedChampion)
      // Notify parent component of the dropped champion and its position
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const hexagonPath = `M48 0 L96 28 L96 84 L48 112 L0 84 L0 28 Z`;
  const cellStyle = {
    cursor: 'pointer',
    fill: isOver ? '#0f3058' : '#0f3058',
    stroke: '#000',
    strokeWidth: 2,
  };

  const handleRemoveChampion = () => {
    
    setChampionData(null); // Clear champion data from the cell
  };


  return (
    <g ref={drop} transform={`translate(${position.x},${position.y})`} cursor="pointer">
      <path d={hexagonPath} fill={cellStyle.fill} stroke={cellStyle.stroke} strokeWidth={cellStyle.strokeWidth} />
      {championData && (
        <image
          href={championData.img} // Assuming championData has an 'img' property with the image URL
          
          clipPath="polygon(48px 0, 96px 28px, 96px 84px, 48px 112px, 0 84px, 0 28px)"
          onClick={handleRemoveChampion}
        />
      )}
    </g>
  );
};

export default HexagonCell;
