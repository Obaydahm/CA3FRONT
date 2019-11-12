import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import facade from "./apiFacade";
import LogIn from "./components/LogIn";
import LoggedIn from "./components/LoggedIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then(res => setLoggedIn(true))
      .catch(err => console.log("wrong credentials"));
  };
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
