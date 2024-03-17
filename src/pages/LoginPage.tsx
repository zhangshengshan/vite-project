import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Notification } from '@douyinfe/semi-ui';


const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        Notification.open({
            title: 'Hi, Bytedance',
            content: 'ies dance dance dance',
            duration: 3,
        })
        event.preventDefault();
        // 这里你可以添加你的登录逻辑
        // 如果登录成功，你可以将用户的登录状态保存到一个状态变量中
        // 然后重定向到主页面
        navigate('/home');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Log in"/>
        </form>
    );
};

export default LoginPage;