import React from 'react';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'; // Import your ItemTypes

const ChampionItem = ({ champion }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.CHAMPION,
      item: champion,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));
  
    const getBorderColor = (cost) => {
      switch (cost) {
        case '1':
        return '#bbbbbb77'; // Darker grayish for cost 1
      case '2':
        return '#5bc17377'; // Darker greenish for cost 2
      case '3':
        return '#5abff677'; // Darker light green for cost 3
      case '4':
        return '#d11ab277'; // Darker reddish for cost 4
      case '5':
        return '#f5bf3877'; // Darker orangeish for cost 5
        default:
          return 'black'; // Default color if cost doesn't match any case
      }
    };
  
    return (
      <div
        ref={drag}
        className="champion-item"
        style={{
          border: `5px solid ${getBorderColor(champion.cost)}`,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <img src={champion.img} alt={champion.name} />
      </div>
    );
  };
  export default ChampionItem;