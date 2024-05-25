import React from "react";
import User from "./component/User.jsx";
import { DATA } from "./data/user.js";
function User() {
  return (
    <div>
      <User firstName={"Nguyen"} lastName={"Ngan"} title={"PN React reactjs"} />
    </div>
  );
}
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User/>
    </div>
  );
}

export default App;
