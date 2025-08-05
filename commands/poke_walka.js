const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poke_walka')
    .setDescription('Weź udział w walce i zdobądź Level!'),

  async execute(interaction) {
    const efekty = [
      '❌ Przegrana.',
      '❌ Przegrana.',
      '💪 WYGRANA! +1 do Levelu!',
      '💪 WYGRANA! +1 do Levelu!',
      '🔥 DOMINACJA W WALCE! +2 do Levelu!',
      '🔥 DOMINACJA W WALCE! +2 do Levelu!',
      '💀 SIGMA! Przeciwnik boi się Twojego spojrzenia.\n+3 do Levelu!\nRzuć `/dice` – jeśli trafisz **4/6**, dostajesz dodatkowe +1 Level!'
    ];

    const wynik = efekty[Math.floor(Math.random() * efekty.length)];

    await interaction.reply({ content: `⚔️ **Wynik Twojej walki:**\n${wynik}` });
  }
};