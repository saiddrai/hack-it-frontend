import girl from "./female.png"
import boy from "./male.png"

import "./HiAlex.scss"
import TopNav from "../../components/TopNav";
const HiAlex = () => {
    return ( <div className="hialex" >
        <TopNav />
        <h1>Hey Alex</h1>
        <p>How Are you today?</p>
        <div className="quote">


                <div className="activity">
                    <div className="text">
                        <h3>Suggest me an activity </h3>
                        <p>You’re stressed you don’t know what to do try this </p>
                    </div>
                     <img src={girl} alt="" />
                </div>
                <div className="activity">
                    <div className="text">
                        <h3>My Journals </h3>
                        <p>You’re not feeling good, try this  </p>
                    </div>
                     <img src={boy} alt="" />
                </div>
        </div>
    </div> );
}
 
export default HiAlex;