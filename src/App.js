import "./App.css";
import Nav from "./comoponent/header/header";
import Home from "./comoponent/main/home";
import Service from "./comoponent/main/service";
import Footer from "./comoponent/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./comoponent/login/login";
import Historial from "./comoponent/historial/historial";

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      <Switch>
          <Route path="/historial">
            <Historial />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact>
            <Nav />
            <Home />
            <Service />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
