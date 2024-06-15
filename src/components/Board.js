import React, { useState } from 'react';
import HexagonCell from './HexagonCell';
import '../styles/Board.css'
import TraitList from './TraitsSidebar';


const Board = () => {
  const [cells, setCells] = useState([
    { position: { x: 48, y: 292 }, isOccupied: false , champion: null},
    { position: { x: 144, y: 292 }, isOccupied: false, champion: null  },
    { position: { x: 240, y: 292 }, isOccupied: false, champion: null },
    { position: { x: 336, y: 292 }, isOccupied: false, champion: null },
    { position: { x: 432, y: 292 }, isOccupied: false, champion: null },
    { position: { x: 528, y: 292 }, isOccupied: false, champion: null },
    { position: { x: 624, y: 292 }, isOccupied: false, champion: null },
    { position: { x: 0, y: 196 }, isOccupied: false, champion: null },
    { position: { x: 96, y: 196 }, isOccupied: false, champion: null },
    { position: { x: 192, y: 196 }, isOccupied: false, champion: null },
    { position: { x: 288, y: 196 }, isOccupied: false, champion: null },
    { position: { x: 384, y: 196 }, isOccupied: false, champion: null },
    { position: { x: 480, y: 196 }, isOccupied: false, champion: null },
    { position: { x: 576, y: 196 }, isOccupied: false, champion: null },
    { position: { x: 48, y: 100 }, isOccupied: false, champion: null },
    { position: { x: 144, y: 100 }, isOccupied: false, champion: null },
    { position: { x: 240, y: 100 }, isOccupied: false, champion: null },
    { position: { x: 336, y: 100 }, isOccupied: false, champion: null },
    { position: { x: 432, y: 100 }, isOccupied: false, champion: null },
    { position: { x: 528, y: 100 }, isOccupied: false, champion: null },
    { position: { x: 624, y: 100 }, isOccupied: false, champion: null },
    { position: { x: 0, y: 4 }, isOccupied: false, champion: null },
    { position: { x: 96, y: 4 }, isOccupied: false, champion: null },
    { position: { x: 192, y: 4 }, isOccupied: false, champion: null },
    { position: { x: 288, y: 4 }, isOccupied: false, champion: null },
    { position: { x: 384, y: 4 }, isOccupied: false, champion: null },
    { position: { x: 480, y: 4 }, isOccupied: false, champion: null },
    { position: { x: 576, y: 4 }, isOccupied: false, champion: null },
  ]);
  const [championsOnBoard, setChampionsOnBoard] = useState([]);
  

  const handleDrop = (item, position) => {
    const updatedCells = cells.map((cell) => {
      if (cell.position.x === position.x && cell.position.y === position.y) {
        if (!cell.isOccupied) {
          return { ...cell, isOccupied: true, champion: item };
        }
      }
      return cell;
    });
    setCells(updatedCells);
    // setChampionsOnBoard(updatedCells.filter(cell => cell.isOccupied).map(cell => cell.champion));
    setChampionsOnBoard((prev) => [...prev, item]);
  };

  const handleRemoveChampion = (position) => {
    const updatedCells = cells.map((cell) => {
      if (cell.position.x === position.x && cell.position.y === position.y) {
        return { ...cell, isOccupied: false, champion: null };
      }
      return cell;
    });
    setCells(updatedCells);
    const updatedChampions = championsOnBoard.filter(
      (champion) => champion.position.x !== position.x || champion.position.y !== position.y
    );
    setChampionsOnBoard(updatedChampions);
    
    // setChampionsOnBoard(updatedCells.filter(cell => cell.isOccupied).map(cell => cell.champion));
  };
  console.log('champion actif:', championsOnBoard)

  return (
    <div className="board-container">
      <div className="trait-list">
      
      <TraitList champions={championsOnBoard} />
      
      
    </div>
      <svg className="board" width="760" height="420" viewBox="0 0 760 420">
        {cells.map((cell, index) => (
          <HexagonCell
            key={index}
            position={cell.position}
            isOccupied={cell.isOccupied}
            onDrop={handleDrop}
            onRemoveChampion={() => handleRemoveChampion(cell.position)}
          />
        ))}
      </svg>
    </div>
  );
};
export default Board;
