// 📁 Plik: commands/reset_par.js

const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/pary.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reset_par')
    .setDescription('🔁 Resetuje listę dostępnych graczy do losowania par'),

  async execute(interaction) {
    const pełnaLista = {
      gracze: [
        "Beru", "Needy", "Rina", "Meguru", "Fortix", "Night",
        "Vivcia", "Venaaris", "Aro", "Magnum", "Yukiro", "Ami"
      ]
    };

    fs.writeFileSync(filePath, JSON.stringify(pełnaLista, null, 2));

    await interaction.reply('✅ Lista graczy do losowania par została zresetowana!');
  }
};