import React from "react"
export default function Show({ flight }) {
    let { airline,flightNo, departs, _id,airport } =flight
  console.log(flight) 
  // console.log(destination)
    return (
      <div>
        <h3>Show Flight Details</h3>
        <p> Airline:{airline}</p>
        <p>Flight No:{flightNo}</p>
        <p>Departure: {departs.toLocaleDateString()}</p>
        <p>Destination Airport: {airport}</p>
         <br/>
     
         <form action={`/flights/${_id}?_method=DELETE`} method='POST'>
          <button>Remove</button>
         </form>

         <form action={`/flights`}><button>Back</button></form>

         <form action={`/flights/${_id}/edit`}><button>Edit</button></form>

  
      </div>
    )
  }