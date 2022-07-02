const mongoose = require("mongoose");

const guildShema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '!' },
    logChannel: { 'type': String, 'default': '991318408417251338'}
});

module.exports = mongoose.model('Guild', guildShema);