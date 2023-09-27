import Data from './data';
import { useState } from 'react';
import List from './List';

// import React from 'react';
const App = () => {
  const [people, setPeople] = useState(Data);

  return (
    <main>
      <section className="container">
        <h2 style={{ marginBottom: '2rem' }}>
          {people.length} birthdays today
        </h2>
        <List people={people} />

        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
