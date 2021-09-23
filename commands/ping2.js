module.exports = {
  name: "ping",
  category: "info",
  description: "Obter bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`**Ping do API** ${client.ws.ping}`);
  }
  
}