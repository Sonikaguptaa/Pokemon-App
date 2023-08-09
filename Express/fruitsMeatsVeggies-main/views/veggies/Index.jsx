import React from "react";

export default function Index({veggies}){
    return(
        <div>
            <h1> Veggie Index</h1>
            {veggies.map((veggie, i )=> <p key={i} > {veggie.name} </p>)}

        </div>
    )
}