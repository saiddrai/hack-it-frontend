import "./topnav.scss";

import dots from "./dots.svg"
import startop from "./startop.svg"
const TopNav = () => {
    return ( <div className="topnav">
    <button> <img src={dots} alt="" />  </button>
    <button><img src={startop} alt="" /></button>
</div> );
}
 
export default TopNav;