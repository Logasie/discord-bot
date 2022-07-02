const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Affiche le temps d\'attente du client et de l\'API.',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'ping',
    examples: ['ping'],
    async runInteraction(client, interaction){
        const tryPong = await interaction.reply({ content: "On n'essaye de pong... un instant !", fetchReply: true});

        const embed = new MessageEmbed()
            .setColor("AQUA")
            .setTitle('🏓 PONG')
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
            .addFields(
                {name: "Latence", value: `\`${client.ws.ping}ms\``, inline: true},
                {name: "Uptime", value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true}
            )
            .setTimestamp()
        interaction.editReply({content: ' ', embeds: [embed]});
    }
};