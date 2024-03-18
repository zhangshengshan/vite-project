import express from "express";

import axios from "axios";

const app = express();

app.get('/getAccessToken', async (req, res) => {
    const code = req.query.code;
    try {
        const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: 'your_client_id',
            client_secret: 'your_client_secret',
            code: code,
        }, {
            headers: {
                'Accept': 'application/json'
            }
        });
        res.json({ accessToken: response.data.access_token });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching access token' });
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));