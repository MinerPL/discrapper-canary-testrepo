n.d(s, {
  Z: function() {
return S;
  }
});
var i = n(735250);
n(470079);
var t = n(442837),
  l = n(699516),
  o = n(5192),
  a = n(741308),
  r = n(681837),
  d = n(91433),
  c = n(502762),
  u = n(530),
  _ = n(616140),
  I = n(107194),
  f = n(228168),
  E = n(981631),
  m = n(392214);

function S(e) {
  var s;
  let {
user: n,
currentUser: S,
channelId: x,
displayProfile: v,
initialSection: Z,
initialSubsection: h,
friendToken: p,
onClose: T
  } = e, g = (0, t.e7)([l.Z], () => l.Z.getRelationshipType(n.id)), N = (0, I.Z)({
user: n,
currentUser: S
  });
  return (0, i.jsxs)('div', {
className: m.body,
children: [
  (0, i.jsx)(u.Z, {
    user: n,
    profileType: f.y0.FULL_SIZE,
    nickname: o.ZP.getName(null == v ? void 0 : v.guildId, x, n),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, i.jsx)(r.Z, {
      userId: n.id
    }),
    tags: (0, i.jsx)(a.Z, {
      displayProfile: v,
      profileType: f.y0.FULL_SIZE,
      onClose: T
    })
  }),
  g === E.OGo.PENDING_INCOMING && (0, i.jsx)(c.Z.Overlay, {
    className: m.friendRequestBannerOverlay,
    children: (0, i.jsx)(d.Z, {
      user: n,
      guildId: null !== (s = null == v ? void 0 : v.guildId) && void 0 !== s ? s : void 0,
      channelId: x,
      friendToken: p,
      className: m.friendRequestBanner
    })
  }),
  (0, i.jsx)(c.Z.Overlay, {
    className: m.overlay,
    children: (0, i.jsx)(_.Z, {
      user: n,
      currentUser: S,
      displayProfile: v,
      items: N,
      initialSection: Z,
      initialSubsection: h,
      onClose: T
    })
  })
]
  });
}