// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Detailspage from './components/detailspage/Detailspage';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/detailspage' element={<Detailspage/>}/>
     </Routes>
    </div>
  );
}

export default App;
