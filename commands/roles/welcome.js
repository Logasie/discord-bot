const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle('PRIMARY'),
        new MessageButton()
            .setCustomId('refuse-button')
            .setLabel('Refuser')
            .setStyle('DANGER'),
    )

    const welcomeEmbed = new MessageEmbed()
          .setTitle(`Règlement`)
          .setColor(0x581d56)
          .setImage('https://cdn.discordapp.com/attachments/991297521282453554/992047441291530281/ligne.png')
          .addFields(
            {
              name: `Tropico est un serveur communautaire actif, de discussion, d'échange et de rencontre. Une seconde famille pour ses utilisateurs.`,
              value: "\u200B",
              inline: false
            },
            {
              name: `Le règlement du serveur est nécessaire à son bon fonctionnement, en postant sur le serveur vous vous engagez à le respecter.`,
              value: "\u200B"
            },
            {
              name: `1. Traite tous le monde avec respect.`,
              value: "\u200B",
              inline: false
            },
            {
              name: `2. Pas de contenu borderline, 18+ ou illégal.`,
              value: "\u200B",
              inline: false
            },
            {
              name: `3. Pas de discussions immatures.`,
              value: "\u200B"
            },
            {
              name: `4. Pas de spam ni d'auto-promotion.`,
              value: "\u200B",
              inline: false
            },
            {
              name: `5. Votre pseudo doit être facilement pingable.`,
              value: "\u200B",
              inline: false
            },
            {
              name: `6. Vous devez vous exprimer de manière correcte.`,
              value: "\u200B",
              inline: false
            },
            {
              name: `7. Pas de contestation de sanctions en public.`,
              value: "\u200B",
              inline: false
            },
            {
              name: `8. Pour toutes demande au staff veuillez faire un ticket `,
              value: "\u200B",
              inline: false
            }
          );

module.exports = {
    name: 'welcome',
    description: 'welcome.',
    category: 'roles',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'welcome',
    examples: ['welcome'],
    async runInteraction(client, interaction){

       await interaction.channel.send({ embeds: [welcomeEmbed], components: [buttons]});
    }
};