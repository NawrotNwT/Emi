const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gracz')
    .setDescription('Losuje jednego z graczy biorących udział w turnieju'),

  async execute(interaction) {
    const gracze = [
      'Vivcia',
      'Venaaris',
      'Fortix',
      'Yukiro',
      'Aro',
      'Night',
      'Needy',
      'Magnum',
      'Meguru',
      'Beru',
      'Rina'
    ];

    const wylosowany = gracze[Math.floor(Math.random() * gracze.length)];

    await interaction.reply(`🎯 **Wylosowany gracz:** ${wylosowany}`);
  },
};