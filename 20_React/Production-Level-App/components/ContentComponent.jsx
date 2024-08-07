import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { login, logout } from '../context/auth.slice';
import axios from 'axios'


function Landing() {

    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setLoading(false);
    }, [setLoading]);

    // Conditional rednering of Component 
    return loading ? (
        <>
            <h1>Loading. Please Wait...</h1>
        </>
    ) : (
        <>
            <h1>Simple Login Practice</h1>

            <br />

            <h2>You are logged in now !</h2>

            <br />

            <h3>User Info : </h3>

            <br />

            <div >
                <label htmlFor="gender">Gender : </label> <span id="gender">{user.gender}</span> <br />
                <label htmlFor="title">Name : </label> <span id="title">{user.name.title} {user.name.first} {user.name.last}</span> <br />
                <label htmlFor="email">Email : </label> <span id="email">{user.email}</span> <br />
                <label htmlFor="phone">Phone Number : </label> <span id="phone">{user.phone}</span> <br />
                <br />
                <br />
            </div>

            <br />
            <br />
            <br />

            <button> Logout </button>
        </>
    )
}

export default Landing