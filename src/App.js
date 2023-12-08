import React from 'react';
import './App.css';
import data from './data';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <h1>React Card Component</h1>
       {data.map((person) => (
        <Card
          key={person.id}
          id={person.id}
          img={person.img}
          name={person.name}
          age={person.age}
          occupation={person.occupation}
        />
      ))}
    </div>
  );
}

export default App;