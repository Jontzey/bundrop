
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Navbar from './componentsUi/Navbar';
import Menu from './routes/Menu';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route caseSensitive={false} path='/home' element={<Home/>}/>
          <Route path='/' element={<Menu/>}/>
          <Route caseSensitive={false} path='/menu' element={<Menu/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
