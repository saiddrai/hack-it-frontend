const Signin = () => {
    return ( 
        <div>
            <h2>Getting started</h2>
            <p>Create account to continue </p>
            <div style={{display:"flex",flexDirection:"column"}} className="inputs">
            <input type="User name" />
            <input type="email" />
            <input type="password" />
            <input type="password confirmation" />
            </div>
            <button>Sign in</button>
            <h4>Or</h4>
            <div style={{display:"flex",flexDirection:"row" }}>
                <p>Apple</p>
                <p>Google</p>
                <p>Facebook</p>
            </div>
        </div>
     );
}
 
export default Signin;