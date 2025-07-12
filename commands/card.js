const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch'); // jeśli jeszcze nie masz, dodaj przez `npm install node-fetch`

module.exports = {
  data: new SlashCommandBuilder()
    .setName('card')
    .setDescription('Losuj kartę z obrazkiem!'),
  async execute(interaction) {
    // losujemy kartę z API
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const data = await res.json();
    const card = data.cards[0];
    const { value, suit, image } = card;

    // określamy reakcję
    const status = (suit === 'SPADES' || suit === 'CLUBS') ? '❌' : '✅';

    // embed z obrazkiem
    const embed = new EmbedBuilder()
      .setTitle(`🃏 Twoja karta to: **${value} of ${suit}** ${status}`)
      .setImage(image)
      .setColor(['HEARTS','DIAMONDS'].includes(suit) ? 0xFF4D4D : 0x4D4DFF);

    await interaction.reply({ embeds: [embed] });
  },
};