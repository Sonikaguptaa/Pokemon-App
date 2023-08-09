import React from 'react'

export default function Index(props){
    // props= {fruits}
    return (
        <div>
            <h1>Hello</h1>
            {props.fruits.map((fruit, i )=> <p key={i} > {fruit.name} </p>)}
        </div>
    )

}