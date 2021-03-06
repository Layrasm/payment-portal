import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ThingsDemo from "./things/ThingsDemo";
// import { Container } from "semantic-ui-react";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import WelcomePage from "./components/WelcomePage";
import MyAccount from './components/MyAccount';



function App() {
  return (
    <>
    
      <FetchUser>
      <div>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={WelcomePage}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/ThingsDemo" component={ThingsDemo} />
          <ProtectedRoute exact path="/MyAccount" component={MyAccount}/>
          
        </Switch>
      </div>
      </FetchUser>
    </>
  );
}

export default App;