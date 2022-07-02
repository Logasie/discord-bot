const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'Permet d\'exclure un membre.',
    category: 'moderation',
    permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    usage: 'kick',
    examples: ['kick <membre>'],
    options: [
        {
            name: "target",
            description: "L'utilisateur a kick.",
            type: 'USER',
            required: true,
        },
        {
            name: "reason",
            description: "La raison du kick.",
            type: 'STRING',
            required: true,
        }
    ],
    async runInteraction(client, interaction)  {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');

        if (!target.kickable) return interaction.reply('Ce membre ne peut pas être kick par le bot');

        target.kick(reason);
        interaction.reply(`Le membre ${target} a été kick.`);

    }
};