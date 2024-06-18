"use strict";
var i = n(735250);
n(470079);
var r = n(239091),
  s = n(644956),
  o = n(819366),
  a = n(592125);
t.Z = {
  handleUserContextMenu(e, t, s, o) {
    let l = a.Z.getChannel(t);
    null != l && (0, r.jW)(o, async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("71580")]).then(n.bind(n, 757387));
      return n => (0, i.jsx)(t, {
        ...n,
        user: e,
        channel: l,
        guildId: s
      })
    })
  },
  react(e, t, n) {
    let {
      userId: r,
      channelId: a,
      parsedUserId: l,
      roleId: u,
      roleName: _,
      viewingChannelId: d
    } = e;
    return null == r && (null != u || "@everyone" === _ || "@here" === _) ? (0, i.jsx)(s.Z, {
      inlinePreview: n.formatInline,
      ...e,
      children: t(e.content, n)
    }, n.key) : (0, i.jsx)(o.Z, {
      className: "mention",
      userId: r,
      channelId: a,
      viewingChannelId: d,
      parsedUserId: l,
      content: t(e.content, n),
      inlinePreview: n.noStyleAndInteraction
    }, n.key)
  }
}