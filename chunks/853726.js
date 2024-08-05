n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var s = n(442837),
  i = n(954138),
  l = n(979264),
  o = n(741308),
  a = n(530),
  c = n(790711),
  d = n(67152),
  u = n(271383),
  f = n(246946),
  m = n(654904),
  E = n(228168),
  p = n(335182);

function _(e) {
  var t;
  let {
user: n,
displayProfile: _,
guild: h,
pendingAvatar: I,
pendingNickname: g,
pendingGlobalName: v,
pendingBio: C,
pendingPronouns: x,
isTryItOutFlow: P,
hideBioSection: Z
  } = e, A = (0, s.e7)([u.ZP], () => null == h ? null : u.ZP.getMember(h.id, n.id)), T = (0, s.e7)([f.Z], () => f.Z.hidePersonalInformation), N = (0, i.Z)('ProfileCustomizationPreviewBody'), S = null == _ ? void 0 : null === (t = _.getPreviewBio(C)) || void 0 === t ? void 0 : t.value, j = null != x ? x : null == _ ? void 0 : _.pronouns, R = (0, m.Ly)({
pendingNickname: g,
pendingGlobalName: v,
user: n,
guildMember: A
  });
  return (0, r.jsxs)('div', {
inert: '',
className: p.body,
children: [
  (0, r.jsx)(a.Z, {
    user: n,
    profileType: E.y0.BITE_SIZE,
    usernameIcon: (() => {
      if (!(null != A))
        return;
      if (null !== I && !!(null != A.avatar || null != I))
        return (0, r.jsx)(c.Z, {
          user: n,
          nickname: R
        });
    })(),
    nickname: R,
    pronouns: j,
    isTryItOut: P,
    tags: (0, r.jsx)(o.Z, {
      displayProfile: _,
      profileType: E.y0.BITE_SIZE
    })
  }),
  N && (0, r.jsx)(l.ZP, {
    userId: n.id,
    inline: !1
  }),
  !Z && null != S && '' !== S && (0, r.jsx)(d.Z, {
    user: n,
    bio: S,
    hidePersonalInformation: T
  })
]
  });
}