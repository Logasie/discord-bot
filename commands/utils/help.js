const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const commandFolder = readdirSync('./commands');
const prefix = '!';

const contextDescription = {
    userinfo: 'Renvoie des informations sur l\'utilisateur',
}


module.exports = {
    name: 'help',
    description: 'Affiche les commandes disponible sur le serveur.',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help',
    examples: ['help <command>'],
    options: [
        {
            name: "command",
            description: "Taper le nom de votre commande",
            type: "STRING",
            required: false
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const prefix = guildSettings.prefix;
        const cmdName = interaction.options.getString('command');

        if (!cmdName) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('BLURPLE')
                .addField('Liste des commandes', `Une liste de toutes les catégories disponibles et leurs commandes. \nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``)
            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `+ ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map (cmd => cmd.name).join(', ')}\``
                );
            }
            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true});
        }

        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({ content: 'cette commande n\'existe pas', ephemeral: true});

        return interaction.reply({ content: `
        \`\`\`makefile

        [Help: Commande -> ${cmd.name}] ${cmd.onwerOnly ? '/!\\ Pour les admins du bot uniquement /!\\': ''}

        ${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

        Utilisation: ${prefix}${cmd.usage}
        Exemples: ${prefix}${cmd.examples.join(` | ${prefix}`)}
        Permissions: ${cmd.permissions.join(', ')}
        
        ---

        ${prefix} = prefix utiliser pour le bot (/commands sont aussi disponibles)\n
        {} = sous-commande(s) disponible(s)\n
        [] = option(s) obligatoire(s)\n
        <> = option(s) optionnel(s)\n
        Ne pas inclure ces caractères -> {}, [], <> dans vos commandes.
        \`\`\``, ephemeral: true });
    }
    
};
