import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  //history = can use it to navigate to other pages after fetch
  // (here goes back to the starting page)
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-6de90-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      } //then is after PROMIS, when fetch is complited
    ).then(() => {
      history.replace("/");
    });
  } //.jason is for firebase!!! non js needed, fetch has GET in it so we have to use post for storing data
  return (
    <section>
      <h1>add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
