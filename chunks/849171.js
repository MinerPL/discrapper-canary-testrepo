n.d(t, {
  OV: function() {
return k;
  },
  ZP: function() {
return w;
  }
}), n(47120);
var i, a, l = n(735250),
  s = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(442837),
  d = n(481060),
  u = n(2052),
  h = n(317381),
  p = n(638880),
  m = n(613611),
  _ = n(527805),
  f = n(716600),
  E = n(952561),
  C = n(778569),
  g = n(563218),
  I = n(513202),
  x = n(318891),
  T = n(884338),
  v = n(719296),
  N = n(958185),
  S = n(100527),
  Z = n(906732),
  A = n(835473),
  M = n(522474),
  b = n(314897),
  R = n(819640),
  j = n(594174),
  L = n(823379),
  P = n(5192),
  O = n(689938),
  y = n(709139);
(a = i || (i = {}))[a.SMALL = 0] = 'SMALL', a[a.MEDIUM = 1] = 'MEDIUM', a[a.LARGE = 2] = 'LARGE';
let D = ['embedded_background'];

function k(e) {
  let {
avatarSize: t,
guildId: n,
channelId: i,
users: a
  } = e, s = null != t ? t : d.AvatarSizes.SIZE_32, r = (0, d.getAvatarSize)(s);
  return (0, l.jsx)(T.Z, {
size: r,
guildId: n,
users: a,
max: 4,
renderUser: e => {
  if (null == e)
    return null;
  let t = P.ZP.getName(n, i, e);
  return (0, l.jsx)(d.TooltipContainer, {
    text: t,
    color: d.TooltipColors.GREY,
    children: (0, l.jsx)('img', {
      src: e.getAvatarURL(n, r),
      alt: t,
      className: y.avatar
    }, e.id)
  }, e.id);
}
  });
}

function U(e) {
  var t, n, i, a;
  let {
participants: s,
application: r,
currentEmbeddedApplication: f,
channel: E,
width: C
  } = e;
  let g = (i = C) > 400 ? 2 : i > 300 ? 1 : 0;
  let [x] = (a = C) > 400 ? [
d.AvatarSizes.SIZE_56,
56
  ] : a > 300 ? [
d.AvatarSizes.SIZE_32,
32
  ] : [
d.AvatarSizes.SIZE_24,
24
  ], T = (0, c.Wu)([
j.default,
b.default
  ], () => Array.from(s).map(e => (0, m.J)(e, b.default) ? null : j.default.getUser(e.userId)).filter(L.lm)), v = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(E.id).find(e => e.applicationId === r.id)), {
analyticsLocations: N
  } = (0, Z.ZP)(), S = (0, u.O)(), A = P.ZP.getName(E.getGuildId(), E.id, null == T ? void 0 : T[0]), M = (0, _.s5)({
userId: null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
channelId: E.id,
application: r
  }) === _.Fw.CAN_JOIN, R = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0;
  return (0, l.jsxs)('div', {
className: y.splash,
children: [
  (0, l.jsx)(k, {
    avatarSize: x,
    guildId: R,
    channelId: E.id,
    users: T
  }),
  (0, l.jsx)(d.Text, {
    className: o()(y.subheader, {
      [y.small]: 0 === g,
      [y.medium]: 1 === g
    }),
    variant: 'text-sm/normal',
    children: T.length > 1 ? O.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
      username: A,
      count: T.length - 1
    }) : O.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
      username: A
    })
  }),
  (0, l.jsx)(d.Text, {
    className: o()(y.header, {
      [y.small]: 0 === g,
      [y.medium]: 1 === g
    }),
    variant: 'text-sm/normal',
    children: r.name
  }),
  (0, l.jsx)('div', {
    className: y.buttons,
    children: M ? (0, l.jsx)(d.Button, {
      onClick: function(e) {
        if (e.stopPropagation(), null != v)
          (0, p.Z)({
            applicationId: v.applicationId,
            currentEmbeddedApplication: f,
            activityChannelId: E.id,
            locationObject: S.location,
            embeddedActivitiesManager: I.Z,
            analyticsLocations: N
          });
      },
      size: function(e) {
        switch (e) {
          case 2:
            return d.Button.Sizes.LARGE;
          case 1:
            return d.Button.Sizes.MEDIUM;
          case 0:
            return d.Button.Sizes.SMALL;
        }
      }(g),
      className: y.button,
      color: d.Button.Colors.PRIMARY,
      children: O.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
    }) : null
  })
]
  });
}

function w(e) {
  let {
participant: t,
width: n,
selected: i,
interactible: a,
channel: r
  } = e, {
analyticsLocations: o
  } = (0, Z.ZP)(S.Z.ACTIVITY_TILE), {
id: d
  } = t, u = (0, f.Z)(), h = (null == u ? void 0 : u.channelId) === r.id && u.applicationId === d, p = (0, E.Z)(), [m] = (0, A.Z)([d]), {
url: _
  } = (0, C.Z)({
applicationId: d,
names: D,
size: 1024
  }), I = !i && h, T = !h, b = !h && !i, j = (0, c.e7)([
R.Z,
M.Z
  ], () => (0, N.Z)({
LayerStore: R.Z,
PopoutWindowStore: M.Z
  }));
  return s.useEffect(() => {
if (I && null != u && !j) {
  let e = (0, v.Z)(u.channelId, u.applicationId);
  (0, x.jy)(e);
}
  }, [
I,
u,
j
  ]), (0, l.jsx)(Z.Gt, {
value: o,
children: (0, l.jsx)('div', {
  className: y.container,
  children: (0, l.jsxs)(l.Fragment, {
    children: [
      I && (0, l.jsx)(g.Z, {
        className: y.iframe,
        embedId: (0, v.Z)(r.id, d)
      }),
      T && null != m && null != _ && '' !== _ ? (0, l.jsx)('img', {
        className: y.splashImage,
        alt: m.name,
        src: _
      }) : null,
      b && null != m && (0, l.jsx)(U, {
        width: n,
        channel: r,
        participants: t.participants,
        application: m,
        currentEmbeddedApplication: p
      }),
      a || T ? null : (0, l.jsx)('div', {
        className: y.clickShield
      })
    ]
  })
})
  });
}