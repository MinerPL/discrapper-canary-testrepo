i.d(n, {
  Z: function() {
return Z;
  }
});
var s = i(735250);
i(470079);
var l = i(442837),
  o = i(699516),
  t = i(5192),
  r = i(642113),
  a = i(741308),
  d = i(681837),
  c = i(91433),
  u = i(502762),
  I = i(530),
  _ = i(616140),
  f = i(107194),
  E = i(228168),
  m = i(981631),
  S = i(505451);

function Z(e) {
  var n;
  let {
user: i,
currentUser: Z,
channelId: x,
displayProfile: v,
initialSection: h,
initialSubsection: p,
friendToken: T,
onClose: g
  } = e, N = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(i.id)), {
originalFriendingEnabled: C,
improvedFriendingEnabled: j
  } = (0, r.V)({
location: 'SimplifiedUserProfileModalBody'
  }), A = (0, f.Z)({
user: i,
currentUser: Z
  });
  return (0, s.jsxs)('div', {
className: S.body,
children: [
  (0, s.jsx)(I.Z, {
    user: i,
    profileType: E.y0.FULL_SIZE,
    nickname: t.ZP.getName(null == v ? void 0 : v.guildId, x, i),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, s.jsx)(d.Z, {
      userId: i.id
    }),
    tags: (0, s.jsx)(a.Z, {
      displayProfile: v,
      profileType: E.y0.FULL_SIZE,
      onClose: g
    })
  }),
  (j || C) && N === m.OGo.PENDING_INCOMING && (0, s.jsx)(u.Z.Overlay, {
    className: S.friendRequestBannerOverlay,
    children: (0, s.jsx)(c.Z, {
      user: i,
      guildId: null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n ? n : void 0,
      channelId: x,
      friendToken: T,
      className: S.friendRequestBanner
    })
  }),
  (0, s.jsx)(u.Z.Overlay, {
    className: S.overlay,
    children: (0, s.jsx)(_.Z, {
      user: i,
      currentUser: Z,
      displayProfile: v,
      items: A,
      initialSection: h,
      initialSubsection: p,
      onClose: g
    })
  })
]
  });
}