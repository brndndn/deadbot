const Discord = require("discord.js");
const Config = require("./config.json");
const Token = require("./token.json");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online! its running on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Work in progress", {type: "STREAMING"});
});

bot.login(Token.token);
