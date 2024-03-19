import React, {useEffect} from 'react';
import axios from 'axios';

const LoginPage = ({onLoginSuccess}) => {
    useEffect(() => {
        const getAccessToken = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (code) {
                try {
                    const response = await axios.post('http://localhost:3000/getAccessToken', {
                        client_id: 'Iv1.4559ffd03e590dee',
                        client_secret: '9b96cd405e12c7a0c2f833705362097b159f927a',
                        code: code,
                    });

                    if (response.data.accessToken) {
                        console.log("response.data.access_token");
                        localStorage.setItem('accessToken', response.data.accessToken);
                        onLoginSuccess();
                    } else {
                        console.log("response.data.access_token is null");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        };

        getAccessToken();
    }, [onLoginSuccess]);

    const handleGithubLogin = () => {
        const clientId = 'Iv1.4559ffd03e590dee';
        const redirectUri = encodeURIComponent('http://localhost:5173');
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    };

    return (
        <div>
            <button onClick={handleGithubLogin}>Log in with GitHub</button>
            {/* Other components */}
        </div>
    );
};

export default LoginPage;