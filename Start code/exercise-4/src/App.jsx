import PlaceComponent from "./components/Place.jsx";
import AVAILABLE_PLACES from "./data.js";
function Places() {
  return (
    <div>
      {AVAILABLE_PLACES.map((place) => (
        <PlaceComponent
          key={place.id}
          image={place.image}
          title={place.title}
        />
      ))}
    </div>
  );
}
function App() {
  return (
    <>
      <header>
        <h1>PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            <Places/>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
