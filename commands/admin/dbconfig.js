module.exports = {
    name: 'dbconfig',
    description: 'Configurer les données de la base de données.',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'dbconfig',
    examples: ['dbconfig <event>'],
    options: [
        {
            name: "key",
            description: "Choisir une clé à modifier ou afficher.",
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: "prefix",
                    value: "prefix"
                },
                {
                    name: "logChannel",
                    value: "logChannel"
                }
            ]
        },
        {
            name: "value",
            description: "Choisir la nouvelle valeur pour votre clé",
            type: "STRING"
        }
    ],
    async runInteraction(client, interaction){
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == "prefix") {
            if (value) {
                await client.updateGuild(interaction.guild, { prefix: value });
                return interaction.reply({ content: `Nouvelle valeur de préfix: ${value}`});
            }
            interaction.reply({ content: `Valeur de préfix: ${guildSettings.prefix}`});
        } else if (key == "logChannel") {
            if (value) {
                await client.updateGuild(interaction.guild, { logChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de logChannel: ${value}`});
            }
            interaction.reply({ content: `Valeur de logChannel: ${guildSettings.logChannel}`});
        }
    }
};