const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('efekt')
    .setDescription('Losuje efekt specjalny, który wpływa na potwora'),

  async execute(interaction) {
    const efekty = [
      '❌ Nic się nie dzieje',
      '☠️ Trucizna — potwór traci 1❤️ Życie co turę',
      '🔥 Podpalenie — Potwór traci 2❤️ Życia',
      '❌ Nic się nie dzieje',
      '🧊 Zamrożenie — Potwór nie może Atakować przez 1 turę',
      '🌪️ Odrzut — Potwór zmienia cel ataku lub pudłuje atak',
      '🧠 Strach — Potwór rzuca kością z -1',
      '❌ Nic się nie dzieje'
    ];

    const los = efekty[Math.floor(Math.random() * efekty.length)];

    await interaction.reply(`🎲 **Wylosowany efekt:** ${los}`);
  },
};