n.d(t, {
  Z: function() {
return R;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(481060),
  s = n(954138),
  l = n(979264),
  u = n(699516),
  c = n(246946),
  d = n(5192),
  _ = n(741308),
  E = n(681837),
  f = n(91433),
  h = n(502762),
  p = n(530),
  m = n(827313),
  I = n(790711),
  T = n(580512),
  g = n(67152),
  S = n(579285),
  A = n(287612),
  N = n(228168),
  v = n(981631),
  O = n(335182);

function R(e) {
  let {
user: t,
currentUser: n,
displayProfile: R,
guild: C,
isHovering: y,
onOpenProfile: D,
channelId: L,
onClose: b
  } = e, M = d.ZP.getName(null == C ? void 0 : C.id, L, t), P = (0, a.e7)([u.Z], () => u.Z.getRelationshipType(t.id)), U = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation), w = (0, s.Z)('username'), x = i.useMemo(() => ({
source: v.jXE.PROFILE_POPOUT,
tagUserId: t.id
  }), [t.id]);
  return (0, r.jsxs)(o.Scroller, {
fade: !0,
className: O.body,
children: [
  (0, r.jsx)(p.Z, {
    user: t,
    profileType: N.y0.BITE_SIZE,
    onOpenProfile: D,
    usernameIcon: t.hasAvatarForGuild(null == C ? void 0 : C.id) && (0, r.jsx)(I.Z, {
      user: t,
      nickname: M
    }),
    nickname: M,
    pronouns: null == R ? void 0 : R.pronouns,
    tags: (0, r.jsx)(_.Z, {
      displayProfile: R,
      profileType: N.y0.BITE_SIZE,
      onClose: b
    }),
    nicknameIcons: (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(E.Z, {
          userId: t.id
        }),
        !U && (0, r.jsx)(m.Z, {
          userId: t.id,
          isHovering: y,
          onOpenProfile: D
        })
      ]
    })
  }),
  P === v.OGo.PENDING_INCOMING && (0, r.jsx)(h.Z.Overlay, {
    children: (0, r.jsx)(f.Z, {
      user: t,
      guildId: null == C ? void 0 : C.id,
      channelId: L
    })
  }),
  t.id !== n.id && (0, r.jsx)(A.Z, {
    user: t,
    onOpenProfile: e => null == D ? void 0 : D({
      section: e
    })
  }),
  w && (0, r.jsx)(l.ZP, {
    userId: t.id,
    inline: !1,
    profileViewedAnalytics: x
  }),
  (0, r.jsx)(g.Z, {
    user: t,
    bio: null == R ? void 0 : R.bio,
    hidePersonalInformation: U,
    onClose: b
  }),
  (0, r.jsx)(T.Z, {
    user: t,
    guild: C,
    channelId: L,
    onClose: b
  }),
  null != C && (0, r.jsx)(S.Z, {
    user: t,
    currentUser: n,
    guild: C,
    onOpenProfile: () => null == D ? void 0 : D({
      subsection: N.Tb.ROLES
    })
  })
]
  });
}