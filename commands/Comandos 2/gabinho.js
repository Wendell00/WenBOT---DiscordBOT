const keyAPI = 'live_WUDKwXawPcoMhA5lof7h2ygQ9Y3qiTuCGCz5PbXm2rv2y8F8j5VJTtKzqiAn3BOG'
const fullAPI = `https://api.thecatapi.com/v1/images/search?api_key=${keyAPI}`
const Discord = require('discord.js')
let gato = ''

module.exports = {
    name: 'gabinho',
    aliases: ['gato','gatinho','gabo'],

    run: async(client, message, args) => {
        let embed = new Discord.EmbedBuilder()

        fetch(fullAPI).then((api) => api.json())
        .then(rs => {
            gato = rs[0].url
            embed.setImage(gato)
            embed.setDescription(`Esse é o Gabo`);
            message.reply({ embeds: [embed]})
        })
    }
};