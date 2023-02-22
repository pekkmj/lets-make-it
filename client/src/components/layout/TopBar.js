import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  let profileLink
  if (user) {
    profileLink = `/users/${user.username}`
  }
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new" className="button sign-in-button">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button sign-up-and-out-button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <Link key="profile" to={`${profileLink}`} className="button sign-in-button">
    My Profile
    </Link>,
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link to="/" className="app-title">Let's Make It</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
