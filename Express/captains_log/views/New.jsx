import React from "react";
import DefaultLayout from "./layouts/DefaultLayouts";

export default function New() {
  return (
    <DefaultLayout>
      <div>
        <h1> Captain Log </h1>

        <form action="/logs" and method="POST">
          <label htmlFor="title">Title:</label>
          <input type="text" id="name" name="title" />
          <br />
          <br />
          <label htmlFor="entry">Entry:</label>
          <input type="text" name="entry" />
          <br />
          <br />
          <label htmlFor="shipIsBroken">BrokenShip:</label>
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <br />
          <button>Submit</button> <br />
        </form> <br />

        <form action="/logs">
          <button>Back</button>
        </form>
      </div>
    </DefaultLayout>
  );
}