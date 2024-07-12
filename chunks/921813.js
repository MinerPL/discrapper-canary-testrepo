n.d(t, {
  Z: function() {
return v;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  s = n(680295),
  l = n(481046),
  o = n(318661),
  a = n(721987),
  c = n(438163),
  d = n(502762),
  u = n(204197),
  f = n(654904),
  m = n(450734),
  E = n(225089),
  p = n(853726),
  _ = n(165747),
  h = n(981631),
  I = n(228168),
  g = n(523940);

function v(e) {
  let {
user: t,
guild: n,
canUsePremiumCustomization: v,
onUpsellClick: C,
pendingBanner: x,
pendingBio: P,
pendingPronouns: Z,
pendingAvatar: A,
pendingAvatarDecoration: T,
pendingNickname: N,
pendingGlobalName: S,
pendingThemeColors: j,
pendingProfileEffectId: R,
avatarClassName: M,
isTryItOutFlow: O = !1,
disabledInputs: b = !1,
hideCustomStatus: y = !1,
hideBioSection: B = !1,
hideMessageInput: L = !0,
hideExampleButton: U = !1
  } = e, D = (0, o.ZP)(t.id, null == n ? void 0 : n.id), {
avatarSrc: k,
avatarDecorationSrc: w
  } = (0, u.Z)({
user: t,
guildId: null == n ? void 0 : n.id,
avatarDecorationOverride: T,
avatarOverride: A,
size: i.AvatarSizes.SIZE_80,
showPending: !0
  }), G = (0, f.ZT)({
pendingProfileEffectId: R,
displayProfile: D
  }), {
theme: F,
primaryColor: H
  } = (0, a.Z)({
user: t,
displayProfile: D,
pendingThemeColors: j,
isPreview: v
  }), {
accountPopoutStatusEditEnabled: z,
profileStatusEditEnabled: W
  } = (0, l.K)({
location: 'ProfileCustomizationPreview',
autoTrackExposure: !y
  });
  return (0, r.jsxs)(d.Z, {
user: t,
displayProfile: D,
profileType: I.y0.BITE_SIZE,
pendingThemeColors: j,
pendingProfileEffectId: G,
className: g.container,
forceShowPremium: v,
children: [
  (0, r.jsxs)('header', {
    className: g.header,
    children: [
      (0, r.jsx)(E.Z, {
        user: t,
        displayProfile: D,
        guildId: null == n ? void 0 : n.id,
        canUsePremiumCustomization: v,
        pendingBanner: x,
        hasProfileEffect: null != G,
        isTryItOutFlow: O,
        disabledInputs: b,
        onUpsellClick: () => null == C ? void 0 : C({
          object: h.qAy.EDIT_PROFILE_BANNER
        })
      }),
      (0, r.jsx)(m.Z, {
        user: t,
        guild: n,
        displayProfile: D,
        canUsePremiumCustomization: v,
        previewAvatar: k,
        previewAvatarDecoration: w,
        previewTheme: F,
        previewPrimaryColor: H,
        className: M,
        disabledInputs: b,
        isTryItOutFlow: O,
        onUpsellClick: () => null == C ? void 0 : C({
          object: h.qAy.AVATAR
        })
      }),
      !y && (0, r.jsx)(c.Z, {
        user: t,
        profileType: I.y0.BITE_SIZE,
        editEnabled: z || W
      })
    ]
  }),
  (0, r.jsx)(p.Z, {
    user: t,
    displayProfile: D,
    guild: n,
    pendingAvatar: A,
    pendingNickname: N,
    pendingGlobalName: S,
    pendingBio: P,
    pendingPronouns: Z,
    isTryItOutFlow: O,
    hideBioSection: B
  }),
  (0, r.jsx)(_.Z, {
    user: t,
    hideMessageInput: L,
    hideExampleButton: U
  }),
  null != G && (0, r.jsx)(s.Z, {
    profileEffectId: G
  })
]
  });
}