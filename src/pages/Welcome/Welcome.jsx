import './welcome.scss';
import photo from './welcomepic.png';
import vector from './getstarted.svg';
import { useNavigate } from 'react-router-dom';
const Welcome = ({ nav }) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/Register');
        console.log('ddd');
    };
    nav();
    return (
        <div className="body">
            <img src={photo} className="hero" />
            <h1> Your Mental Health Matters for us </h1>
            <p> Feel better and find the healp you need here </p>
            <button onClick={clickHandler}>
                Get Started <img className="vector" src={vector} alt="" />
            </button>
        </div>
    );
};

export default Welcome;
