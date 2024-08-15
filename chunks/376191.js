n.d(t, {
  Z: function() {
return A;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(129861),
  l = n(607070),
  o = n(570928),
  c = n(388905),
  d = n(1585),
  u = n(125988),
  _ = n(43267),
  E = n(522289),
  h = n(699516),
  m = n(51144),
  I = n(998502),
  g = n(620924),
  p = n(332712),
  T = n(81471),
  S = n(689938),
  f = n(867712);
let C = e => {
let {
  userId: t
} = e, n = (0, p.O)(t);
return null == n || 0 === n.length ? (0, i.jsx)(s.Text, {
  className: f.mutualGuilds,
  variant: 'text-sm/normal',
  color: 'text-muted',
  children: S.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
}) : (0, i.jsxs)('div', {
  className: f.mutualGuildsContainer,
  children: [
    (0, i.jsx)(E.Z, {
      guilds: n,
      maxGuilds: 3,
      size: c.Vj.Sizes.SMOL,
      hideOverflowCount: !0
    }),
    (0, i.jsx)(s.Text, {
      className: f.mutualGuilds,
      variant: 'text-sm/normal',
      color: 'text-muted',
      children: S.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
        count: n.length
      })
    })
  ]
});
  },
  N = I.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function A(e) {
  var t;
  let {
channel: n,
otherUser: c,
active: E
  } = e, I = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), p = (0, a.e7)([h.Z], () => null == c ? null : h.Z.getNickname(c.id)), A = !I && E, v = (0, g.c)(n), {
avatarDecorationSrc: Z
  } = (0, u.Z)({
user: c,
size: (0, d.y9)(s.AvatarSizes.SIZE_40),
onlyAnimateOnHover: !0
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(N, {
    className: f.avatar,
    src: (0, _.x)(n, 40, A),
    avatarDecoration: Z,
    size: s.AvatarSizes.SIZE_40,
    'aria-label': null !== (t = null == c ? void 0 : c.username) && void 0 !== t ? t : S.Z.Messages.UNKNOWN_USER
  }),
  (0, i.jsxs)('div', {
    className: f.userPreview,
    children: [
      (0, i.jsxs)('div', {
        className: f.userContainerWithPreview,
        children: [
          (0, i.jsx)(r.Z, {
            nick: p,
            user: c,
            showAccountIdentifier: !0,
            className: f.tagContainer,
            usernameClass: f.username,
            discriminatorClass: null != m.ZP.getGlobalName(c) ? f.globalName : f.discriminator
          }),
          (0, i.jsx)(s.Text, {
            className: f.timestampWithPreview,
            color: 'text-muted',
            variant: 'text-xs/normal',
            children: v
          })
        ]
      }),
      (0, i.jsx)(o.Z, {
        hoverText: (0, i.jsx)(T.Z, {
          channel: n
        }),
        forceHover: E,
        children: (0, i.jsx)(C, {
          userId: c.id
        })
      })
    ]
  })
]
  });
}