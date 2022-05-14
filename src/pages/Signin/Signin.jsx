import { useState } from 'react';
import axios from 'axios';
import './signin.scss';

const Signin = () => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const submitLogin = () => {
        console.log(formInputs);
        axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/user/register`,
            formInputs
        );
    };
    return (
        <div>
            <h2>Getting started</h2>
            <p>Create account to continue </p>
            <div
                style={{ display: 'flex', flexDirection: 'column' }}
                className="inputs"
            >
                <input
                    type="User name"
                    value={formInputs.name}
                    onChange={(e) =>
                        setFormInputs((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
                <input
                    type="email"
                    value={formInputs.email}
                    onChange={(e) =>
                        setFormInputs((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                />
                <input
                    type="password"
                    value={formInputs.password}
                    onChange={(e) =>
                        setFormInputs((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                />
                <input
                    type="password confirmation"
                    value={formInputs.password2}
                    onChange={(e) =>
                        setFormInputs((prev) => ({
                            ...prev,
                            password2: e.target.value,
                        }))
                    }
                />
            </div>
            <button onClick={submitLogin}>Sign in</button>
            <h4>Or</h4>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>Apple</p>
                <p>Google</p>
                <p>Facebook</p>
            </div>
        </div>
    );
};

export default Signin;
