import stats1 from "./stats1.png";
import stat50 from "./stat2.png";
import stat120 from "./stat120.png";
import state3 from "./states3.png"
import "./Stats.scss"
const Stats = () => {
    return ( 
        <div className="" >
            <div className="retour">
                <button> retour</button>
            </div>
            <h2>Hey Alex, check your health statistics today  </h2>
            <img src={stats1} alt="" />
            <div className="stats2">
                <div>   
                    <img src={stat50} alt="" />
                    <p>Hydration</p>
                </div>
                <div>
                    <img src={stat120} alt="" />
                    <p>Heart beats</p>
                </div>
            </div>
                <img src={state3} alt="" />
                <p>Sleep</p>
        </div>

     );
}
 
export default Stats;