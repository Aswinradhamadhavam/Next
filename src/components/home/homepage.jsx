import Link from "next/link";
import React from "react";

export default function HomePage({ data }) {
  return (
    <main>
      <div className="home-body">
        {data?.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
            <a className="card">
              <div className="image">
                <img src={ev.image} width={500} height={300} />
              </div>
              <div className="content">
                <h2> {ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
