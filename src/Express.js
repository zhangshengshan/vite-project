import express from "express";

import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/getAccessToken', async (req, res) => {
    console.log(req.body)
    try {
        const {code, client_id, client_secret} = req.body
        console.log("code = ", code)
        const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: client_id,
            client_secret: client_secret,
            code: code,
        }, {
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(response.data.access_token)
        res.json({ accessToken: response.data.access_token });
    } catch (error) {
        console.error('Error fetching access token', error);
        res.status(500).json({ error: 'Error fetching access token', body: req.body });
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));