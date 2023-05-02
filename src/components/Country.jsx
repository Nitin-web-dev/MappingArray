import React from 'react';


export default function Country  ({ country: { name, city } }){
    return (
      <div>
        <h1>{name}</h1>
        <small>{city}</small>
      </div>
    )
  }