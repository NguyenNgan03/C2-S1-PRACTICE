import React from "react";
import CartComponent from "./components/cart.jsx";
import AVAILABLE_USER from "./data.js";
function Carts() {
  return (
    <div>
      {AVAILABLE_USER.map((user) => (
        <CartComponent
          key={user.id}
          name={user.name}
          title1={user.title1}
          title2={user.title2}
          image={user.image}
        />
      ))}
    </div>
  );
}
function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>

      <div class="cards-view">
        <div class="cards-grid">
          <Carts />
        </div>
      </div>
    </>
  );
}

export default App;
