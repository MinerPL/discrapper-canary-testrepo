var r = n(544891),
  i = n(904245),
  a = n(981631),
  s = n(689938);
t.Z = {
  changeNickname: (e, t, n, o) => r.tn.patch({
url: a.ANM.GUILD_MEMBER_NICK(e, n),
body: {
  nick: o
},
oldFormErrors: !0
  }).then(e => {
o = e.body.nick, i.Z.sendBotMessage(t, null != o && '' !== o ? s.Z.Messages.COMMAND_NICK_SUCCESS.plainFormat({
  nick: o
}) : s.Z.Messages.COMMAND_NICK_RESET);
  }, e => {
403 === e.status ? i.Z.sendBotMessage(t, s.Z.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : i.Z.sendBotMessage(t, s.Z.Messages.COMMAND_NICK_FAILURE);
  })
};