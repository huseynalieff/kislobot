module.exports = member => {
  let guild = member.guild;
  member.sendMessage('niye gittin?');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
