import React from "react";

export default function Show({meat}){
    return(
        <div>
            <h1> Meats Show</h1>
            <h1>{meat.name}</h1>
            <h1>{meat.state}</h1>
            <h1>{meat.readyToEat? 'This meat is ready to eat':'not'}</h1>
        </div>
    )
}