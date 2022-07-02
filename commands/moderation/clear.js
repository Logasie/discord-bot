const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clear',
    description: 'Permet d\'effacer un/des messages.',
    category: 'moderation',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'clear',
    examples: ['clear <nombre>'],
    options: [
        {
            name: "message",
            description: "Le nombre de message à supprimer.",
            type: 'NUMBER',
            required: true,
        },
        {
            name: "target",
            description: "Sélectionner l'utilisateur pour la suppression de message.",
            type: 'USER',
            required: false,
        }
    ],
    async runInteraction(client, interaction)  {

        const amountToDelete = interaction.options.getNumber('message');
        if (amountToDelete > 100 || amountToDelete < 0) return interaction.reply('Le nombre doit être inférieur à 100 et supérieur à 0');
        const target = interaction.options.getMember('target');

        const messageToDelete = await interaction.channel.messages.fetch();
        if (target) {
            let i = 0;
            const filteredTargetMessages =[];
            (await messageToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await interaction.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                interaction.reply(`J'ai supprimé ${messages.size} messages sur l'utilisateur ${target}`);
            });
        } else {
            await interaction.channel.bulkDelete(amountToDelete, true).then(messages => {
                interaction.reply(`J'ai supprimé ${messages.size} messages sur ce salon`);
            });
        }
    }
};