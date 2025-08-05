const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('discord.js');

const pokemonPath = path.join(__dirname, '../pokemon.json');
const pokedexPath = path.join(__dirname, '../pokedex.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pokemon')
    .setDescription('Losuj Pokémona i sprawdź, czy uda Ci się go złapać!'),

  async execute(interaction) {
    const userId = interaction.user.id;

    // Wczytaj listę Pokémonów
    const pokemonList = JSON.parse(fs.readFileSync(pokemonPath, 'utf8'));

    // Wczytaj lub utwórz pokedex
    let pokedex = {};
    if (fs.existsSync(pokedexPath)) {
      pokedex = JSON.parse(fs.readFileSync(pokedexPath, 'utf8'));
    }
    if (!pokedex[userId]) {
      pokedex[userId] = [];
    }

    // Losowanie szansy
    const roll = Math.floor(Math.random() * 100);

    let result;
    if (roll < 15) {
      result = { type: 'miss', message: '❌ Nic nie złapałeś. Spróbuj jutro!' };
    } else if (roll < 90) {
      const available = pokemonList.filter(p => p.id <= 143);
      const chosen = available[Math.floor(Math.random() * available.length)];
      result = { type: 'normal', pokemon: chosen };
    } else if (roll < 98) {
      const available = pokemonList.filter(p => p.rare);
      const chosen = available[Math.floor(Math.random() * available.length)];
      result = { type: 'rare', pokemon: chosen };
    } else {
      const available = pokemonList.filter(p => p.legendary);
      const chosen = available[Math.floor(Math.random() * available.length)];
      result = { type: 'legendary', pokemon: chosen };
    }

    // Obsługa wyniku
    let reply;
    if (result.type === 'miss') {
      reply = result.message;
    } else {
      const { id, name } = result.pokemon;
      const alreadyCaught = pokedex[userId].some(p => p.id === id);

      if (alreadyCaught) {
        reply = `🔁 Masz już **${name}** (#${id}) – to powtórka.`;
      } else {
        pokedex[userId].push({ id, name });
        reply = `✅ Złapałeś nowego Pokémona: **${name}** (#${id})!`;
      }

      // Zapis pokedexu
      fs.writeFileSync(pokedexPath, JSON.stringify(pokedex, null, 2));
    }

    await interaction.reply({ content: reply });
  }
};