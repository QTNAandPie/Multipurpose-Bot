module.exports = {
    run : async ({ interaction, client }) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(
            `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
        )
    },
    data : {
        name : 'ping',
        description : "Replies with the bot ping!",
    }
}