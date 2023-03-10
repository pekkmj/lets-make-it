import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import RecipesList from "./RecipesList";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import About from "./About";
import HowTo from "./HowTo";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} currentUser={currentUser}/>} />
        <Route exact path="/about" component={About} />
        <Route exact path="/how-to-use" component={HowTo} />
        <Route exact path="/recipes" render={(props) => <RecipesList {...props} currentUser={currentUser}/>}/>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/users/:username" render={(props) => <ProfilePage {...props} currentUser={currentUser}/>}/>
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
