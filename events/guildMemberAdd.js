client.on("guildCreate", (guild) => {

    console.log(client.user.username + " was invited to and joined " + guild.name);
});
client.on("guildMemberAdd", (guild, member) => {

    console.log(member.user.username + " joined " + guild.name);
});
