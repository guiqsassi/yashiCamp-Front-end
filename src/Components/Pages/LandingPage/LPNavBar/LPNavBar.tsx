import React from "react";
import "./LPNavBar.css"
import { Link } from "react-router-dom";
import logo from "../../../../Images/logo.png"
const LPNavBar = () => {
    return ( 
        <header className="LPNavHeader">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="LPNav">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        <Link className="Link" to={"/login"}>
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <button className="Cadastrar">
                            <Link className="Link" to={"/register"}>
                            Cadastrar
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default LPNavBar;