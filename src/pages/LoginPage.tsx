import {useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import {Notification, Input, Button} from '@douyinfe/semi-ui';
import styles from './LoginPage.module.scss';
import Label from "@douyinfe/semi-ui/lib/es/form/label";

const LoginPage = ({setIsLoggedIn, onLoginSuccess}) => {
    // const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        const loginTimestamp = localStorage.getItem('loginTimestamp');
        if (loginTimestamp && Date.now() - Number(loginTimestamp) <  10 * 1000) {
            setIsLoggedIn(true);
            onLoginSuccess();
        }
    }, []);

    const handleSubmit = (event) => {
        Notification.open({
            title: 'Hi, Bytedance',
            content: 'username' + username + "    " + 'password' + password,
            duration: 3,
        })
        event.preventDefault();
        setIsLoggedIn(true);
        onLoginSuccess();

        localStorage.setItem('loginTimestamp', Date.now().toString());
    };

    const handleGithubLogin = () => {
        const clientId = 'Iv1.4559ffd03e590dee';
        const redirectUri = encodeURIComponent('http://localhost:5173/home');
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
        // setIsLoggedIn(true);
        // onLoginSuccess();
    };

    return (
        <div className={styles.loginPage}>

            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                    <Label>USERNAME:</Label>
                    <Input
                        value={username}
                        onChange={content => setUsername(content)}
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                    <Label>PASSWORD:</Label>
                    <Input
                        type="password"
                        value={password}
                        onChange={content => setPassword(content)}
                    />
                </div>
                <Button htmlType="submit" type="primary">Log in</Button>
                <Button onClick={handleGithubLogin} type="primary">Log in with GitHub</Button>
            </form>
        </div>
    );
};

export default LoginPage;