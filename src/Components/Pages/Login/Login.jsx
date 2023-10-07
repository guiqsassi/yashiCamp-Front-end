import "./Login.css"
import Input from "../../Input/Input";
import { useState } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import illustration from "../../../Images/campingUndraw.png"
import ButtonForms from "../../ButtonForms/ButtonForms";
const Login = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const [confimPassword, setConfirmPassword] = useState("")    
    const dispach = useDispatch()
    const user = useSelector(state => state.user)
    console.log(user);
    const navigate = useNavigate()
    const Login = async ()=>{
        try {
           await axios.post("http://192.168.15.79:8080/user/login", qs.stringify({
                email: email,
                password: password
            }), ).then((res)=> 
            dispach({
                type: "logged",
                payload: {token: res.data.token, name: res.data.name}
            })
            )
            navigate("/home")
        } catch (error) {
            console.log(error);
            
        }
    }
    return ( 
        <section className="Login">
            <div className="loginForm">
                <h1>Login</h1>
                <Input name={"Email"} placeholder="email" setValue={setEmail} value={email}></Input>
                <Input name={"Password"} placeholder="password" setValue={setPassword} value={password} password="true"></Input>
                <div className="buttonRegisterForm">
                    <ButtonForms name="Entrar" onClick={Login}></ButtonForms>
                </div>
            </div>
        </section>
     );
}
 
export default Login;