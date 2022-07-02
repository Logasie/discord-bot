const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'emit',
    description: 'Permet d\'émettre un événement.',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'emit',
    examples: ['emit <event>'],
    options: [
        {
            name: "event",
            description: "Choisir un événement à emettre.",
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: "guildMemberAdd",
                    value: "guildMemberAdd"
                },
                {
                    name: "guildMemberRemove",
                    value: "guildMemberRemove"
                },
                {
                    name: "guildCreate",
                    value: "guildCreate"
                }
            ]
        }
    ],
    runInteraction: (client, interaction) => {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberAdd émit', ephemeral: true});
        } else if (evtChoices == "guildCreate") {
            client.emit("guildCreate", interaction.member);
            interaction.reply({content: "Event guildCreate émit", ephemeral: true});
        } else {
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({ content: 'Event guildMemberRemove émit', ephemeral: true});
        }
    }
};