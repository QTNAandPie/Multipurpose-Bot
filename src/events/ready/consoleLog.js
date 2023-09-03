const { ActivityType } = require('discord.js')

module.exports = (c, client) => {
    let status = [
        {
            name : 'Github',
            type : ActivityType.Watching
        },
        {
            name : 'Javascript Edition',
            type : ActivityType.Playing
        },
    ];

    console.log(`${c.user.username} | Status : Connected`);
    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        c.user.setActivity(status[random]);
    }, 15000)
};