import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import { routes } from "./routes";
import { redirect } from "./redirect";

function App() {
  return (
    <>
      <Router>
        <nav className="pages-div-parent">
          <ul className="pages-div">
            <li>
              <NavLink exact activeClassName="activePage" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="activePage" to="/characters">
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="activePage" to="/forms">
                Forms
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                exact={route.isExact}
                path={route.path}
                component={route.component}
              />
            );
          })}
          {redirect.map((redirect, i) => {
            return <Redirect key = {i} from={redirect.from} to={redirect.to} />;
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
