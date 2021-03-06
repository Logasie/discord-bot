const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rΓ΄le dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: 'π΄',
                    description: 'Rouge',
                    value: '991703982613463160'
                },
                {
                    label: 'π ',
                    description: 'Orange',
                    value: '991704141397241886'
                },
                {
                    label: 'π‘',
                    description: 'Jaune',
                    value: '991703980780568706'
                },
                {
                    label: 'π’',
                    description: 'Vert',
                    value: '991704144865935461'
                },
                {
                    label: 'π΅',
                    description: 'Bleu',
                    value: '991704152646373406'
                },
                {
                    label: 'π£',
                    description: 'Violet',
                    value: '991704133440655523'
                },
                {
                    label: 'β«οΈ',
                    description: 'Noir',
                    value: '991704137685287063'
                },
                {
                    label: 'βͺοΈ',
                    description: 'Blanc',
                    value: '991703981518749786'
                },
                {
                    label: 'π€',
                    description: 'Marron',
                    value: '991703989286600765'
                }
            ])
    )
    const embed = new MessageEmbed()
            .setColor("#360b35")
            .addFields(
                {name: "Rouge", value: `\`π΄\``, inline: true},
                {name: "Orange", value: `\`π \``, inline: true},
                {name: "Jaune", value: `\`π‘\``, inline: true},
                {name: "Vert", value: `\`π’\``, inline: true},
                {name: "Bleu", value: `\`π΅\``, inline: true},
                {name: "Violet", value: `\`π£\``, inline: true},
                {name: "Noir", value: `\`β«οΈ\``, inline: true},
                {name: "Blanc", value: `\`βͺοΈ\``, inline: true},
                {name: "Marron", value: `\`π€\``, inline: true}
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