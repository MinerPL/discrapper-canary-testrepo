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
  a = n(741308),
  o = n(530),
  c = n(790711),
  d = n(67152),
  u = n(271383),
  f = n(246946),
  m = n(654904),
  E = n(228168),
  p = n(122269);

function _(e) {
  var t;
  let {
user: n,
displayProfile: _,
guild: h,
pendingAvatar: g,
pendingNickname: I,
pendingGlobalName: v,
pendingBio: C,
pendingPronouns: x,
isTryItOutFlow: P,
hideBioSection: A
  } = e, Z = (0, s.e7)([u.ZP], () => null == h ? null : u.ZP.getMember(h.id, n.id)), T = (0, s.e7)([f.Z], () => f.Z.hidePersonalInformation), N = (0, i.Z)('ProfileCustomizationPreviewBody'), S = null == _ ? void 0 : null === (t = _.getPreviewBio(C)) || void 0 === t ? void 0 : t.value, j = null != x ? x : null == _ ? void 0 : _.pronouns, R = (0, m.Ly)({
pendingNickname: I,
pendingGlobalName: v,
user: n,
guildMember: Z
  });
  return (0, r.jsxs)('div', {
inert: '',
className: p.body,
children: [
  (0, r.jsx)(o.Z, {
    user: n,
    profileType: E.y0.BITE_SIZE,
    usernameIcon: (() => {
      if (!(null != Z))
        return;
      if (null !== g && !!(null != Z.avatar || null != g))
        return (0, r.jsx)(c.Z, {
          user: n,
          nickname: R
        });
    })(),
    nickname: R,
    pronouns: j,
    isTryItOut: P,
    tags: (0, r.jsx)(a.Z, {
      displayProfile: _,
      profileType: E.y0.BITE_SIZE
    })
  }),
  N && (0, r.jsx)(l.ZP, {
    userId: n.id,
    inline: !1
  }),
  !A && null != S && '' !== S && (0, r.jsx)(d.Z, {
    user: n,
    bio: S,
    hidePersonalInformation: T
  })
]
  });
}