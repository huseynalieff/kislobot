bot.on("guildMemberRemove", (member) => {
	member.guild.fetchAuditLogs({ limit: 1 }).then(logs => {
		var logArray = Array.from(logs.entries.values());
		var entry = logArray[0];
		console.log(entry);
	}).catch(console.error);
});
