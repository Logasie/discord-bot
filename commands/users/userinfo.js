const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    type: 'USER',
    category: 'users',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'userinfo',
    examples: ['Cliquer droit sur un membre -> <Application> -> <userinfo>'],
    async runInteraction(client, interaction){
        const member = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new MessageEmbed()
            .setColor('BLURPLE')
            .setAuthor({ name: `${member.user.tag} (${member.id})`,
             iconURL: member.user.bot ? 'https://cdn.discordapp.com/attachments/991297050052395040/991439146528804994/9435-blurple-bot.png' : 'https://cdn.discordapp.com/attachments/991297050052395040/991439179475062864/9562-blurple-verified.png'})
            .setImage(member.user.displayAvatarURL())
            .addFields(
                {name: 'Nom', value: `${member.displayName}`, inline: true},
                {name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true},
                {name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true},
                {name: 'Rôles', value: `${member.roles.cache.map(role => role).join(' | ').replace('@everyone', ' ')}`, inline: true},
                {name: 'A créé son compte le:', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f>
                (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)`, inline: true},
                {name: 'A rejoint le serveur le:', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f>
                (${parseInt(member.joinedTimestamp / 1000)}:R>)`, inline: true},
            )
        interaction.reply({ embeds: [embed], ephemeral: true});
    },
};