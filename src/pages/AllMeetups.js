import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //we use USEEFFECT to decide when fetch function runs,so the loop stops
  //in the array we decide the condicion to when func runs
useEffect(() => {
  setIsLoading (true);
  fetch("https://react-meetup-6de90-default-rtdb.firebaseio.com/meetups.json")
  .then((Response) => {
    //fetch hast GET(default) in it so no method needed
    //now from responde we have to get JSON and convert it
    return Response.json();
    //JSON also has a promis so we need another THEN
    //(on this THEN  we get the data that we can use)
  })
  .then((data) => {
//transform data from firebase (object to array)
const meetups = [];
for (const key in data){
  const meetup ={
    id: key,
    ...data[key]
  };
  meetups.push(meetup)
}
    setIsLoading(false);
    setLoadedMeetups(meetups);
  });

}, []);
//we have no external dipendencies to use in the arrey,so fetch runs only once


  if (isLoading) {
    return (
      <section>
        <p> Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1> All meetupssss</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;
