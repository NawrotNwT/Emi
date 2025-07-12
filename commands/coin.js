const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coin')
    .setDescription('Rzut gildyjnej monety – Tails = ✅ wygrana, Heads = ❌ przegrana'),

  async execute(interaction) {
    const isTails = Math.random() < 0.5;
    const wynik = isTails ? 'Tails' : 'Heads';
    const status = isTails ? '✅' : '❌';

    // Używamy jednego zdjęcia z obiema stronami monety
    const coinUrl = 'https://cdna.artstation.com/p/assets/images/images/062/015/072/large/jayakamohi-double-sided-coin.jpg?1671928164';

    const embed = new EmbedBuilder()
      .setTitle(`🪙 Wyrzuciłeś: **${wynik}** ${status}`)
      .setImage(coinUrl)
      .setColor(isTails ? 0x33FF66 : 0xFF3333);

    await interaction.reply({ embeds: [embed] });
  },
};