const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('discord.js');

const pokedexPath = path.join(__dirname, '../pokedex.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pokedex')
    .setDescription('Zobacz listę Pokémonów, które już złapałeś'),

  async execute(interaction) {
    const userId = interaction.user.id;

    // Wczytaj pokedex.json
    let pokedex = {};
    if (fs.existsSync(pokedexPath)) {
      pokedex = JSON.parse(fs.readFileSync(pokedexPath, 'utf8'));
    }

    const collection = pokedex[userId];

    if (!collection || collection.length === 0) {
      return interaction.reply({
        content: '❗ Twój Pokédex jest pusty. Użyj `/pokemon`, by coś złapać!',
        ephemeral: true
      });
    }

    // Posortowana lista Pokémonów gracza
    const sorted = collection.sort((a, b) => a.id - b.id);
    const entries = sorted.map(p => `✔ ${p.name} (#${p.id})`).join('\n');

    const reply = `📘 **Twój Pokédex:**\n${entries}`;

    await interaction.reply({ content: reply, ephemeral: true });
  }
};