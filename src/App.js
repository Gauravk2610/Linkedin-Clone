import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* HomePage */}
      <HomePage />
    </div>
  );
}

export default App;
