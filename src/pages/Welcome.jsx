import photo from "./welcomepic.png"

const Welcome = () => {
    return ( 
        <div className="body">
            <img src={photo}/>
            <h1> Your Mental Health Matters for us  </h1>
            <p> Feel better and find the healp you need here  </p>
        </div>
     );
}
 
export default Welcome;