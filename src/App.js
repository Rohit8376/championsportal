import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screen/login";
import Signup from "./screen/Signup";
import Team from "./screen/team";
import Session from "./screen/session";
import PrivateRoute from "./screen/privateRoute";
import Error from "./screen/error"
import Admin from "./screen/admin"
import addPeople from "./screen/addPeople";
import PrivateRoute2 from "./screen/privateRoute2";
import Forgetpassword from "./screen/forgetpassword";
import { useEffect } from "react";

import { useHistory , Redirect} from "react-router";




function App() {

  

  // let history = useHistory();

  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute2 path="/admin" component={Admin}/>
        <Route path="/signup" component={Signup} />
        <Route path="/forget-password" component={Forgetpassword} />
        <PrivateRoute path="/team" component={Team} />
        <PrivateRoute path="/session" component={Session} />
        <PrivateRoute path="/champions" component={addPeople} />
        <Route path="*" component={Error}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
