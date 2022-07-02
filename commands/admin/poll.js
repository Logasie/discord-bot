const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'poll',
    description: 'Vous permet de réaliser un sondage.',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'poll',
    examples: ['poll <titre> <content>'],
    options: [
        {
            name: "title",
            description: "Saisissez l'intitulé de votre sondage.",
            type: 'STRING',
            required: true,
        },
        {
            name: "content",
            description: "Saisissez la question du sondage.",
            type: 'STRING',
            required: true,
        }
    ],
    async runInteraction(client, interaction){
        const pollTitle = interaction.options.getString('title');
        const pollContent = interaction.options.getString('content');


        const embed = new MessageEmbed()
            .setTitle(pollTitle)
            .setColor('AQUA')
            .setDescription(pollContent)
            .setTimestamp()
            .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}`})

        const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
        poll.react('✅')
        poll.react('❌')
    }
};