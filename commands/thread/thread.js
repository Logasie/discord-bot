module.exports = {
    name: 'thread',
    description: 'Commande concernant les threads.',
    category: 'thread',
    permissions: ['MANAGE_THREADS'],
    ownerOnly: false,
    usage: 'thread',
    examples: ['thread'],
    options: [
        {
            name: "join",
            description: "Joindre un thread",
            type: "SUB_COMMAND"
        },
        {
            name: "leave",
            description: "Quitter un thread",
            type: "SUB_COMMAND"
        },
        {
            name: "archive",
            description: "Vérouiller un thread",
            type: "SUB_COMMAND"
        },
        {
            name: "unarchive",
            description: "Dévérouiller un thread",
            type: "SUB_COMMAND"
        },
        {
            name: "delete",
            description: "Supprimer un thread",
            type: "SUB_COMMAND",
            options:[ { name: 'channel', type: 'STRING', description: 'Id du channel', required: true} ]
        }
    ],
    async runInteraction(client, interaction){
        let thread = interaction.channel;
        if (!thread.isThread()) return interaction.reply('Impossible de taper cette commande car vous n\'êtes pas dans un thread.');

        if (interaction.options.getSubcommand() === 'join'){
            interaction.reply('Le bot a rejoint le thread');
            if (thread.join) await thread.join();

        } else if (interaction.options.getSubcommand() === 'leave'){
            interaction.reply('Le bot a quitté');
            if (thread.leave) await thread.leave();

        } else if (interaction.options.getSubcommand() === 'archive'){
           interaction.reply('Le bot a archiver le thread');
           if (thread.archive) await thread.setArchived(true); 

        } else if (interaction.options.getSubcommand() === 'unarchive'){
            interaction.reply('Le bot a désarchiver le thread');
            if (thread.unarchive) await thread.setArchived(false);

        }else if (interaction.options.getSubcommand() === 'delete'){
            const logChannel = client.channels.cache.get('991318408417251338');
            logChannel.send(`Le bot a supprimé le thread: ${thread.name}`);
            await thread.delete();
        }
    }
};