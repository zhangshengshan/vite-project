import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Notification, Input, Button} from '@douyinfe/semi-ui';
import styles from './LoginPage.module.scss';
import Label from "@douyinfe/semi-ui/lib/es/form/label";

const LoginPage = ({setIsLoggedIn, onLoginSuccess}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        Notification.open({
            title: 'Hi, Bytedance',
            content: 'dance dance dance',
            duration: 3,
        })
        event.preventDefault();
        setIsLoggedIn(true);
        onLoginSuccess();
        navigate('/home');
    };

    return (
        <div className={styles.loginPage}>

            <form onSubmit={handleSubmit}>
                <Label>USERNAME:</Label>
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <Label>PASSWORD:</Label>
                <Input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button htmlType="submit" type="primary">Log in</Button>
            </form>
        </div>
    );
};

export default LoginPage;