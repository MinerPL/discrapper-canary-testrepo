n.d(t, {
  Z: function() {
return A;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(129861),
  l = n(607070),
  o = n(388905),
  c = n(1585),
  d = n(125988),
  u = n(43267),
  _ = n(522289),
  h = n(699516),
  E = n(546591),
  I = n(51144),
  m = n(998502),
  g = n(620924),
  p = n(332712),
  T = n(81471),
  S = n(689938),
  C = n(603174);
let f = e => {
let {
  userId: t
} = e, n = (0, p.O)(t);
return null == n || 0 === n.length ? (0, i.jsx)(a.Text, {
  className: C.mutualGuilds,
  variant: 'text-sm/normal',
  color: 'text-muted',
  children: S.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
}) : (0, i.jsxs)('div', {
  className: C.mutualGuildsContainer,
  children: [
    (0, i.jsx)(_.Z, {
      guilds: n,
      maxGuilds: 3,
      size: o.Vj.Sizes.SMOL,
      hideOverflowCount: !0
    }),
    (0, i.jsx)(a.Text, {
      className: C.mutualGuilds,
      variant: 'text-sm/normal',
      color: 'text-muted',
      children: S.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
        count: n.length
      })
    })
  ]
});
  },
  N = m.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  var t;
  let {
channel: n,
otherUser: o,
active: _
  } = e, m = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), p = (0, s.e7)([h.Z], () => null == o ? null : h.Z.getNickname(o.id)), A = !m && _, Z = (0, g.c)(n), {
avatarDecorationSrc: L
  } = (0, d.Z)({
user: o,
size: (0, c.y9)(a.AvatarSizes.SIZE_40),
onlyAnimateOnHover: !0
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(N, {
    className: C.avatar,
    src: (0, u.x)(n, 40, A),
    avatarDecoration: L,
    size: a.AvatarSizes.SIZE_40,
    'aria-label': null !== (t = null == o ? void 0 : o.username) && void 0 !== t ? t : S.Z.Messages.UNKNOWN_USER
  }),
  (0, i.jsxs)('div', {
    className: C.userPreview,
    children: [
      (0, i.jsxs)('div', {
        className: C.userContainerWithPreview,
        children: [
          (0, i.jsx)(r.Z, {
            nick: p,
            user: o,
            showAccountIdentifier: !0,
            className: C.tagContainer,
            usernameClass: C.username,
            discriminatorClass: null != I.ZP.getGlobalName(o) ? C.globalName : C.discriminator
          }),
          (0, i.jsx)(a.Text, {
            className: C.timestampWithPreview,
            color: 'text-muted',
            variant: 'text-xs/normal',
            children: Z
          })
        ]
      }),
      (0, i.jsx)(E.Z, {
        hoverText: (0, i.jsx)(T.Z, {
          channel: n
        }),
        forceHover: _,
        children: (0, i.jsx)(f, {
          userId: o.id
        })
      })
    ]
  })
]
  });
}