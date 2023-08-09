import React from "react";

export default function Index({meats}){
    return(
        <div>
            <h1> Meat Index</h1>
            {meats.map((meat, i )=> <p key={i} > {meat.name} </p>)}

        </div>
    )
}