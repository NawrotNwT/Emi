require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// UŻYJ GUILD_ID, żeby rejestrować lokalnie tylko dla Twojego serwera
const GUILD_ID = 'TWOJE_GUILD_ID';
const CLIENT_ID = 'TWOJE_CLIENT_ID'; // ID Emi z Discord Developer Portal

(async () => {
  try {
    console.log('⏳ Rejestruję komendy (tylko na jednym serwerze)...');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('✅ Komendy zarejestrowane poprawnie!');
  } catch (error) {
    console.error(error);
  }
})();
