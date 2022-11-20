const url = 'https://dog.ceo/api/breeds/image/random';

const Discord = require('discord.js')
let dog = ''

module.exports = {
    name: 'carimba',
    aliases: ['charimba','carimbao','carimbão'],

    run: async(client, message, args) => {
        let embed = new Discord.EmbedBuilder()

        fetch(url).then((api) => api.json())
        .then(rs => {
            dog = rs.message
            embed.setImage(dog)
            embed.setDescription(`Esse é o Carimba`);
            message.reply({ embeds: [embed]})
        })
    }
};