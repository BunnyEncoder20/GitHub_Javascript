import axios from "axios";

const authService = ({username, password}) => {
    const correct_username = 'admin';
    const correct_password = 'admin123';
    
    console.log("Authenticating Credentials...");
    setTimeout(() => {

        ; (async () => {
            if (username === correct_username && password === correct_password) {
                const res = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/12')
                console.log(res.data.data);
            }
            else {
                console.log("User not found");
                return null;
            }
        })()

    }, 3000)

}

export default authService