import React from "react";
import DefaultLayout from "./layouts/DefaultLayouts";

export default function Index({ logs }) {

  const time = new Date().toString();

  return (
    <DefaultLayout>

      <div>
        <h2>Index </h2>
        <h4>Logs Info...</h4>
        <h3>{time}</h3>

        <a href="logs/new"><button>Create</button></a>

        {logs.map((log) =>
          <p key={log._id}>
            <a href={`/logs/${log._id}`}>
              {log.title}
            </a>

            <form action={`/logs/${log._id}/edit`} method="GET">

              <button>Edit</button>
            </form> <br />
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <button>Clear</button> <br /> <br />
            </form>
            <br />

          </p>)}




      </div >
    </DefaultLayout>
  )
}