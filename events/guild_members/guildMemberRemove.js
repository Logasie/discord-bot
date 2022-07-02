const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    async execute(client, member){
        const channel = member.guild.channels.cache.get('991321917690749058');
        const logRemove = member.guild.channels.cache.get('991318416554213467');

        logRemove.send(member + ' **A quitté**');
        const embedNewMember = new MessageEmbed()
        .setColor('RED')
        .setDescription(`Bienvenue à ${member} sur ${member.guild.name}.`)
        .setAuthor({name: `Nouveau membre`, iconURL: `${member.guild.iconURL({dynamic: true})}`})
        .addField('Création du compte:', moment(member.user.createdAt).format('L'))
        .addField('A rejoint le:', moment(member.joinedAt).format('L'))
        .setFooter({text:` ${member.guild.memberCount} sur le serveur ! `})
        channel.send({embeds: [embedNewMember]});
    },
    name: 'guildMemberRemove',
    once: false
};