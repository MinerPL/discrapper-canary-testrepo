"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  o = n("446674"),
  u = n("405645"),
  a = n("692038"),
  c = n("815297"),
  d = n("291655"),
  f = n("697218"),
  E = n("387111"),
  _ = n("439932"),
  h = n("49111"),
  p = n("782340"),
  S = n("515476");

function m(e) {
  var t;
  let {
    guildId: n,
    role: r,
    theme: m,
    content: M = p.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: T
  } = e, v = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), L = E.default.useName(n, null, v), C = (0, u.getRoleIconProps)(r), I = i.useMemo(() => (0, a.createMessageRecord)({
    ...(0, c.default)({
      channelId: "0",
      content: M,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: v
    }),
    state: h.MessageStates.SENT,
    id: "0"
  }), [v, M]), A = {
    nick: L,
    colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
  };
  return (0, l.jsx)("div", {
    className: s((0, _.getThemeClass)(m), S.container, T),
    children: (0, l.jsx)(d.default, {
      hideTimestamp: !0,
      author: A,
      roleIcon: C,
      message: I,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}