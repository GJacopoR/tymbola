import "./App.css";
import CallerView from "./views/caller-view";
import CardConstructor from "./views/card-constructor";
import Home from "./views/home";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayerView from "./views/player-view";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route index path="/tymbola/" element={<Home />} />
      <Route path="/tymbola/caller" element={<CallerView />} />
      <Route path="/tymbola/constructor" element={<CardConstructor />} />
      <Route path="/tymbola/player" element={<PlayerView />} />
    </Routes>
  );
}

export default App;
