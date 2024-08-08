import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLoginAction, logout as storeLogoutAction } from '../context/auth.slice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { authService } from '../services/authService'


function Login() {
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
                navigate("/content")
            }
            else {
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
        </>
    )
}

export default Login