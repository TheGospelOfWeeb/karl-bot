const axios = require('axios');
/*const https = require('https');

const currentPlayingSongFoobar2000 = async function getCurrentPlayingSong() {
  await https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
    return ((data).explanation);
  });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}
*/

/*const currentPlayingSongFoobar2000 = async () => {

await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    return(response.data.explanation);
    //console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}
*/
const currentPlayingSongFoobar2000 = async () => {
  try {
    let resp = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    console.log(resp.data.explanation);
    return resp.data.explanation;
  } catch (err) {
    console.error(err);
  }
};


const cock = function rollDiceCock() {
    const dice = 12;

    return Math.floor(Math.random() * dice) + 1;
};

const socialMedia = function displaySocialMedia() {
    let socialMediaArr = ["Twitter: https://twitter.com/thegospelofweeb", 
                            "Instagram: https://www.instagram.com/thegospelofweeb", 
                            "DesignIG: https://www.instagram.com/thegospelofweeb.designs", 
                            "Mastodon: https://koyu.space/@thegospelofweeb"];
    
    //for (let i = 0; i < socialMediaArr.length; i++);

    return (socialMediaArr.join(" "));
}

const commandList = function displaycommands() {
    let commandList = [
        '!lurk',
        '!cockcheck',
        '!socialmedia'
    ]

    //for(let i = 0; i < commandList.length; i++);

    return (commandList.join(" "));
}



module.exports = {
    cock,
    socialMedia,
    commandList,
    currentPlayingSongFoobar2000
};