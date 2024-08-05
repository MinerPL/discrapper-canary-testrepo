n.d(t, {
  OV: function() {
return k;
  },
  ZP: function() {
return w;
  }
}), n(47120);
var i, a, s = n(735250),
  l = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(2052),
  h = n(317381),
  p = n(638880),
  m = n(613611),
  _ = n(527805),
  f = n(716600),
  E = n(952561),
  g = n(778569),
  C = n(563218),
  I = n(513202),
  x = n(318891),
  T = n(884338),
  N = n(719296),
  v = n(958185),
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
  } = e, l = null != t ? t : u.AvatarSizes.SIZE_32, r = (0, u.getAvatarSize)(l);
  return (0, s.jsx)(T.Z, {
size: r,
guildId: n,
users: a,
max: 4,
renderUser: e => {
  if (null == e)
    return null;
  let t = P.ZP.getName(n, i, e);
  return (0, s.jsx)(u.TooltipContainer, {
    text: t,
    color: u.TooltipColors.GREY,
    children: (0, s.jsx)('img', {
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
participants: l,
application: r,
currentEmbeddedApplication: f,
channel: E,
width: g
  } = e;
  let C = (i = g) > 400 ? 2 : i > 300 ? 1 : 0;
  let [x] = (a = g) > 400 ? [
u.AvatarSizes.SIZE_56,
56
  ] : a > 300 ? [
u.AvatarSizes.SIZE_32,
32
  ] : [
u.AvatarSizes.SIZE_24,
24
  ], T = (0, c.Wu)([
j.default,
b.default
  ], () => Array.from(l).map(e => (0, m.J)(e, b.default) ? null : j.default.getUser(e.userId)).filter(L.lm)), N = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(E.id).find(e => e.applicationId === r.id)), {
analyticsLocations: v
  } = (0, Z.ZP)(), S = (0, d.O)(), A = P.ZP.getName(E.getGuildId(), E.id, null == T ? void 0 : T[0]), M = (0, _.s5)({
userId: null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
channelId: E.id,
application: r
  }) === _.Fw.CAN_JOIN, R = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0;
  return (0, s.jsxs)('div', {
className: y.splash,
children: [
  (0, s.jsx)(k, {
    avatarSize: x,
    guildId: R,
    channelId: E.id,
    users: T
  }),
  (0, s.jsx)(u.Text, {
    className: o()(y.subheader, {
      [y.small]: 0 === C,
      [y.medium]: 1 === C
    }),
    variant: 'text-sm/normal',
    children: T.length > 1 ? O.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
      username: A,
      count: T.length - 1
    }) : O.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
      username: A
    })
  }),
  (0, s.jsx)(u.Text, {
    className: o()(y.header, {
      [y.small]: 0 === C,
      [y.medium]: 1 === C
    }),
    variant: 'text-sm/normal',
    children: r.name
  }),
  (0, s.jsx)('div', {
    className: y.buttons,
    children: M ? (0, s.jsx)(u.Button, {
      onClick: function(e) {
        if (e.stopPropagation(), null != N)
          (0, p.Z)({
            applicationId: N.applicationId,
            currentEmbeddedApplication: f,
            activityChannelId: E.id,
            locationObject: S.location,
            embeddedActivitiesManager: I.Z,
            analyticsLocations: v
          });
      },
      size: function(e) {
        switch (e) {
          case 2:
            return u.Button.Sizes.LARGE;
          case 1:
            return u.Button.Sizes.MEDIUM;
          case 0:
            return u.Button.Sizes.SMALL;
        }
      }(C),
      className: y.button,
      color: u.Button.Colors.PRIMARY,
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
id: u
  } = t, d = (0, f.Z)(), h = (null == d ? void 0 : d.channelId) === r.id && d.applicationId === u, p = (0, E.Z)(), [m] = (0, A.Z)([u]), {
url: _
  } = (0, g.Z)({
applicationId: u,
names: D,
size: 1024
  }), I = !i && h, T = !h, b = !h && !i, j = (0, c.e7)([
R.Z,
M.Z
  ], () => (0, v.Z)({
LayerStore: R.Z,
PopoutWindowStore: M.Z
  }));
  return l.useEffect(() => {
if (I && null != d && !j) {
  let e = (0, N.Z)(d.channelId, d.applicationId);
  (0, x.jy)(e);
}
  }, [
I,
d,
j
  ]), (0, s.jsx)(Z.Gt, {
value: o,
children: (0, s.jsx)('div', {
  className: y.container,
  children: (0, s.jsxs)(s.Fragment, {
    children: [
      I && (0, s.jsx)(C.Z, {
        className: y.iframe,
        embedId: (0, N.Z)(r.id, u)
      }),
      T && null != m && null != _ && '' !== _ ? (0, s.jsx)('img', {
        className: y.splashImage,
        alt: m.name,
        src: _
      }) : null,
      b && null != m && (0, s.jsx)(U, {
        width: n,
        channel: r,
        participants: t.participants,
        application: m,
        currentEmbeddedApplication: p
      }),
      a || T ? null : (0, s.jsx)('div', {
        className: y.clickShield
      })
    ]
  })
})
  });
}