import "./suggestions.scss"
import Navbar from "../../components/Navbar";
import suggestions from "./suggestions.png"
import Top from "../../components/Top";

const Suggestions = () => {

    return ( 
        <div className="suggest" >
            <Top/>
            <img className="test" src={suggestions} alt="" />
            <h4>Based on your health data today we suggest you </h4>
            <div className="card" >if you have time you can do this </div>
            <p>OR</p>
            <div className="card">And if you have a limited time it’s okay you can do this  </div>
        </div>
     );
}
 
export default Suggestions;