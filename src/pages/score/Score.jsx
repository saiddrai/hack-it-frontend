import Navbar from "../../components/Navbar";


const Score = () => {
    let score;
    let points = [3,5,6];
   let  achievements =    points.map(x=> {
        return `You did a great job today !!! you win ${x} points `
    });
    let xScore = points.reduce( (score,x)=> score+x );
    


    return ( <div>
        <div className="top">
            <button></button>
            <button></button>
        </div>
        <h1>Wanna check your achivements </h1>
        <button>{xScore} Points </button>
        <div className="list">
            {achievements.map( x => <div className="achievment" > {x} </div> )}
        </div>
        <Navbar />
            </div> );
}
 
export default Score;