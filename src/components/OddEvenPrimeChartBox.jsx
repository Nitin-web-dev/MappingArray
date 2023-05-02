import React from 'react'; 



export default function OddEvenPrimeChartBox(props) {
  
   ////custom css for boxes 
    const box = {
        width:"100px",
        height:"100px",
        border:"1px solid black",
        display:'inline-block',
        fontSize:"1.5rem",
        color:'white',

        backgroundColor: "white"

    }

    //check prime or not function
    function checkprime(num){
        if( num < 2){
            return false;
        }
          

        for(let i = 2; i < num; i++){
            if(num%i == 0){
                return false;
                
            }
        }

        return true;
    }

    // check for even or odd 
    if(props.boxes%2==0){
        {box.backgroundColor= "blue"}
    }else{
        {box.backgroundColor= "yellow"}
    }


    // prime function call
    if(checkprime(props.boxes)){
        // console.log('its prime');
        {box.backgroundColor= "red"}
    }


       


   



  return (
    
    <div style={box}>
        <h4>{props.boxes}</h4>
    </div>
  )
}
