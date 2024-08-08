import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLoginAction, logout as storeLogoutAction } from '../context/auth.slice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../services/authService'


function LoginComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const login = async (data) => {
        setLoading(true)
        setError('')

        try {
            const session = await authService(data);
            if (session) {
                dispatch(storeLoginAction({userData:session}));
                navigate('/content');
            }
            else {
                setError("Invalid username or password");
                dispatch(storeLogoutAction());
            }
        }
        catch (e) {
            setError(e)
            console.error(e);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Simple Login Practice</h1>
            <h2>Login Page</h2>
            <p>Enter your Credentials</p>

            {error && <p>ERROR : {error}</p>}

            <form onSubmit={handleSubmit(login)}>
                <input type="text" name="username" id="username" placeholder='Username'
                {...register(email,{
                    required : true,
                    pattern : {
                        value : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message : "Enter a valid email address"
                    }
                })}/>

                <br />

                <input type="password" name="password" id="password" placeholder='password'
                {...register(password, {
                    required : true
                })}/>

                <br />

                <button type="submit">Sign in</button>
            </form>
        </>
    )
}

export default LoginComponent