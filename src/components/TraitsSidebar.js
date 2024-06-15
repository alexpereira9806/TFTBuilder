import React from 'react';

const TraitList = ({ champions }) => {
  const traitCounts = {};

  console.log('Champions on Board:', champions); // Debugging statement

  champions.forEach((champion) => {
    if (champion.traits) {
      const traits = champion.traits.split(' '); // Split traits by space
      console.log('Traits of champion:', champion.name, traits); // Debugging statement
      traits.forEach((trait) => {
        if (traitCounts[trait]) {
          traitCounts[trait]++;
        } else {
          traitCounts[trait] = 1;
        }
      });
    }
  });

  console.log('Trait Counts:', traitCounts); // Debugging statement

  return (
    <div className="trait-list">
      <h3>Traits</h3>
      <ul>
        {Object.keys(traitCounts).map((trait) => (
          <li key={trait}>
            {trait}: {traitCounts[trait]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TraitList;
