 require('dotenv').config();
const axios = require('axios');


const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const getToken = async () => { await axios('https://accounts.spotify.com/api/token', {
    headers: {
        'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded' 
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
})
.then(tokenResponse => {
     axios('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET', 
        headers: {'Content-Type': application/json,
                  'Authorization': 'Bearer ' + tokenResponse.data.access_token}
    });
    return response.data
    })
} 

module.exports = {
    getToken
};