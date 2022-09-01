import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const title = 'hallooooo'
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
        <Home title = {title}/>
    </div>
  );
}

export default App;
