import Top from "../../../components/Top";
import "./ChoicePage1.scss"
import book from "./book.svg"
import music from "./music.svg"
import restau from "./restau.svg"
import { useNavigate } from "react-router-dom";
const ChoicePage1 = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/hi")
    }
    return ( <div className="choicePage">
        <Top/>

        <h1>Choose what do you prefere</h1>
        <div className="choices">
            <button className="element">
                <div className="image"> </div>
                <p>Read a book</p>
            </button>
            <div className="element">
                <div className="image"> <img src={restau} alt="" /> </div>
                <p>Read a book</p>
            </div>
            <div className="element">
                <div className="image"><img src={book} alt="" /> </div>
                <p>Read a book</p>
            </div>
            <div className="element">
                <div className="image"><img src={music} alt="" /> </div>
                <p>Read a book</p>
            </div>
        </div>
            <div className="skip" >
            <button onClick={handleClick} >Skip</button>
            </div>
    </div> );
}
 
export default ChoicePage1;