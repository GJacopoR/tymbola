import './App.css'
import CallerView from './views/caller-view';
import CardConstructor from './views/card-constructor';
import Home from './views/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerView from './views/player-view';

function App() {

  return (
    <BrowserRouter>
		<Routes>
			<Route path="/tymbola/" element={<Home />} />
      <Route path="/tymbola/caller" element={<CallerView />} />
      <Route path="/tymbola/constructor" element={<CardConstructor />} />
      <Route path="/tymbola/player" element={<PlayerView />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
