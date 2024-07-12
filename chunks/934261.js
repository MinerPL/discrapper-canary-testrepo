var r = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  l = n(809206),
  o = n(597688),
  a = n(884697),
  c = n(18438),
  d = n(778825),
  u = n(957730),
  f = n(921813),
  m = n(350327),
  E = n(318661),
  p = n(706454),
  _ = n(695346),
  h = n(265159),
  I = n(25990),
  g = n(594174),
  v = n(74538),
  C = n(689938),
  x = n(371315);
let P = e => {
var t;
let {
  effectIsOwned: n,
  pendingProfileEffectRecord: l,
  product: c,
  purchase: d
} = e, u = (0, i.e7)([g.default], () => g.default.getCurrentUser()), f = (0, i.e7)([o.Z], () => o.Z.getProduct(null == l ? void 0 : l.skuId)), m = (0, i.e7)([p.default], () => p.default.locale), E = v.ZP.canUseCollectibles(u), _ = (0, a.qS)(d), h = (0, a.G1)(c), I = Z(!E && _, h, E);
return null != l ? (0, r.jsx)('div', {
  className: n ? x.effectDescriptionNoGradient : x.effectDescriptionBorderWithGradient,
  children: (0, r.jsxs)('div', {
    className: x.effectDescriptionContainer,
    children: [
      (0, r.jsx)(s.Text, {
        color: 'header-primary',
        variant: 'text-sm/semibold',
        className: x.effectName,
        children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == f ? void 0 : f.name
      }),
      (0, r.jsx)(s.Text, {
        color: 'text-normal',
        variant: 'text-sm/normal',
        className: x.effectDescription,
        children: null != d ? d.summary : I
      }),
      null != d && (0, r.jsxs)(s.Text, {
        variant: 'text-xxs/normal',
        color: 'text-muted',
        className: x.effectPurchasedAt,
        children: [
          C.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: d.purchasedAt.toLocaleDateString(m, {
              month: 'long',
              year: 'numeric'
            })
          }),
          _ && (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)('br', {}),
              C.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC
            ]
          })
        ]
      })
    ]
  })
}) : null;
  },
  Z = (e, t, n) => e ? C.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? C.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? C.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : C.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
t.Z = e => {
  var t;
  let {
user: n,
pendingProfileEffectRecord: s,
canApplySelectedChange: o,
product: a,
purchase: p,
guild: g
  } = e, {
pendingGlobalName: C,
pendingNickname: Z,
pendingPronouns: A,
pendingBio: T,
pendingBanner: N,
pendingAvatar: S,
pendingAvatarDecoration: j,
pendingThemeColors: R,
pendingAccentColor: M
  } = (0, i.cj)([
d.Z,
I.Z
  ], () => ({
pendingNickname: void 0,
pendingGlobalName: void 0,
pendingAccentColor: void 0,
...null != g ? d.Z.getAllPending() : I.Z.getAllPending()
  })), O = v.ZP.isPremium(n), b = v.ZP.canUsePremiumProfileCustomization(n), y = (0, E.ZP)(n.id), B = !!(null == y ? void 0 : y.getPreviewBio(T).value), L = {
user: n,
guild: g,
pendingGlobalName: C,
pendingNickname: Z,
pendingPronouns: A,
pendingBio: _.dN.useSetting() && null != T ? u.ZP.parse(void 0, T).content : T,
pendingBanner: N,
useLargeBanner: !0,
pendingAvatar: S,
pendingAvatarDecoration: j,
pendingThemeColors: R,
pendingAccentColor: M,
pendingProfileEffectId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : null,
hideFakeActivity: B,
canUsePremiumCustomization: b,
onUpsellClick: h.Z,
onAvatarChange: null != g ? c.I5 : l.I5,
onBannerChange: m.g_
  };
  return (0, r.jsxs)('div', {
className: x.previewContainer,
children: [
  (0, r.jsx)(f.Z, {
    ...L,
    disabledInputs: !0,
    hideCustomStatus: !0
  }),
  !1,
  (0, r.jsx)(P, {
    effectIsOwned: o,
    pendingProfileEffectRecord: s,
    product: a,
    purchase: p,
    userIsPremium: O
  })
]
  });
};