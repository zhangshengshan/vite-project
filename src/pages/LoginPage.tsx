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
        if (loginTimestamp && Date.now() - Number(loginTimestamp) < 24 * 60 * 60 * 1000) {
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
            </form>
        </div>
    );
};

export default LoginPage;