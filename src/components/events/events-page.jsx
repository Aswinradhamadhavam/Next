import Link from "next/link";
import React from "react";

export default function EventsPage({ data }) {
  return (
    <div className="events-page">
     
   
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
            <a className="card">
              <img src={ev.image} height={500} width={400} />
              <h2>{ev.title} </h2>
            </a>
          </Link>
        ))}
     
    </div>
  );
}
