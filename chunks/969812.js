"use strict";
var i = n(544891),
  r = n(904245),
  s = n(981631),
  o = n(689938);
t.Z = {
  changeNickname: (e, t, n, a) => i.tn.patch({
    url: s.ANM.GUILD_MEMBER_NICK(e, n),
    body: {
      nick: a
    },
    oldFormErrors: !0
  }).then(e => {
    a = e.body.nick, r.Z.sendBotMessage(t, null != a && "" !== a ? o.Z.Messages.COMMAND_NICK_SUCCESS.plainFormat({
      nick: a
    }) : o.Z.Messages.COMMAND_NICK_RESET)
  }, e => {
    403 === e.status ? r.Z.sendBotMessage(t, o.Z.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : r.Z.sendBotMessage(t, o.Z.Messages.COMMAND_NICK_FAILURE)
  })
}