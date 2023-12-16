import './App.css'
import CallerView from './views/caller-view';
import CardConstructor from './views/card-constructor';
import Home from './views/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerView from './views/player-view';

function App() {


  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="/caller" element={<CallerView />} />
      <Route path="/constructor" element={<CardConstructor />} />
      <Route path="/player" element={<PlayerView />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
