require('dotenv/config');

const { Client, GatewayIntentBits } = require('discord.js');
const { CommandKit } = require('commandkit');
const path = require('path');

const client = new Client({
    intents: [        
        GatewayIntentBits.Guilds,        
        GatewayIntentBits.GuildMessages,        
        GatewayIntentBits.MessageContent    
    ],
});

new CommandKit({
    client,
    eventsPath: path.join(__dirname, 'events'),
});

client.login(process.env.TOKEN);