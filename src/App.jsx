import {Routes, BrowserRouter, Route} from "react-router-dom"
import './App.css';
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import {useSelector} from "react-redux"
function App() {
  const userInfo = useSelector(state=> state.user)

  return (
    
    <BrowserRouter>
        {userInfo.logged? 
              <Routes>

                <Route path="/home" element={<Home/>}/>

                </Routes>

            :
            <Routes>

         <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      }
     

    </BrowserRouter>
  );
}

export default App;
