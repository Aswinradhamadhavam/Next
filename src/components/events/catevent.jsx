import Link from 'next/link'
import React from 'react'

export default function CatEvent({data,pageName}) {
  return (
    <div className='cat-events'>
    <h1>Events in {pageName}</h1>
    <div className='content'>
      {
        data.map((ev)=>(
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} legacyBehavior>
          <a className='card'>
            <img src={ev.image} height={300} width={300}/>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
          </Link>
        ))
      }
    </div>
   
  </div>
  )
}
