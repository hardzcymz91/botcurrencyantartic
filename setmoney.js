const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Masukan Nama Yang Benar!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Masukan Saldo Yang Benar!");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Berhasil`)
        .addField(`Rekening`, `<@${data.user}>`)
        .addField(`Total Saldo Sekarang`, data.after)
        .setColor("GREEN")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "setmoney",
    aliases: ["paid"],
    usage: `setmoney @user <amount>`
}
