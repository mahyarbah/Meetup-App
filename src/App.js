import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';

function App() {
  // localhost:3000/ <-- here is called domain, part after slash is Path
  // real adress   my-page.com/
  return (
 
   <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/Favorites">
          <FavoritesPage />
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;
