import React from "react";
import UserComponents from "./components/User.jsx";
import USERDATA from "./data/dataUser.js";

// TODO Edit the User component code to be able to display DIFFERENT users !
function User() {
  return (
    <div>
    {USERDATA.map((user) => (
      <UserComponents
        key={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        title={user.title}
      />
    ))}
  </div>
  );
  
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <ul>
          {User()}
      </ul>
      
    </div>
  );
}

export default App;
