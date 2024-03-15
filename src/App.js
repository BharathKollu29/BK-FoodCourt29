import {Routes,Route} from 'react-router-dom'
import './App.css';

import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/Services' Component={Services} />
          <Route exact path='/About' Component={About} />
          <Route exact path='Login' Component={Login} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
