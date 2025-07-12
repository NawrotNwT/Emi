const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coin')
    .setDescription('Rzuć monetą (Heads / Tails)'),
  async execute(interaction) {
    const wynik = Math.random() < 0.5 ? 'Heads 💰' : 'Tails 🪙';
    await interaction.reply(`Wynik rzutu monetą: **${wynik}**`);
  },
};