t.d(n, {
  Z: function() {
return S;
  }
});
var r = t(735250),
  i = t(470079),
  o = t(120356),
  l = t.n(o),
  u = t(442837),
  a = t(518738),
  s = t(786761),
  c = t(3148),
  d = t(753206),
  _ = t(594174),
  f = t(5192),
  E = t(792125),
  I = t(981631),
  g = t(689938),
  p = t(630787);

function S(e) {
  var n;
  let {
guildId: t,
role: o,
theme: S,
content: C = g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
className: T
  } = e, m = (0, u.e7)([_.default], () => _.default.getCurrentUser()), A = f.ZP.useName(t, null, m), N = (0, a.Kz)(o), h = i.useMemo(() => (0, s.e5)({
...(0, c.ZP)({
  channelId: '0',
  content: C,
  tts: void 0,
  type: void 0,
  messageReference: void 0,
  allowedMentions: void 0,
  author: m
}),
state: I.yb.SENT,
id: '0'
  }), [
m,
C
  ]), v = {
nick: A,
colorString: null !== (n = o.colorString) && void 0 !== n ? n : void 0
  };
  return (0, r.jsx)('div', {
className: l()((0, E.Q)(S), p.container, T),
children: (0, r.jsx)(d.Z, {
  hideTimestamp: !0,
  author: v,
  roleIcon: N,
  message: h,
  isGroupStart: !0,
  disableInteraction: !0
})
  });
}