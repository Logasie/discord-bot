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
                    label: '🇩🇪',
                    description: 'Allemagne',
                    value: '992039122711609384'
                },
                {
                    label: '🇩🇿',
                    description: 'Algérie',
                    value: '992039124116713552'
                },
                {
                    label: '🇧🇪',
                    description: 'Belgique',
                    value: '992039136657670234'
                },
                {
                    label: '🇪🇸',
                    description: 'Espagne',
                    value: '992039125924466750'
                },
                {
                    label: '🇮🇹',
                    description: 'Italie',
                    value: '992039124259324004'
                },
                {
                    label: '🇲🇦',
                    description: 'Maroc',
                    value: '992039123642765362'
                },
                {
                    label: '🇹🇷',
                    description: 'Tunisie',
                    value: '992039475322552321'
                },
            ])
    )
    const embed = new MessageEmbed()
            .setColor("#360b35")
            .addFields(
                {name: "Allemagne", value: `\`🇩🇪\``, inline: true},
                {name: "Algérie", value: `\`🇩🇿\``, inline: true},
                {name: "Belgique", value: `\`🇧🇪\``, inline: true},
                {name: "Espagnol", value: `\`🇪🇸\``, inline: true},
                {name: "Italie", value: `\`🇮🇹\``, inline: true},
                {name: "Maroc", value: `\`🇲🇦\``, inline: true},
                {name: "Tunisie", value: `\`🇹🇷\``, inline: true},
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