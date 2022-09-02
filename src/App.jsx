import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
import Create from './pages/Create';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element= {<Home />} ></Route>
            <Route path='/create' element= {<Create />} ></Route>
            <Route path='/blogs/:id' element= {<BlogDetails />} ></Route>
          </Routes>
        </div>
      </div>      
    </Router>

  );
}

export default App;
