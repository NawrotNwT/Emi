const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('statystyka')
    .setDescription('Losuje statystykę, która będzie testowana'),

  async execute(interaction) {
    const statystyki = [
      'Zręczność 🏃‍♂️',
      'Siła 💪',
      'Wytrzymałość 🛡️',
      'Intelekt 🧠',
      'Percepcja 👁️'
    ];

    const wylosowana = statystyki[Math.floor(Math.random() * statystyki.length)];

    await interaction.reply(`🎯 **Wylosowana statystyka:** ${wylosowana}`);
  },
};