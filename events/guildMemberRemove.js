client.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id);
});
