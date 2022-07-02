const { MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('primary-button')
            .setLabel('Primary')
            .setStyle('PRIMARY'),
        new MessageButton()
            .setCustomId('secondary-button')
            .setLabel('Secondary')
            .setStyle('SECONDARY'),
        new MessageButton()
            .setCustomId('success-button')
            .setLabel('Success')
            .setStyle('SUCCESS'),
        new MessageButton()
            .setCustomId('danger-button')
            .setLabel('Danger')
            .setStyle('DANGER'),
        new MessageButton()
            .setURL('https://google.com')
            .setLabel('Link')
            .setStyle('LINK')
    )

module.exports = {
    name: 'foo',
    description: 'foo.',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'foo',
    examples: ['foo'],
    async runInteraction(client, interaction){

       await interaction.reply({ content: 'Cliquer les boutons', embeds: [], components: [buttons]});
    }
};