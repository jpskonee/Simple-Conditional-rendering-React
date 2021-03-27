import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";

let isLoggedIn = false;

function App() {
  return isLoggedIn ? <Welcome /> : <Login />;
}

export default App;
