module.exports = {
    async execute(client, thread){
        if (thread.isText()) thread.join();
        const logChannel = client.channels.cache.get('991318408417251338');
        logChannel.send(`Nom du thread: ${thread.name}`);
    },
    name: 'threadCreate',
    once: false,
};