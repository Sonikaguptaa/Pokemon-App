import React from 'react'
import DefaultLayout from './layouts/DefaultLayouts'



export default function Show({ log }) {
  console.log
  return (
    <DefaultLayout>
      <div>
        <h1>{log.title}</h1>
        <p>This Log Created at: {log.createdAt.toString()}</p>
        <p>Entry: {log.entry}</p>
        <p>Value: {log.shipIsBroken ? 'The ship is broken' : 'The ship is in good condition'}</p>
        <form action={`/logs/${log._id}/edit`} method="GET">
          <button>Edit</button>
        </form>
        <br />

        <a href="/logs"><button>Back</button></a>
      </div>
    </DefaultLayout>
  )
}