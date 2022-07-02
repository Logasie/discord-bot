module.exports = {
    name: "accept-button",
    async runInteraction(client, interaction) {
        await interaction.member.roles.add(['991703982428934174', '991701042540597278', '991701043509481633', '991702410240217198', '991356420245172284'])
        await interaction.reply({ content: 'Vous avez accepté les règles, vous pouvez avoir accès au serveur', ephemeral: true})
    },
};