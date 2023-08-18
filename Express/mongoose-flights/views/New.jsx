import React from 'react';

function NewFlight({ dateTime }) {
  const airLines = ['American', 'Southwest', 'United'];
  const airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'];

  return (
    <div>
      <h1>New Flight</h1>
      <form action='/flights' method='POST'>
        <label htmlFor='airline'>Airline:</label><br />
        <select id='airline' name='airline'>
          {airLines.map((airline, index) => (
            <option key={index} value={airline.toLowerCase()}>
              {airline}
            </option>
          ))}
        </select>
        <br /><br />

        <label htmlFor='flightNo'>Flight No:</label><br />
        <input type='number' id='flightNo' name='flightNo' />
        <br /><br />

        <label htmlFor='departs'>Departure:</label>
        <input
          type='datetime-local'
          id='departs'
          name='departs'
          defaultValue={dateTime}
        />
        <br /><br /><br />

        <label htmlFor='originAirport'>Origin Airport:</label><br />
        <select id='originAirport' name='originAirport'>
          {airports.map((airport, index) => (
            <option key={index} value={airport}>
              {airport}
            </option>
          ))}
        </select>
        <br /><br />

        <label htmlFor='destinationAirport'>Destination Airport:</label><br />
        <select id='destinationAirport' name='destinationAirport'>
          {airports.map((airport, index) => (
            <option key={index} value={airport}>
              {airport}
            </option>
          ))}
        </select>
        <br /><br />

        <button type='submit'>Submit</button>
      </form>
      <a href='/flights'>Back</a>
    </div>
  );
}

export default NewFlight;