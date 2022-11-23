import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';

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

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
