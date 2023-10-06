import {Routes, BrowserRouter, Route} from "react-router-dom"
import './App.css';
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
