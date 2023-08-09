import React from "react"

export default function Show(props){
    return(
        <div>
            <h1>Show</h1>
            <p>{props.fruit.name}</p>
            <p>{props.fruit.color}</p>
            <p>{props.fruit.readyToEat? 'This fruit is ready to eat':'not'}</p>

        </div>
    )
}
// no State or on click in here
//  only responsible for displaying data 
