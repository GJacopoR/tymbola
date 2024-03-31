import "./App.css";
import CallerView from "./views/caller-view";
import CardConstructor from "./views/card-constructor";
import Home from "./views/home";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayerView from "./views/player-view";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Loader from "./components/loader";

export const SMALL_DESKTOP_MIN_WIDTH = 1024;

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route index path="/tymbola/" element={<Home />} />
          <Route path="/tymbola/caller" element={<CallerView />} />
          <Route path="/tymbola/constructor" element={<CardConstructor />} />
          <Route path="/tymbola/player" element={<PlayerView />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
