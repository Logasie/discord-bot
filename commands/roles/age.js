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
                    label: '⭕️',
                    description: 'Majeur',
                    value: '991702408784785459'
                },
                {
                    label: '🔞',
                    description: 'Mineur',
                    value: '991702409732706336'
                },
            ])
    )
    const embed = new MessageEmbed()
            .setColor("#360b35")
            .addFields(
                {name: "Majeur", value: `\`⭕️\``, inline: true},
                {name: "Mineur", value: `\`🔞\``, inline: true},
            )
            .setImage('https://cdn.discordapp.com/attachments/991297521282453554/992036291199901817/roles_age.png')

module.exports = {
    name: 'age',
    description: 'age.',
    category: 'roles',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'age',
    examples: ['age'],
    async runInteraction(client, interaction){

       await interaction.channel.send({embeds: [embed],components: [selectMenu]});
    }
};