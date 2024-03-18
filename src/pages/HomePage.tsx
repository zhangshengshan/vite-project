// src/pages/HomePage.tsx
import {useEffect} from 'react';
import axios from 'axios';
import {Notification} from "@douyinfe/semi-ui";

const HomePage = ({setIsLoggedIn, setShowLoginPopup}) => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            const getAccessToken = async () => {
                try {
                    const response = await axios.post('https://github.com/login/oauth/access_token', {
                        client_id: 'Iv1.4559ffd03e590dee',
                        client_secret: '9b96cd405e12c7a0c2f833705362097b159f927a',
                        code: code,
                    });

                    if (response.data.access_token) {
                        setIsLoggedIn(true);
                        setShowLoginPopup(false);
                    }
                } catch (error) {
                    Notification.error({
                        title: 'Error',
                        content: 'Failed to get access token',
                    });
                }
            };
            setIsLoggedIn(true);
            setShowLoginPopup(false);
            getAccessToken();
        }
    }, []);

    // ...其他代码...
};

export default HomePage;