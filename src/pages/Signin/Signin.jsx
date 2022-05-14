import "./signin.scss"
import back from "../../back.svg";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/Choices");
    }
    return ( 
        <div className="page" >
            <div className="top">
                <button> <img src={back} alt="" /> </button>
            </div>
            <div className="getting" >
            <h2>Getting started</h2>
            <p>Create account to continue </p>
            </div>
            <div style={{display:"flex",flexDirection:"column"}} className="inputs">
            <input type="User name" placeholder="user name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password confirmation" placeholder="Password confirmation"/>
            </div>
            <button onClick={handleClick} className="signin" >Sign in</button>

        </div>
     );
}
 
export default Signin;