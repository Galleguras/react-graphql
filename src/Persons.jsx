import React from 'react';

const Persons = ({ persons }) => {
  if (!persons) return null;
  return (
    <div>
      <h2>Persons</h2>
      {persons.map(p => (
        <div key={p.id}>
          {p.name} {p.phone}
        </div>
      ))}
    </div>
  );
};

export default Persons;
