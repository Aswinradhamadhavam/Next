import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extraxtData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extraxtData(filePath);
  if (!allEvents) {
    return res.status(404).jsoc({
      status: 404,
      messege: "event data not found",
    });
  }

  if (method === "POST") {
    const { email, eventid } = req.body;

    const newAllEvents=allEvents.map((ev)=>{
        if(ev.id===eventid){
            if(ev.emails_registered.includes(email)){
                res.status(201).json({
                    messege:"this is already been registered"
                })
            }
            return{
                ...ev,emails_registered:[...ev.emails_registered,email]
            }
        }
        return ev;

    })

    fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents:newAllEvents}))

    res.status(200).json({
      messege: `yous has been registered with email:${email} ${eventid}`,
    });
  }
  // if(method==='GET'){

  // }
}
