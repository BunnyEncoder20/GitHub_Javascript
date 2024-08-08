import axios from "axios";

const authService = ({email, password}) => {
    const correct_email = 'admin@gmail.com';
    const correct_password = 'admin123';
    
    return new Promise((resolve, reject) => {
        console.log("Authenticating Credentials...");
        ; (async () => {
            try {
                if (email === correct_email && password === correct_password) {
                    const res = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/12')
                    resolve(res.data.data);
                }
                else {
                    console.log("User not found");
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        })()
    })

}

export default authService