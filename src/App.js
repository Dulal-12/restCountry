import './App.css';
import React , {useState, useEffect} from 'react';
import Country from './components/Country/Country';
function App() {

   const [countries , setCountries] = useState([]);
   useEffect(()=>{
                          fetch('https://restcountries.eu/rest/v2/all')
                          .then(res => res.json())
                          .then(data=> setCountries(data))
   }, [])
   console.log(countries);
  return (
    <div className="App">
      <h1>Country : {countries.length}</h1>
      
        {
          countries.map(cnt => <Country name={cnt.name}></Country>)
        }
     
    </div>
  );
}

export default App;
