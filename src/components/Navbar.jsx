import "./navbar.scss"
import home from "./home.png"
import star from "./star.svg"
import profile from "./profile-user.svg"
import heartbeat from "./heart-beat.svg";

const Navbar = (props) => {
    return ( <div className="navbar">
        <button> <img src={home} alt="" /> </button>
        <button><img src={heartbeat} alt="" /></button>
        <button><img src={star} alt="" /></button>
        <button> <img src={profile} alt="" /></button>
    </div> );
}
 
export default Navbar;