import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { login, logout } from '../context/auth.slice';
import axios from 'axios'

function Landing() {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [users, setUsers] = useState();

    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true);
                setErr(false);

                const res = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/12');
                // const res = await axios.get('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5')
                const data = res.data.data.data
                console.log(data);
                if (data) {
                    setUsers(data);
                    dispatch(login({ userData: data }))
                } else {
                    dispatch(logout())
                }

            }
            catch (error) {
                console.error("There was an error : ", error);
                setErr(true);
            }
            finally {
                setLoading(false);
            }
        })()
    }, [dispatch, setLoading])


    // Conditional rednering of Component 
    return loading ? (
        <>
            <h1>Loading. Please Wait...</h1>
        </>
    ) : (
        <>
            <h1>Simple Login Practice</h1>

            <br />

            {/* <h2>You are logged in now !</h2> */}

            <br />

            <h3>User Info : </h3>

            <br />

            {
                users.map((user) => (
                    <div key={user.id}>
                        <label htmlFor="gender">Gender : </label> <span id="gender">{user.gender}</span> <br />
                        <label htmlFor="title">Name : </label> <span id="title">{user.name.title} {user.name.first} {user.name.last}</span> <br />
                        <label htmlFor="email">Email : </label> <span id="email">{user.email}</span> <br />
                        <label htmlFor="phone">Phone Number : </label> <span id="phone">{user.phone}</span> <br />
                        <br />
                        <br />
                    </div>
                ))
            }

            <br />
            <br />
            <br />

            <button> Logout </button>
        </>
    )
}

export default Landing