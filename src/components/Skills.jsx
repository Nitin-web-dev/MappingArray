import React from 'react'
import Skill from './Skill'

export default function Skills({skills}) {
    // Skills Component
   return(

      skills.map((skill) => <Skill key={skill[0]} skill={skill} />)
    
        
   )
  
 
}
