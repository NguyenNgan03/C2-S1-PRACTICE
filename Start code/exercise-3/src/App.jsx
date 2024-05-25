import React from "react";
import { ALL_PNV_TEACHERS } from "./teachers.js";
import user from "./components/user.jsx"

// NO change to perform here...
export function User({ user }) {
  <div>
    {ALL_PNV_TEACHERS.map((user) => (
      <UserComponents
        key={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        title={user.title}
      />
    ))}
  </div>;
}

function App() {
  return (
    <div id="app">
      <h1>PNV Team !!</h1>
      <p>Here are some PNV trainers and educators, do you know them?</p>
      <ul>{User()}</ul>
    </div>
  );
}

export default App;
