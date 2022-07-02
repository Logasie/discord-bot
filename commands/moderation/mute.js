const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: 'mute',
    description: 'Permet de mute un membre temporairement avec une raison.',
    category: 'moderation',
    permissions: ['MODERATE_MEMBERS'],
    ownerOnly: false,
    usage: 'mute',
    examples: ['mute <membre>'],
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
            type: "STRING",
            required: true
        }
    ],
    async runInteraction(client, interaction)  {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');
        const duration = interaction.options.getString('duration');
        const convertedTime = ms(duration);

        if (!target.moderatable) return interaction.reply('Ce membre ne peut pas être mute par le bot');
        if (!convertedTime) return interaction.reply('Spécifier une durée valable.');

        target.timeout(convertedTime, reason);
        interaction.reply(`Le membre ${target} a été mute pour ${duration} car ${reason}`);

    }
};