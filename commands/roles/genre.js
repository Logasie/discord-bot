const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: '🧢',
                    description: 'Garçon',
                    value: '991701044306399332'
                },
                {
                    label: '👠',
                    description: 'Fille',
                    value: '991701044834873417'
                },
                {
                    label: '🧳',
                    description: 'Autre',
                    value: '991702406842814475'
                },
            ])
    )
    const embed = new MessageEmbed()
            .setColor("#360b35")
            .addFields(
                {name: "Garçon", value: `\`🧢\``, inline: true},
                {name: "Fille", value: `\`👠\``, inline: true},
                {name: "Autre", value: `\`🧳\``, inline: true},
            )
            .setImage('https://cdn.discordapp.com/attachments/991297521282453554/992035677673889942/roles_genre.png')

module.exports = {
    name: 'genre',
    description: 'genre.',
    category: 'roles',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'genre',
    examples: ['genre'],
    async runInteraction(client, interaction){

       await interaction.channel.send({embeds: [embed],components: [selectMenu]});
    }
};