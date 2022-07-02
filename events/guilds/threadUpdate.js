module.exports = {
    async execute(client, oldThread, newThread){
        if (oldThread.archived && !newThread.archived) newThread.join();
    },
    name: 'threadUpdate',
    once: false,
};