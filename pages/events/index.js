import EventsPage from "@/src/components/events/events-page";
import Link from "next/link";
import React from "react";

export default function index({ data }) {
  return <EventsPage data={data} />;
}

export async function getStaticProps() {
  const { events_categories } = await import("data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
