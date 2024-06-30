var r = n(544891), i = n(904245), a = n(981631), o = n(689938);
t.Z = {
    changeNickname: (e, t, n, s) => r.tn.patch({
        url: a.ANM.GUILD_MEMBER_NICK(e, n),
        body: { nick: s },
        oldFormErrors: !0
    }).then(e => {
        s = e.body.nick, i.Z.sendBotMessage(t, null != s && '' !== s ? o.Z.Messages.COMMAND_NICK_SUCCESS.plainFormat({ nick: s }) : o.Z.Messages.COMMAND_NICK_RESET);
    }, e => {
        403 === e.status ? i.Z.sendBotMessage(t, o.Z.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : i.Z.sendBotMessage(t, o.Z.Messages.COMMAND_NICK_FAILURE);
    })
};
