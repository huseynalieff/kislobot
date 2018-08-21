module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.sendMessage('hg '+username+'');
};
