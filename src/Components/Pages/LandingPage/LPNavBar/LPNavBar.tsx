import React from "react";
import "./LPNavBar.css"
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
                        Entrar
                    </li>
                    <li>
                        <button className="Cadastrar">
                            Cadastrar
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default LPNavBar;