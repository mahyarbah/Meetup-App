import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetup pages</Link>
          </li>
          <li>
            <Link to="/new-meetup">new-meetup</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites
            <sapan className={classes.badge}>{favoritesCtx.totalFavorites}</sapan>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
