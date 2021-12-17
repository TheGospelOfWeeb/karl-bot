require('dotenv').config();
const commands = require('./commandFunctions.js');

const tmi = require('tmi.js');

//const regexp = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.USER_NAME,
		password: process.env.USER_TOKEN
	},
	channels: [ 'thegospelofweeb' ]
});

client.connect();


client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;
	const randomNum = commands.cock(); 
	const socialMediaLinks = commands.socialMedia();

	if(message.toLowerCase() === '!cockcheck') {
		
		client.say(channel, `@${tags.username}, ${randomNum} inches`);
		console.log(randomNum);
	}

	else if(message.toLowerCase() === '!socialmedia') {
		
		client.say(channel, `@${tags.username}, ${socialMediaLinks}`);
		console.log(socialMediaLinks);
	}
	
}); 