const Discord = require('discord.js');
const fs = require('fs');
var d = new Date();
  


const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});


client.once('ready', () => {
    console.log('Ready!');


        fs.readFile('./Dico/AnaWord.txt', 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            mots = data.split(",");
            })

});

client.login(process.env.TOKEN);

function randInt(max) {
    return Math.floor(Math.random() * max);
  }



client.on("message", message => {

    if (message.content === "*jc") {
        message.delete()
        i = randInt(mots.length);
        msg = "**Lave toi "+mots[i].trim()+" toi !**";

        message.channel.send({
            embeds: [{
              title: '__Insulte de JC__',
              description: msg,
              color: 0x00FFFF,

             footer: {
                    text: `JC ` + d.toLocaleString() 
                  }
            }]
          })
    }

    if (message.content === "*piece") {
        message.delete()
        i = randInt(2);
        msg = ["Pile !" , "Face !"];

        console.log(i)
        message.channel.send(msg[i])
    }
})
