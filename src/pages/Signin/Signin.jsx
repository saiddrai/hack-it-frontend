import { useState } from 'react';
import back from '../../back.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.scss';

const Signin = () => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const navigate = useNavigate();
    const handleClick = () => {};

    const submitLogin = () => {
        console.log(formInputs);
        axios
            .post(
                `${process.env.REACT_APP_BASE_URL}/api/user/register`,
                formInputs
            )
            .then(() => navigate('/Choices'))
            .catch((err) => console.log(err));
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
            <button onClick={handleClick} className="signin">
                Sign in
            </button>
        </div>
    );
};

export default Signin;
