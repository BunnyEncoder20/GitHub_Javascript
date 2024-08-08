import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout as storeLogoutAction } from '../context/auth.slice';


function ContentComponent() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [user, setUser] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setLoading(false);
    }, [setLoading]);

    const logoutHandler = () => {
        dispatch(storeLogoutAction());
        nav('/');
    }

    // Conditional rednering of Component 
    return loading ? (
        <>
            <h1>Loading. Please Wait...</h1>
        </>
    ) : (
        <>
            <br />

            <h3>User Info : </h3>

            <br />

            <div >
                {/* <label htmlFor="gender">Gender : </label> <span id="gender">{user.gender}</span> <br />
                <label htmlFor="title">Name : </label> <span id="title">{user.name.title} {user.name.first} {user.name.last}</span> <br />
                <label htmlFor="email">Email : </label> <span id="email">{user.email}</span> <br />
                <label htmlFor="phone">Phone Number : </label> <span id="phone">{user.phone}</span> <br /> */}
                <br />
                <br />
            </div>

            <br />
            <br />
            <br />

            <button onClick={()=>{logoutHandler}}> Logout </button>
        </>
    )
}

export default ContentComponent