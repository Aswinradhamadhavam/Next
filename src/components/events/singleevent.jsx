import { useRouter } from "next/router";
import React, { useRef } from "react";

export default function SingleEvent({ data }) {
  const inputEmail = useRef();

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const emailvalue = inputEmail.current.value;
    const eventid = router?.query.id;
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({email:emailvalue,eventid})
      });

      if(!response.ok) throw new Error(`Error:${response.status}`)
      const data= await response.json()
      console.log('post',data);
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <div className="event-single">
      <img src={data.image} width={1000} height={500} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form action="" onSubmit={onSubmit} className="email-regist">
        <label htmlFor=""> Get registered for this event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="please insert your email here..."
        />
        <button >Submit</button>
      </form>
    </div>
  );
}
