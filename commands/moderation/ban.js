const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'Permet de bannir un membre.',
    category: 'moderation',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'ban',
    examples: ['ban <membre>'],
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
        }
    ],
    async runInteraction(client, interaction)  {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');

        if (!target.bannable) return interaction.reply('Ce membre ne peut pas être kick par le bot');

        target.ban({reason});
        interaction.reply(`Le membre ${target} a été ban.`);

    }
};