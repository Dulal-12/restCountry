import './App.css';
import React , {useState, useEffect} from 'react';
import Country from './components/Country/Country';
function App() {

   const [countries , setCountries] = useState([]);
   const [population , setPopulation] = useState([]);
   useEffect(()=>{
                          fetch('https://restcountries.eu/rest/v2/all')
                          .then(res => res.json())
                          .then(data=> setCountries(data))
   }, [])
   //console.log(countries);

   const handleAddPopulation = (country)=>   {
     //console.log(country);
     const newPopulation = [...population , country];
      setPopulation(newPopulation);
    };

   const totalPopulation = population.reduce(( ential , country )=>ential + country.population , 0);

   
  return (
    <div className="App">
      <h1>Country : {countries.length}</h1>
     <p>Selected Country Population : {totalPopulation} </p>
      
        {
          countries.map(cnt => <Country country = {cnt} key = {cnt.alpha3Code} handleAddPopulation = {handleAddPopulation}></Country>)
        }
     
    </div>
  );
}

export default App;
