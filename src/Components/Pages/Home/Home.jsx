import {useSelector} from "react-redux"

const Home = () => {

    const userInfo = useSelector(state=> state.user)
    return (
    <section className="home">
        <h1> Bem vindo {userInfo.name} </h1>
    </section> 
    
    );
}
 
export default Home;