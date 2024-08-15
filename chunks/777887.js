n.d(t, {
  Z: function() {
return D;
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
  d = n(27144),
  _ = n(741308),
  E = n(940730),
  f = n(483424),
  h = n(681837),
  p = n(678738),
  m = n(530),
  I = n(645410),
  T = n(357836),
  g = n(827313),
  S = n(580512),
  A = n(67152),
  N = n(579285),
  v = n(287612),
  O = n(228168),
  R = n(689938),
  C = n(122269),
  y = n(155330);

function D(e) {
  let {
user: t,
currentUser: n,
displayProfile: D,
guild: L,
isHovering: b,
onOpenProfile: M,
channelId: P,
onClose: U
  } = e, w = u.ZP.getName(null == L ? void 0 : L.id, P, t), x = (0, i.e7)([c.Z], () => {
var e;
return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  }), G = (0, i.e7)([
s.Z,
o.Z
  ], () => s.Z.getChannel(o.Z.getChannelId())), k = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation), {
newActivityCardsEnabled: B
  } = (0, d.z)({
location: 'UserBotProfileBody'
  });
  return (0, r.jsxs)(a.Scroller, {
fade: !0,
className: C.body,
children: [
  (0, r.jsx)(m.Z, {
    user: t,
    profileType: O.y0.BITE_SIZE,
    onOpenProfile: M,
    nickname: w,
    pronouns: null == D ? void 0 : D.pronouns,
    tags: (0, r.jsx)(_.Z, {
      displayProfile: D,
      profileType: O.y0.BITE_SIZE,
      onClose: U
    }),
    nicknameIcons: (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(h.Z, {
          userId: t.id
        }),
        !k && (0, r.jsx)(g.Z, {
          userId: t.id,
          isHovering: b,
          onOpenProfile: M
        })
      ]
    })
  }),
  (0, r.jsx)(v.Z, {
    user: t,
    onOpenProfile: e => null == M ? void 0 : M({
      section: e
    })
  }),
  (0, r.jsxs)('div', {
    className: y.buttons,
    children: [
      (0, r.jsx)(I.Z, {
        user: t,
        className: y.button
      }),
      (0, r.jsx)(T.Z, {
        user: t,
        guildId: null == L ? void 0 : L.id,
        className: y.button
      })
    ]
  }),
  (0, r.jsx)(A.Z, {
    user: t,
    bio: null == D ? void 0 : D.bio,
    hidePersonalInformation: k,
    onClose: U
  }),
  B ? (0, r.jsx)(f.Z, {
    user: t,
    currentUser: n,
    onClose: U,
    className: C.activity
  }) : (0, r.jsx)(S.Z, {
    user: t,
    guild: L,
    channelId: P,
    onClose: U
  }),
  (null == x ? void 0 : x.popularApplicationCommandIds) != null && null != G && (0, r.jsx)(E.Z, {
    applicationId: x.id,
    commandIds: x.popularApplicationCommandIds,
    channel: G,
    guildId: null == L ? void 0 : L.id,
    onClick: U
  }),
  null != L && (0, r.jsx)(p.Z, {
    heading: R.Z.Messages.ROLES,
    children: (0, r.jsx)(N.Z, {
      user: t,
      currentUser: n,
      guild: L
    })
  })
]
  });
}