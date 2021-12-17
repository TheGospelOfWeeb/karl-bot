const cock = function rollDiceCock() {
    const dice = 12;

    return Math.floor(Math.random() * dice) + 1;
};

const socialMedia = function displaySocialMedia() {
    let socialMediaArr = ["Twitter: https://twitter.com/thegospelofweeb", 
                            "Instagram: https://www.instagram.com/thegospelofweeb", 
                            "DesignIG: https://www.instagram.com/thegospelofweeb.designs", 
                            "Mastodon: https://koyu.space/@thegospelofweeb"];
    
    for (let i = 0; i < socialMediaArr.length; i++)

    return (socialMediaArr.join(" "));
}

module.exports = {
    cock,
    socialMedia
};