
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Navbar from './componentsUi/Navbar';
import Menu from './routes/Menu';
import Orders from './routes/Orders';
import Payment from './routes/Payment';
import Footer from './componentsUi/Footer';
import Receipt from './components/Receipt';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route caseSensitive={false} path='/home' element={<Home/>}/>

          
          <Route caseSensitive={false} path='/menu' element={<Menu/>}/>

        
          <Route caseSensitive={false} path='/order' element={<Orders/>}/>

          <Route caseSensitive={false} path='/payment' element={<Payment/>}/>
          <Route caseSensitive={false} path='/receipt' element={<Receipt/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
