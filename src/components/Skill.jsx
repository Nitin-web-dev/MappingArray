import React from 'react'

export default function Skill({ skill,k }) {
  return (
            <li key={k}>{skill[0]} ,{skill[1]} = index is {k}</li>
  )
}
