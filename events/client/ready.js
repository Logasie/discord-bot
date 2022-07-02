const Logger = require("../../utils/Logger");

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        Logger.client("Le bot est désormais en ligne");

        const devGuild = await client.guilds.cache.get('991291689836744714');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    },
};