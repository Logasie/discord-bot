const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rรดle dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: '๐ฉ๐ช',
                    description: 'Allemagne',
                    value: '992039122711609384'
                },
                {
                    label: '๐ฉ๐ฟ',
                    description: 'Algรฉrie',
                    value: '992039124116713552'
                },
                {
                    label: '๐ง๐ช',
                    description: 'Belgique',
                    value: '992039136657670234'
                },
                {
                    label: '๐ช๐ธ',
                    description: 'Espagne',
                    value: '992039125924466750'
                },
                {
                    label: '๐ฎ๐น',
                    description: 'Italie',
                    value: '992039124259324004'
                },
                {
                    label: '๐ฒ๐ฆ',
                    description: 'Maroc',
                    value: '992039123642765362'
                },
                {
                    label: '๐น๐ท',
                    description: 'Tunisie',
                    value: '992039475322552321'
                },
            ])
    )
    const embed = new MessageEmbed()
            .setColor("#360b35")
            .addFields(
                {name: "Allemagne", value: `\`๐ฉ๐ช\``, inline: true},
                {name: "Algรฉrie", value: `\`๐ฉ๐ฟ\``, inline: true},
                {name: "Belgique", value: `\`๐ง๐ช\``, inline: true},
                {name: "Espagnol", value: `\`๐ช๐ธ\``, inline: true},
                {name: "Italie", value: `\`๐ฎ๐น\``, inline: true},
                {name: "Maroc", value: `\`๐ฒ๐ฆ\``, inline: true},
                {name: "Tunisie", value: `\`๐น๐ท\``, inline: true},
            )
            .setImage('https://cdn.discordapp.com/attachments/991297521282453554/992040840295895061/Roles_origine.png')

module.exports = {
    name: 'origine',
    description: 'origine.',
    category: 'roles',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'origine',
    examples: ['origine'],
    async runInteraction(client, interaction){

       await interaction.channel.send({embeds: [embed],components: [selectMenu]});
    }
};