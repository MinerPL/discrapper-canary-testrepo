var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(481060),
  l = n(246946),
  u = n(467679),
  c = n(180828),
  d = n(51144),
  _ = n(689938),
  E = n(389765);
let f = e => {
  let {
primary: t,
secondary: n,
botType: i,
botVerified: o,
discriminatorClass: l,
className: c,
usernameClass: d,
color: f,
botClass: h,
showStreamerModeTooltip: p
  } = e;
  return (0, r.jsxs)('div', {
className: a()(E.info, c),
children: [
  (0, r.jsx)(s.Tooltip, {
    text: _.Z.Messages.STREAMER_MODE_ENABLED,
    shouldShow: p,
    'aria-label': !!p && void 0,
    children: e => (0, r.jsx)('span', {
      ...e,
      className: a()(E.__invalid_username, d),
      style: null != f ? {
        color: f
      } : void 0,
      children: t
    })
  }),
  null != n ? (0, r.jsx)('span', {
    className: a()(E.infoSpacing, l),
    children: n
  }) : void 0,
  null != i && (0, r.jsx)(u.Z, {
    type: i,
    className: a()(E.infoSpacing, h),
    verified: o
  })
]
  });
};
t.Z = e => {
  let {
user: t,
nick: n,
forceUsername: i,
showAccountIdentifier: a,
overrideDiscriminator: s,
forcePomelo: u,
hideBotTag: _ = !1,
hideDiscriminator: E = !1,
...h
  } = e, p = (0, o.e7)([l.Z], () => l.Z.hidePersonalInformation), m = p || E || t.isNonUserBot(), I = t.toString(), T = _ ? null : function(e) {
if (e.isSystemUser())
  return c.J.SYSTEM_DM;
if (e.isClyde())
  return c.J.AI;
if (e.bot)
  return c.J.BOT;
return null;
  }(t), g = t.isVerifiedBot(), S = d.ZP.getName(t), A = i ? I : null != n ? n : S, N = t.isPomelo() || u;
  if (N || A !== I) {
let e = A === I && N && i ? d.ZP.getUserTag(t, {
    forcePomelo: u
  }) : A,
  n = a && e !== '@'.concat(I) ? d.ZP.getUserTag(t) : void 0;
return (0, r.jsx)(f, {
  primary: e,
  secondary: n,
  botType: T,
  botVerified: g,
  showStreamerModeTooltip: p && e !== S,
  ...h
});
  }
  return (0, r.jsx)(c.Z, {
name: A,
botType: T,
botVerified: g,
discriminator: m || A !== I ? null : null != s ? s : t.discriminator,
...h
  });
};