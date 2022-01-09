require('dotenv').config();
const commands = require('./functions/commandFunctions.js');
const tmi = require('tmi.js');


const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.USER_NAME,
		password: process.env.USER_TOKEN
	},
	channels: [ 'thegospelofweeb' ]
});

client.connect().then(() => {
	console.log('connected')
}) .catch(err => {
	console.log(err);
});


//commands
 client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;
	if(tags.username === process.env.USER_NAME) return;

	const randomNum = commands.cock(); 
	const socialMediaLinks = commands.socialMedia();
	const commandDisplay = commands.commandList();
	
	

	if(message.toLowerCase() === '!cockcheck') {
		
		client.say(channel, `@${tags.username}, ${randomNum} inches`);
		console.log(randomNum);
	}

	else if(message.toLowerCase() === '!socialmedia') {
		
		client.say(channel, `@${tags.username}, ${socialMediaLinks}`);
		console.log(socialMediaLinks);
		
	}
	
	else if(message.toLowerCase() === '!lurk') {
		
		client.say(channel, `@thegospelofweeb, @${tags.username} is lurking`);

	}

	else if(message.toLowerCase() === '!commands') {
		
		client.say(channel, `@${tags.username}, ${commandDisplay}`);
		console.log(commandDisplay);
		
	}

	else if(message.toLowerCase() === '!song') {
		const currentPlayingSong = commands.getCoke().then((data)=> { 
			client.say(channel, `@${tags.username}, ${data}`)
			//console.log(":)", data)
		});

		//client.say(channel, `@${tags.username}, ${currentPlayingSong}`);
		//console.log("Coming from here", currentPlayingSong);
		
	}

});

