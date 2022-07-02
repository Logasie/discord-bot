const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });
const dotenv = require("dotenv"); dotenv.config();
const mongoose = require("mongoose");
const Logger = require("../utils/Logger");


['commands', 'buttons', 'selects'].forEach(x => client[x] = new Collection());
['EventUtil', 'CommandUtil', 'ButtonUtil', 'SelectUtil'].forEach(handler => { require(`../utils/handlers/${handler}`)(client)});
require('../utils/Functions')(client);

process.on('exit', code => { console.log(`Le processus s'est arrêté avec le code : ${code}`)});
process.on('uncaughtException', (err, origin) => { console.log(`uncaughtException: ${err}`, `Origine: ${origin}`)});
process.on('unhandledRejection', (reason, promise) => console.log(`unhandledRejection: ${reason}\n-----\n`, promise));
process.on('exit', (...args) => console.log(...args));

mongoose.connect(process.env.DB, {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}).then(() => { Logger.client('Le client est connecté à la base de données'); })
.catch(err => { Logger.error(err)});


client.login(process.env.Token);