import React from 'react'

export default function Numbermap({arr}) {
  return (
   arr.map((number,i) => <li key={i}>{number}this is index{i}</li>)
  )
}
