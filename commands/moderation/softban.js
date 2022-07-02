const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'softban',
    description: 'Permet de bannir un membre temporairement avec une raison.',
    category: 'moderation',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'softban',
    examples: ['softban <membre>'],
    options: [
        {
            name: "target",
            description: "L'utilisateur a ban.",
            type: 'USER',
            required: true,
        },
        {
            name: "reason",
            description: "La raison du ban.",
            type: 'STRING',
            required: true,
        },
        {
            name: "duration",
            description: "La durée du ban",
            type: "NUMBER",
            minValue: 1,
            maxValue: 7,
            required: true
        }
    ],
    async runInteraction(client, interaction)  {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');
        const duration = interaction.options.getNumber('duration');

        if (!target.bannable) return interaction.reply('Ce membre ne peut pas être kick par le bot');

        target.ban({days: duration, reason: reason});
        interaction.reply(`Le membre ${target} a été banni pour ${duration} jours`);

    }
};