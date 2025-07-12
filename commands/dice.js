const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dice')
    .setDescription('Rzuć klasyczną kością 1-6'),

  async execute(interaction) {
    const wynik = Math.floor(Math.random() * 6) + 1;
    const status = wynik <= 3 ? '❌' : '✅';

    // Proste kostki PNG z thumbami, ale embed z czerwonym obramowaniem
    const kostkaUrl = {
      1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/200px-Dice-1-b.svg.png',
      2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/200px-Dice-2-b.svg.png',
      3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/200px-Dice-3-b.svg.png',
      4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/200px-Dice-4-b.svg.png',
      5: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/200px-Dice-5-b.svg.png',
      6: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/200px-Dice-6-b.svg.png',
    }[wynik];

    const embed = new EmbedBuilder()
      .setTitle(`🎲 Wyrzuciłeś: **${wynik}** ${status}`)
      .setImage(kostkaUrl)
      .setColor(0xFF3333); // czerwony obramowanie embedu

    await interaction.reply({ embeds: [embed] });
  },
};