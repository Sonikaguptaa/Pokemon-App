import React from 'react'
import Log from '../models/Log';
import DefaultLayout from './layouts/DefaultLayouts';

function Edit({ log }) {

  return (
    <DefaultLayout>
      <div>
        <h1>Edit</h1>
        <form action={`/logs/${Log._id}?_method=PUT`} method='POST'>

          <label htmlFor='title'>Title:</label>
          <input type="text" id='title' name='title' value={log.title} />

          <br />



          <br />
          <label htmlFor='entry'>Entry:</label><br />
          <input type="textarea" id="entry" name="entry" value={log.entry} />

          <label htmlFor="shipIsBroken">BrokenShip:</label>
          <input type="checkbox" id='shipIsBroken' name="shipIsBroken" value={log.shipIsBroken} checked={log.shipIsBroken ? true : false} />

          <input type="submit" value='Submit' />

        </form>
        <form action={`/logs/${log._id}`} method='Get'>
          <button>Back</button>
        </form>

      </div>
    </DefaultLayout>
  )
}

export default Edit;