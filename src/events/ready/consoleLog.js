const { ActivityType } = require('discord.js')

module.exports = (c, client) => {
    console.log(`${c.user.username} | Status : Connected`);
    c.user.setStatus('dnd')
    c.user.setPresence({
        activities : [{
            name : 'Github',
            type : ActivityType.Playing,
        }]
    })
};