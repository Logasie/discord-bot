const ownerId = '988552763833188372';
const prefix = '!';

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        if (interaction.isCommand() || interaction.isContextMenu()) {

            const cmd = client.commands.get(interaction.commandName);
            if (!cmd) return interaction.reply('Cette commande n\'existe pas');
    
            if (cmd.ownerOnly) {
                if (interaction.user.id != ownerId) return interaction.reply('La seule personne pouvant taper cette commande et le Fondateur')
            }
    
            if (!interaction.member.permissions.has([cmd.permissions])) return interaction.reply(`Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande`)
    
            cmd.runInteraction(client, interaction);
        } else if (interaction.isButton()) {
            const btn = client.buttons.get(interaction.customId);
            if (!btn) return interaction.reply('Ce bouton n\'existe pas');
            btn.runInteraction(client, interaction);
        } else if (interaction.isSelectMenu()) {
            const selectMenu = client.selects.get(interaction.customId);
            if (!selectMenu) return interaction.reply('Ce menu n\'existe pas');
            selectMenu.runInteraction(client, interaction);
        }
    },
};
