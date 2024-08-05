n.d(t, {
  Z: function() {
return L;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(592125),
  o = n(944486),
  l = n(246946),
  u = n(5192),
  c = n(621853),
  d = n(304704),
  _ = n(27144),
  E = n(741308),
  f = n(940730),
  h = n(483424),
  p = n(681837),
  m = n(678738),
  I = n(530),
  T = n(645410),
  g = n(357836),
  S = n(827313),
  A = n(580512),
  N = n(67152),
  v = n(579285),
  O = n(287612),
  R = n(228168),
  C = n(689938),
  y = n(335182),
  D = n(651761);

function L(e) {
  let {
user: t,
currentUser: n,
displayProfile: L,
guild: b,
isHovering: M,
onOpenProfile: P,
channelId: U,
onClose: w
  } = e, x = u.ZP.getName(null == b ? void 0 : b.id, U, t), G = (0, i.e7)([c.Z], () => {
var e;
return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  }), k = (0, i.e7)([
s.Z,
o.Z
  ], () => s.Z.getChannel(o.Z.getChannelId())), B = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation), {
newActivityCardsEnabled: F
  } = (0, d.Z)({
location: 'UserBotProfileBody'
  }), {
pastActivityEnabled: V
  } = (0, _.z)({
location: 'UserBotProfileBody'
  });
  return (0, r.jsxs)(a.Scroller, {
fade: !0,
className: y.body,
children: [
  (0, r.jsx)(I.Z, {
    user: t,
    profileType: R.y0.BITE_SIZE,
    onOpenProfile: P,
    nickname: x,
    pronouns: null == L ? void 0 : L.pronouns,
    tags: (0, r.jsx)(E.Z, {
      displayProfile: L,
      profileType: R.y0.BITE_SIZE,
      onClose: w
    }),
    nicknameIcons: (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(p.Z, {
          userId: t.id
        }),
        !B && (0, r.jsx)(S.Z, {
          userId: t.id,
          isHovering: M,
          onOpenProfile: P
        })
      ]
    })
  }),
  (0, r.jsx)(O.Z, {
    user: t,
    onOpenProfile: e => null == P ? void 0 : P({
      section: e
    })
  }),
  (0, r.jsxs)('div', {
    className: D.buttons,
    children: [
      (0, r.jsx)(T.Z, {
        user: t,
        className: D.button
      }),
      (0, r.jsx)(g.Z, {
        user: t,
        guildId: null == b ? void 0 : b.id,
        className: D.button
      })
    ]
  }),
  (0, r.jsx)(N.Z, {
    user: t,
    bio: null == L ? void 0 : L.bio,
    hidePersonalInformation: B,
    onClose: w
  }),
  F || V ? (0, r.jsx)(h.Z, {
    user: t,
    currentUser: n,
    onClose: w
  }) : (0, r.jsx)(A.Z, {
    user: t,
    guild: b,
    channelId: U,
    onClose: w
  }),
  (null == G ? void 0 : G.popularApplicationCommandIds) != null && null != k && (0, r.jsx)(f.Z, {
    applicationId: G.id,
    commandIds: G.popularApplicationCommandIds,
    channel: k,
    guildId: null == b ? void 0 : b.id,
    onClick: w
  }),
  null != b && (0, r.jsx)(m.Z, {
    heading: C.Z.Messages.ROLES,
    children: (0, r.jsx)(v.Z, {
      user: t,
      currentUser: n,
      guild: b
    })
  })
]
  });
}