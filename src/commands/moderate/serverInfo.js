const { EmbedBuilder } = require('discord.js');

module.exports = {

    run : async ({ interaction }) => {
        if (!interaction.inGuild()) {
            interaction.reply({
                content: "Only use inside the server",
                ephemeral: true,
            });
            return;
        }

        const { guild } = interaction;

        const serverInfoEmbed = new EmbedBuilder({
            author: { name: guild.name, iconURL: guild.iconURL({ size: 256 }) },

            fields: [
                { name: 'Owner', value: (await guild.fetchOwner()).user.username },
                { name: 'Text Channels', value: guild.channels.cache.filter((c) => c.type === 0).toJSON().length, inline: true },
                { name: 'Voice Channels', value: guild.channels.cache.filter((c) => c.type === 2).toJSON().length, inline: true },
                { name: 'Category Channels', value: guild.channels.cache.filter((c) => c.type === 4).toJSON().length, inline: true },
                { name: 'Members', value: guild.memberCount }
            ]
        })
            .setColor(0xFFC0ED)

        interaction.reply({ embeds: [serverInfoEmbed] })
    },

    data :{
        name: 'serverinfo',
        description : "See The server info",
    }
}