import React from "react";
import Users from "./component/User.jsx";
function User() {
  return (
    <div>
      <Users firstName={"Nguyen"} lastName={"Ngan"} title={"PN React reactjs"} />
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
