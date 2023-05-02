import React from 'react'
import OddEvenPrimeChartBox from './OddEvenPrimeChartBox';

export default function OddEvenPrimeChart(props) {
    
    let sumToAdd= props.num;
    const arrnum = [];
    for(let i = 0; i <= sumToAdd; i++){
        arrnum.push(i);
    }



 
  return (
    
    arrnum.map((x,i) => <OddEvenPrimeChartBox key={i} boxes={x} /> )
    
  )
}
