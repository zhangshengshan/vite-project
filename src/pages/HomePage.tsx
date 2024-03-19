// src/pages/HomePage.tsx

import {Button, Notification} from "@douyinfe/semi-ui";
import axios from "axios";

const HomePage = () => {


    const fetchUserInfo = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            try {
                const response = await axios.get('https://api.github.com/user', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log(response.data);

                Notification.open(
                    {
                        title: 'User Info',
                        content: (
                            <div>
                                <p>Login: {response.data.login}</p>
                                <p>Id: {response.data.id}</p>
                                <p>Node Id: {response.data.node_id}</p>
                                <p>Avatar Url: {response.data.avatar_url}</p>
                            </div>
                        ),
                    }
                )

            } catch (error) {
                console.error(error);
            }
        }
    };


    return (
        <div>
            <h1>Welcome to our website!</h1>
            <p>We're glad to see you here.</p>
            <Button type="primary" onClick={fetchUserInfo}>Fetch User Info</Button>
        </div>
    );
};

export default HomePage;