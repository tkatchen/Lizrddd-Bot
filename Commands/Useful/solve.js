require('../../req.js')
require('../../bot.js')
exports.run = (bot, msg) => {
    try {
        let expr = msg.content.split(" ").slice(1).join(" ")
        let solution = math.eval(expr).toString()
        const embed = new Discord.RichEmbed()
        .setColor(0x055e18)
        .addField("Expression", expr)
        .addField("Solution", solution)

        msg.channel.send({embed})
    } catch(err) {
        msg.channel.send("Please send a proper expression")
    }
}

exports.help = {
    name: "solve",
    desc: "Solves an expression for you",
    usage: "solve [expression]"
}