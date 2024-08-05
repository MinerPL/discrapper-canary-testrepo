n.d(t, {
  Z: function() {
return D;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(954138),
  l = n(979264),
  u = n(699516),
  c = n(246946),
  d = n(5192),
  _ = n(304704),
  E = n(27144),
  f = n(741308),
  h = n(483424),
  p = n(681837),
  m = n(91433),
  I = n(502762),
  T = n(530),
  g = n(827313),
  S = n(790711),
  A = n(580512),
  N = n(67152),
  v = n(579285),
  O = n(287612),
  R = n(228168),
  C = n(981631),
  y = n(335182);

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
  } = e, w = d.ZP.getName(null == L ? void 0 : L.id, P, t), x = (0, a.e7)([u.Z], () => u.Z.getRelationshipType(t.id)), G = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation), k = (0, o.Z)('username'), B = i.useMemo(() => ({
source: C.jXE.PROFILE_POPOUT,
tagUserId: t.id
  }), [t.id]), {
newActivityCardsEnabled: F
  } = (0, _.Z)({
location: 'BiteSizeProfileBody'
  }), {
pastActivityEnabled: V
  } = (0, E.z)({
location: 'BiteSizeProfileBody'
  });
  return (0, r.jsxs)(s.Scroller, {
fade: !0,
className: y.body,
children: [
  (0, r.jsx)(T.Z, {
    user: t,
    profileType: R.y0.BITE_SIZE,
    onOpenProfile: M,
    usernameIcon: t.hasAvatarForGuild(null == L ? void 0 : L.id) && (0, r.jsx)(S.Z, {
      user: t,
      nickname: w
    }),
    nickname: w,
    pronouns: null == D ? void 0 : D.pronouns,
    tags: (0, r.jsx)(f.Z, {
      displayProfile: D,
      profileType: R.y0.BITE_SIZE,
      onClose: U
    }),
    nicknameIcons: (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(p.Z, {
          userId: t.id
        }),
        !G && (0, r.jsx)(g.Z, {
          userId: t.id,
          isHovering: b,
          onOpenProfile: M
        })
      ]
    })
  }),
  x === C.OGo.PENDING_INCOMING && (0, r.jsx)(I.Z.Overlay, {
    children: (0, r.jsx)(m.Z, {
      user: t,
      guildId: null == L ? void 0 : L.id,
      channelId: P
    })
  }),
  t.id !== n.id && (0, r.jsx)(O.Z, {
    user: t,
    onOpenProfile: e => null == M ? void 0 : M({
      section: e
    })
  }),
  k && (0, r.jsx)(l.ZP, {
    userId: t.id,
    inline: !1,
    profileViewedAnalytics: B
  }),
  (0, r.jsx)(N.Z, {
    user: t,
    bio: null == D ? void 0 : D.bio,
    hidePersonalInformation: G,
    onClose: U
  }),
  F || V ? (0, r.jsx)(h.Z, {
    user: t,
    currentUser: n,
    onClose: U
  }) : (0, r.jsx)(A.Z, {
    user: t,
    guild: L,
    channelId: P,
    onClose: U
  }),
  null != L && (0, r.jsx)(v.Z, {
    user: t,
    currentUser: n,
    guild: L
  })
]
  });
}