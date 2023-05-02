import React from 'react';
import Country from './Country';

// countries component
export default function Countries ({ countries }) {
    const countryList = countries.map((country) => <Country key={country.name} country={country} />)
    return <div>{countryList}</div>
  } 