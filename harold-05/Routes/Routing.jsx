
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from '../components/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
function Routing() {
  return (
      <Router>
        <Routes>
              <Route path="/Home" element={<Home/>}/> 
              <Route path="/Register" element={<Register/>}/>
              <Route path="/" element={<Login/>}/>
              
        </Routes>
      </Router>
  );
}
export default Routing

