import LPNavBar from "./LPNavBar/LPNavBar";
import LPHome from "./LPHome/LPHome";
import background from "../../../Images/camping.jpg"
const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <LPNavBar></LPNavBar>

            <LPHome></LPHome>
        </div>
     );
}
 
export default LandingPage;