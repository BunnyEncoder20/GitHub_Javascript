import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout as storeLogoutAction } from '../context/auth.slice';


function ContentComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    const userStatus = useSelector(state => state.auth.status);
    const userData = useSelector(state => state.auth.userData);

    

    useEffect(() => {
        setLoading(true);
        
        if (userStatus){
            console.log("Loading Data");
            setTimeout(() => {
                setUser(userData)
                setLoading(false);
            }, 1500);
        } 
        else {
            console.error("User is not authenticated. Please Login");
            navigate('/');
        }
    }, [userData, userStatus, setLoading]);

    const logoutHandler = () => {
        console.log("Logout Clicked");
        dispatch(storeLogoutAction());
        navigate('/');
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

            <button onClick={logoutHandler}> Logout </button>
        </>
    )
}

export default ContentComponent