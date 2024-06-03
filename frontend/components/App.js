import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [planets, setPlanets] = useState([]);
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  Promise.all([
    axios.get(urlPlanets),
    axios.get(urlPeople)
  ])
  .then(([planetsResponse, peopleResponse]) => {
    const planets = planetsResponse.data;
    const people = peopleResponse.data;
    
const combinedData = people.map(person => {
  const homeworldPlanet = planets.find(planet => planet.id === person.homeworld)
  const homeworldName = homeworldPlanet ? homeworldPlanet.name : 'Unknown';
  return {
    ...person,
    homeworldName: homeworldName
  };
}) ;
console.log(combinedData)
   
setPlanets(planets);
setCharacters(combinedData);
setLoading(false);
  })
  .catch(err => {
    setError(err);
    setLoading(false);
   console.log(err);  
  });
}, []);

if (loading) return <p>Loading...</p>
if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      <ul>
        {characters.map((person, index) => {
         return <Character key={index} character={person}/>
        })}
      </ul>
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
