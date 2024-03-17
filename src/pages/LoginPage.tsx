import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Notification, Input, Button } from '@douyinfe/semi-ui';

const LoginPage = ({ setIsLoggedIn, onLoginSuccess }) => {
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
    <form onSubmit={handleSubmit}>
      <Input
        label="Username:"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        label="Password:"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button htmlType="submit" type="primary">Log in</Button>
    </form>
  );
};

export default LoginPage;