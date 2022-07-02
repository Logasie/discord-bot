const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unmute',
    description: 'Permet de démute un membre.',
    category: 'moderation',
    permissions: ['MODERATE_MEMBERS'],
    ownerOnly: false,
    usage: 'unmute',
    examples: ['unmute <membre>'],
    options: [
        {
            name: "target",
            description: "L'utilisateur a ban.",
            type: 'USER',
            required: true,
        }
    ],
    async runInteraction(client, interaction)  {
        const target = interaction.options.getMember('target');

        if (!target.isCommunicationDisabled()) return interaction.reply('Ce membre ne pas être démute le car il n\'est pas mute.');

        target.timeout(null);
        interaction.reply(`Le membre ${target} a été démute.`);

    }
};