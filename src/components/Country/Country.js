import React from 'react';

const Country = ({country , handleAddPopulation}) => {

    const {name , flag , population , region} = country;
    const countryStyle = {border : '1px solid green' , margin  : '30px'}

    return (
        <div style = {countryStyle}>

                        <h4>{name}</h4>
                        <img src={flag} style={{width : '20px' , height : '20px'}} alt=""/>
                        <p><small>Population : {population}</small></p>
                        <p><small>Region : {region}</small></p>
                        <button onClick = {()=> handleAddPopulation(country)}>Add population</button>

        </div>
    );
};

export default Country;