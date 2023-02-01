import CatEvent from "@/src/components/events/catevent";
import Link from "next/link";
import React from "react";

export default function CategoryPage({data,pageName}) {
  return (
   <CatEvent data={data} pageName={pageName}/>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import("data/data.json");
  
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return{
    paths:allPaths,
    fallback:false
  }
}

export async function getStaticProps(context){
  // console.log(context);
  const id=context?.params.cat;
  // console.log(id);
  const { allEvents } = await import("data/data.json");
  const data=allEvents.filter(ev=> ev.city===id)
  console.log(data);
  return{
    props:{
      data,
      pageName:id
    }
  }
}
