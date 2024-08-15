n.d(t, {
  Z: function() {
return I;
  }
}), n(789020), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(243814),
  o = n(993365),
  l = n(481060),
  u = n(979200),
  c = n(630388),
  d = n(709054),
  _ = n(941532),
  E = n(713938),
  f = n(981631),
  h = n(689938),
  p = n(359850);
let m = e => {
  switch (e) {
case u.ZC.IP_LOCATION:
  return l.GlobeEarthIcon;
case u.ZC.DISPLAYS_ADVERTISEMENTS:
  return l.EmbedIcon;
default:
  return null;
  }
};

function I(e) {
  var t;
  let n, {
  application: i,
  scopes: a,
  redirectUri: o,
  approximateGuildCount: I,
  isEmbeddedFlow: g,
  disclosures: S
} = e,
A = new Date(d.default.extractTimestamp(i.id)),
N = (0, E.W3)(a),
v = (0, c.yE)(null !== (t = i.flags) && void 0 !== t ? t : 0, f.udG.EMBEDDED);
  if (null != o && !v && !g)
try {
  let e = new URL(o);
  n = null != e.host && e.host.length > 0 ? e.origin : e.href;
} catch (e) {
  n = null;
}
  return (0, r.jsxs)('div', {
className: p.applicationDetails,
children: [
  null != n ? (0, r.jsx)(T, {
    className: p.redirectWarning,
    icon: l.LinkIcon,
    text: h.Z.Messages.OAUTH2_DETAILS_REDIRECT.format({
      origin: n
    })
  }) : null,
  (0, r.jsx)(T, {
    icon: l.LockIcon,
    text: (0, _.i)(i)
  }),
  (0, r.jsx)(T, {
    icon: l.ClockIcon,
    text: h.Z.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
      date: A
    })
  }),
  a.includes(s.x.BOT) && null != I ? (0, r.jsx)(T, {
    icon: l.RobotIcon,
    text: h.Z.Messages.OAUTH2_DETAILS_GUILDS.format({
      guildCount: I
    })
  }) : null,
  (0, r.jsx)(T, {
    icon: l.ShieldIcon,
    text: N
  }),
  null != S ? S.map(e => {
    let t = (0, u.PM)(e),
      n = m(e);
    return null != n && null != t ? (0, r.jsx)(T, {
      icon: n,
      text: t
    }) : null;
  }) : null
]
  });
}

function T(e) {
  let {
icon: t,
text: n,
className: i
  } = e;
  return (0, r.jsxs)('div', {
className: a()(p.entry, i),
children: [
  (0, r.jsx)(t, {
    className: p.entryIcon,
    color: 'currentColor'
  }),
  (0, r.jsx)(o.x, {
    variant: 'text-xs/medium',
    color: 'text-muted',
    className: p.entryInner,
    children: n
  })
]
  });
}