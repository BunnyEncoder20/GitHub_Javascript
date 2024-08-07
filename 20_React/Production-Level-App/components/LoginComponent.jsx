import {useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../context/auth.slice'
import { useDispatch } from 'react-redux'


function Login() {
    return (
        <>
            <h1>Simple Login Practice</h1>
            <h3>This should be the login page</h3>
        </>
    )
}

export default Login