import React from 'react';

export default function Index(props) {
  const renderFlight = (flight) => {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - flight.departs;

    // const color = timeDifference > 0 ? 'red' : 'green';
    const status = timeDifference > 0 ? 'MISSED' : 'ON TIME';

    return (
      <a key={flight._id}
        href={`/flights/${flight._id}`}>
        <p>
          {flight.airline} <br />
          DATE: {flight.departs.toISOString().slice(0, 11).replace('T', '')} <br />
          TIME: {flight.departs.toISOString().slice(12, 16)} <strong>{status}</strong>
        </p>
      </a>
    );
  };

  const time = new Date().toString();

  return (
    <div>
      <h3>Flights Info</h3>
      <h3>{time}</h3>
      <a href='/flights/new'>ADD FLIGHT</a>
      {props.flights.map((flight) => renderFlight(flight))}
    </div>
  );
}