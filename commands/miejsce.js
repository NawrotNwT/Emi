const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('miejsce')
    .setDescription('Losuje miejsce wydarzenia'),

  async execute(interaction) {
    const miejsca = [
      'Strzelnica',
      'Ring',
      'Kamienny Labirynt',
      'Las',
      'Miasto',
      'Pole',
      'Bagno',
      'Gildia',
      'Biblioteka',
      'Tor'
    ];

    const wylosowane = miejsca[Math.floor(Math.random() * miejsca.length)];

    await interaction.reply(`📍 **Wylosowane miejsce:** ${wylosowane}`);
  },
};