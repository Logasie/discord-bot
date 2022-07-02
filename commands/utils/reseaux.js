const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reseaux',
    description: 'Affiche les réseaux-sociaux de Siontola et du serveur.',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'reseaux',
    examples: ['reseaux'],
    async runInteraction(client, interaction){

        const embed = new MessageEmbed()
        
        .setTitle('__Réseaux-Sociaux__')
        .setColor(0x581d56)
        .setImage('https://cdn.discordapp.com/attachments/991297521282453554/992047441291530281/ligne.png')
        .addFields(
          {
            name: `<:1202snapchat:992067311789944952> | __Snapchat__`,
            value: `https://www.snapchat.com/add/logasie`
          },
          {
            name: `<:7807instagram:992067317796196392> | __Instagram__`,
            value: `https://www.instagram.com/logasie`
          },
          {
            name: `<:6177youtube:992067316458192926> | __YouTube__`,
            value: "https://www.youtube.com/channel/UCLx6csBqG_oAbd8CdFBFO4w"
          },
          {
            name: `<:4281tiktoklogo:992841619856433223> | __TikTok__`,
            value: "https://www.tiktok.com/@logasie"
          }
        )
        interaction.reply({content: ' ', embeds: [embed]});
    }
};
