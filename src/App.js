import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Discover from './components/Discover';
import Commissions from './components/Commissions';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<LandingPage />}
          />

          <Route
            path='/about'
            element={<About />}
          />

          <Route
            path='/discover'
            element={<Discover />}
          />

          <Route
            path='/commissions'
            element={<Commissions />}
          />

          <Route
            path='/signup'
            element={<SignUp />}
          />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
