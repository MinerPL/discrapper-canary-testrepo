"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("83474"),
  r = n("245315"),
  o = n("556041"),
  u = n("103575"),
  d = n("592125"),
  c = n("368859");

function f(e, t) {
  if ((0, r.isPublicSystemMessage)(t)) return (0, s.jsx)(o.default, {});
  if ((0, c.default)(t)) {
    let {
      guild_id: e,
      channel_id: n,
      message_id: a
    } = t.messageReference;
    if (null != e) return (0, s.jsx)(i.default, {
      guildId: e,
      channelId: n,
      messageId: a
    })
  }
  if (null != t.interaction && "SENDING" === t.state) return (0, s.jsx)(s.Fragment, {});
  let n = d.default.getChannel(t.channel_id);
  return l()(null != n, "renderUserGuildPopout: channel should never be null"), (0, s.jsx)(u.default, {
    ...e,
    location: "renderUserGuildPopout",
    channelId: t.channel_id,
    messageId: t.id,
    guildId: n.guild_id,
    userId: t.author.id,
    user: null != t.webhookId ? t.author : void 0
  })
}