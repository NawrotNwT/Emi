require('dotenv').config();

const express = require('express');
const app = express();

// Webserver do pingu z UptimeRobot
app.get('/', (req, res) => {
  res.send('🌐 Emi żyje i czuwa...');
});
app.listen(3000, () => {
  console.log('✅ Webserver aktywny');
});

const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

// Wczytywanie komend z folderu commands
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  }
}

client.once('ready', () => {
  console.log(`🤖 Emi jest online jako ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: '❌ Błąd podczas wykonywania komendy.', ephemeral: true });
  }
});

client.login(process.env.TOKEN);