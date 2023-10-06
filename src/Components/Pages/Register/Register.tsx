import "./Register.css"
import Input from "../../Input/Input";
import { useState } from "react";
import axios from "axios";
import qs from "qs";
import illustration from "../../../Images/campingUndraw.png"
import ButtonForms from "../../ButtonForms/ButtonForms";
const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const [confimPassword, setConfirmPassword] = useState("")    


    const Register = async ()=>{
        try {
           await axios.post("http://192.168.15.79:8080/user/register", qs.stringify({
                username: username,
                email: email,
                password: password
            }), ).then((res)=> console.log(res)
            )
        } catch (error) {
            console.log(error);
            
        }
    }
    return ( 
        <section className="Register">
            <div className="registerForm">
                <h1>Cadastre-se</h1>
                <Input name={"Username"} placeholder="username" setValue={setUsername} value={username}></Input>
                <Input name={"Email"} placeholder="email" setValue={setEmail} value={email}></Input>
                <Input name={"Password"} placeholder="password" setValue={setPassword} value={password} password="true"></Input>
                <Input name={"Confirm Password"} placeholder="password" setValue={setConfirmPassword} value={confimPassword} password="true"></Input>
                <div className="buttonRegisterForm">
                    <ButtonForms name="Entrar" onClick={Register}></ButtonForms>
                </div>
            </div>
        </section>
     );
}
 
export default Register;