import "./LPHome.css"
import { Link } from "react-router-dom";
const LPHome = () => {
    return ( 
        <section className="LPHome" >
            <div className="content">
                <div className="LPtext">
                    <h1>Acampe com o máximo de conforto!!</h1>
                    <p>Descubra conosco o seu local ideal para acampar!!</p>
                    <div className="CriarConta">
                    <Link className="button" to={"/register"}> Cadastre-se  </Link>
                </div>
                </div>
            </div>
        </section>
     );
}
 
export default LPHome;