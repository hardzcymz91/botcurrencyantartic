const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Saldo Dompetmu!`)
        .addField(`Rekening`, `<@${userBalance.user}>`)
        .addField(`Saldo`, `${userBalance.amount} 💸`)
        .addField(`Position`, userBalance.position)
        .setColor("GOLD")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bal",
    aliases: ["money", "wallet", "saldo"],
    usage: `bal`
}
