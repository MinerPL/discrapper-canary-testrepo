"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
});
var l = a("735250");
a("470079");
var n = a("392711"),
  s = a.n(n),
  i = a("442837"),
  d = a("481060"),
  r = a("336197"),
  u = a("111583"),
  o = a("594174"),
  c = a("823379"),
  f = a("709054"),
  m = a("580079"),
  h = a("679184"),
  g = a("981631"),
  E = a("689938"),
  _ = a("37007");

function I(e) {
  let {
    guildId: t,
    channel: a,
    trackChannelClick: n
  } = e, I = (0, i.useStateFromStoresArray)([m.default], () => {
    var e;
    return null !== (e = m.default.getChannelMessageData(a.id)) && void 0 !== e ? e : []
  }), x = s().uniq(s().map(I, "userId")), S = (0, i.useStateFromStoresArray)([o.default], () => x.map(e => o.default.getUser(e))), v = (0, i.useStateFromStores)([u.default], () => Object.keys(u.default.getTypingUsers(a.id)).length > 0, [a.id]), C = I.length < m.MAX_STORED_MESSAGES ? E.default.Messages.ACTIVE_CHANNELS_FEW_MESSAGES.format({
    count: I.length
  }) : E.default.Messages.ACTIVE_CHANNELS_MANY_MESSAGES, N = v ? (0, l.jsx)("div", {
    className: _.typingIndicator,
    children: (0, l.jsx)(d.Dots, {
      className: _.__invalid_ellipsis,
      dotRadius: 2,
      themed: !0
    })
  }) : null;
  return (0, l.jsx)(h.ActiveChannelBase, {
    guildId: t,
    channel: a,
    usersInSummary: S.filter(c.isNotNullish),
    text: C,
    activityIndicator: N,
    onChannelClick: () => {
      n(a), (0, r.default)(g.Routes.CHANNEL(a.guild_id, a.id, f.default.fromTimestamp(Date.now())))
    }
  })
}