import React from "react";

export default function Show({veggie}){
    return(
        <div>
            <h1>Veggie Show</h1>
            <h1>{veggie.name}</h1>
            <h1>{veggie.color}</h1>
            <h1>{veggie.readyToEat? 'This veggie is ready to eat':'not'}</h1>
        </div>
    )
}