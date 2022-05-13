import Navbar from "../../components/Navbar";
import suggestions from "./suggestions.png"

const Suggestions = () => {
    return ( 
        <div>
            <img src={suggestions} alt="" />
            <h2>Based on your health data today we suggest you </h2>
            <div>if you have time you can do this </div>
            <div>And if you have a limited time it’s okay you can do this  </div>
            <Navbar/>
        </div>
     );
}
 
export default Suggestions;