const { MessageEmbed } = require("discord.js");

    const embed = new MessageEmbed()
        
          .setTitle('Réseaux-Sociaux')
          .setColor(0x581d56)
          .setImage('https://cdn.discordapp.com/attachments/991297521282453554/992047441291530281/ligne.png')
          .addFields(
            {
              name: `Snapchat`,
              value: `https://www.snapchat.com/add/siontola`
            },
            {
              name: `Instagram`,
              value: `https://www.instagram.com/siontola`
            },
            {
              name: `YouTube`,
              value: "\u200B"
            },
            {
              name: `TikTok`,
              value: "\u200B"
            }
          )

module.exports = {
    name: 'embed',
    description: 'embed.',
    category: 'roles',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'embed',
    examples: ['embed'],
    async runInteraction(client, interaction){

       await interaction.channel.send({embeds: [embed]});
    }
};