const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poke_trening')
    .setDescription('Wykonaj dzisiejszy trening i sprawdź, co udało się osiągnąć!'),

  async execute(interaction) {
    const efekty = [
      '❌ Dziś nie twój dzień.',
      '❌ Dziś nie twój dzień.',
      '💪 Trening Udany! +1 do Statystyki i +1 do Levelu!',
      '💪 Trening Udany! +1 do Statystyki i +1 do Levelu!',
      '🔥 DZIŚ JEST OGIEŃ! +2 do Statystyki i +2 do Levelu!',
      '🔥 DZIŚ JEST OGIEŃ! +2 do Statystyki i +2 do Levelu!',
      '🍀 SZCZĘŚCIE! +2 do Statystyki i +2 do Levelu!\nWpisz `/coin` – jeśli trafisz **Tail✅**, zyskujesz dodatkowe +1 Stat i +1 Level!'
    ];

    const wynik = efekty[Math.floor(Math.random() * efekty.length)];

    await interaction.reply({ content: `🧘‍♂️ **Twój wynik treningu:**\n${wynik}` });
  }
};