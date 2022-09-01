import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const titleHomePage = 'HomePage'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home title = {titleHomePage}/>
      </div>

    </div>
  );
}

export default App;
