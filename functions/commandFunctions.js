const axios = require('axios');
require('dotenv').config();

const currentPlayingSongFoobar2000 = () => {
  return new Promise((resolve, reject) => {
    axios.get(process.env.FOOBAR_API)
    .then(response => {
      console.log("cock", response);
      resolve (`${(response.data.player.activeItem.columns[0])} - ${(response.data.player.activeItem.columns[1])}`);
      
    })
    .catch(error => {
      reject (error)
      console.log(error);
    });
  })
  }
  async function getCoke(){
    try {
      const data = await currentPlayingSongFoobar2000();
      return data;
    } catch (error) {
      console.log(error)
    }
    
  }

const cock = function rollDiceCock() {
    const dice = 12;

    return Math.floor(Math.random() * dice) + 1;
};

const socialMedia = function displaySocialMedia() {
    let socialMediaArr = ["Twitter: https://twitter.com/thegospelofweeb", 
                            "Instagram: https://www.instagram.com/thegospelofweeb", 
                            "DesignIG: https://www.instagram.com/thegospelofweeb.designs", 
                            "Mastodon: https://koyu.space/@thegospelofweeb"];

    return (socialMediaArr.join(" "));
}

const commandList = function displaycommands() {
    let commandList = [
        '!lurk',
        '!cockcheck',
        '!socialmedia',
        '!song'
    ]

    return (commandList.join(" "));
}



module.exports = {
    cock,
    socialMedia,
    commandList,
    currentPlayingSongFoobar2000,
    getCoke
};