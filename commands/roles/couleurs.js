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
                    label: '🔴',
                    description: 'Rouge',
                    value: '991703982613463160'
                },
                {
                    label: '🟠',
                    description: 'Orange',
                    value: '991704141397241886'
                },
                {
                    label: '🟡',
                    description: 'Jaune',
                    value: '991703980780568706'
                },
                {
                    label: '🟢',
                    description: 'Vert',
                    value: '991704144865935461'
                },
                {
                    label: '🔵',
                    description: 'Bleu',
                    value: '991704152646373406'
                },
                {
                    label: '🟣',
                    description: 'Violet',
                    value: '991704133440655523'
                },
                {
                    label: '⚫️',
                    description: 'Noir',
                    value: '991704137685287063'
                },
                {
                    label: '⚪️',
                    description: 'Blanc',
                    value: '991703981518749786'
                },
                {
                    label: '🟤',
                    description: 'Marron',
                    value: '991703989286600765'
                }
            ])
    )
    const embed = new MessageEmbed()
            .setColor("#360b35")
            .addFields(
                {name: "Rouge", value: `\`🔴\``, inline: true},
                {name: "Orange", value: `\`🟠\``, inline: true},
                {name: "Jaune", value: `\`🟡\``, inline: true},
                {name: "Vert", value: `\`🟢\``, inline: true},
                {name: "Bleu", value: `\`🔵\``, inline: true},
                {name: "Violet", value: `\`🟣\``, inline: true},
                {name: "Noir", value: `\`⚫️\``, inline: true},
                {name: "Blanc", value: `\`⚪️\``, inline: true},
                {name: "Marron", value: `\`🟤\``, inline: true}
            )
            .setImage('https://cdn.discordapp.com/attachments/991335571496644748/992033126656249887/Roles_couleurs.png')

module.exports = {
    name: 'couleurs',
    description: 'couleurs.',
    category: 'roles',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'couleurs',
    examples: ['couleurs'],
    async runInteraction(client, interaction){

       await interaction.channel.send({embeds: [embed],components: [selectMenu]});
    }
};