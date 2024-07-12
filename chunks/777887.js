n.d(t, {
  Z: function() {
return C;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(592125),
  s = n(944486),
  l = n(246946),
  u = n(5192),
  c = n(621853),
  d = n(741308),
  _ = n(940730),
  E = n(681837),
  f = n(678738),
  h = n(530),
  p = n(645410),
  m = n(666665),
  I = n(827313),
  T = n(580512),
  g = n(67152),
  S = n(579285),
  A = n(287612),
  N = n(228168),
  v = n(689938),
  O = n(335182),
  R = n(651761);

function C(e) {
  let {
user: t,
currentUser: n,
displayProfile: C,
guild: y,
isHovering: D,
onOpenProfile: L,
channelId: b,
onClose: M
  } = e, P = u.ZP.getName(null == y ? void 0 : y.id, b, t), U = (0, i.e7)([c.Z], () => {
var e;
return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  }), w = (0, i.e7)([
o.Z,
s.Z
  ], () => o.Z.getChannel(s.Z.getChannelId())), x = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
  return (0, r.jsxs)(a.Scroller, {
fade: !0,
className: O.body,
children: [
  (0, r.jsx)(h.Z, {
    user: t,
    profileType: N.y0.BITE_SIZE,
    onOpenProfile: L,
    nickname: P,
    pronouns: null == C ? void 0 : C.pronouns,
    tags: (0, r.jsx)(d.Z, {
      displayProfile: C,
      profileType: N.y0.BITE_SIZE,
      onClose: M
    }),
    nicknameIcons: (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(E.Z, {
          userId: t.id
        }),
        !x && (0, r.jsx)(I.Z, {
          userId: t.id,
          isHovering: D,
          onOpenProfile: L
        })
      ]
    })
  }),
  (0, r.jsx)(A.Z, {
    user: t,
    onOpenProfile: e => null == L ? void 0 : L({
      section: e
    })
  }),
  (0, r.jsxs)('div', {
    className: R.buttons,
    children: [
      (0, r.jsx)(p.Z, {
        user: t,
        className: R.button
      }),
      (0, r.jsx)(m.c, {
        user: t,
        guildId: null == y ? void 0 : y.id,
        className: R.button
      })
    ]
  }),
  (0, r.jsx)(g.Z, {
    user: t,
    bio: null == C ? void 0 : C.bio,
    hidePersonalInformation: x,
    onClose: M
  }),
  (0, r.jsx)(T.Z, {
    user: t,
    guild: y,
    channelId: b,
    onClose: M
  }),
  (null == U ? void 0 : U.popularApplicationCommandIds) != null && null != w && (0, r.jsx)(_.Z, {
    applicationId: U.id,
    commandIds: U.popularApplicationCommandIds,
    channel: w,
    guildId: null == y ? void 0 : y.id,
    onClick: M
  }),
  null != y && (0, r.jsx)(f.Z, {
    title: v.Z.Messages.ROLES,
    children: (0, r.jsx)(S.Z, {
      user: t,
      currentUser: n,
      guild: y,
      onOpenProfile: () => null == L ? void 0 : L({
        subsection: N.Tb.ROLES
      })
    })
  })
]
  });
}