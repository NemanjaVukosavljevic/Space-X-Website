import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./components/views/HomeView";
import LaunchesView from "./components/views/LaunchesView";
import RocketsView from "./components/views/RocketsView";
import ShipsView from "./components/views/ShipsView";
import { Navbar } from "./components/navbar";
import LaunchDetails from './components/launches/LaunchDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="view-wrapper">
          <Routes>
            <Route path="/launches" element={<LaunchesView />} />
            <Route path="/launches/:id" element={<LaunchDetails />} />
            <Route path="/rockets" element={<RocketsView />} />
            <Route path="/ships" element={<ShipsView />} />
            <Route path="/" element={<HomeView />} />
          </Routes>
        </div>
      </Router>

      {/* Domaći zadatak: SpaceX informacioni sistem
      Cilj domaćeg zadatka je da završite aplikaciju koja prikazuje informacije o svim
      SpaceX lansiranjima,letelicama i raketama, kao i o samoj kompaniji. Dodati da
      aplikacija ima listu svih letelica i raketa, kao i pojedinačne stranice za prikaz
      detalja o svakoj letelici i raketama.
      Korak 1: Implementirajte komponentu ShipsView i RocketsView.
      Ažurirajte komponente ShipsView i RocketsView
      Fetch-ujte podatke o brodovima i raketama.
      Prikazite ih na odgovarajućim stranicama.
      Dodajte Loading, Error i State fazu prikaza za obe komponente.
      Neka svaki item iz vaše liste vodi na pojedinačnu rutu sa id-jem.
      Korak 2: Kreirajte pojedinačne stranice za rakete i brodove.
      Napravite komponente SingleShipView i SingleRocketView.
      Koristite parametre za identifikaciju i fetch podataka o određenoj raketi ili
      brodu.
      Implementirajte Loading, Error i State fazu prikaza.
      Sloboda je na vama da li će te koristiti lokalni state, ili Context ili Reducer. */}
    </div>
  );
}

export default App;
