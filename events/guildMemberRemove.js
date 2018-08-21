module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoşçakal **' + username + '**!');
    member.guild.defaultChannel.send('görüşürüz '+username+'');
};
