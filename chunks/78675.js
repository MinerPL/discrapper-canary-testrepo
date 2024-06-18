"use strict";
n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(866442),
  l = n(442837),
  u = n(692547),
  _ = n(481060),
  d = n(220082),
  c = n(583405),
  E = n(695346),
  I = n(451478),
  T = n(311715),
  h = n(768581),
  S = n(888778),
  f = n(943217),
  N = n(793397),
  A = n(214572);

function m(e) {
  var t;
  let {
    user: n,
    displayProfile: s,
    guildId: m,
    profileType: O,
    pendingBanner: R,
    children: C,
    animateOnHover: p = !1,
    hasProfileEffect: g = !1,
    canUsePremiumCustomization: L = !1
  } = e, v = L || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || !1, [D, M] = r.useState(!1), P = (0, l.e7)([I.Z], () => I.Z.isFocused()), y = E.QK.getSetting(), {
    bannerSrc: U,
    status: b
  } = (0, S.Z)({
    displayProfile: s,
    pendingBanner: R,
    size: (0, N.e7)(O),
    canAnimate: p || !y ? D : P
  }), G = (0, _.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(), w = (0, _.getAvatarSize)(_.AvatarSizes.SIZE_80), k = (0, a._i)((0, d.ZP)(n.getAvatarURL(m, w), G, !1)), B = (0, c.Z)(null !== (t = null == s ? void 0 : s.primaryColor) && void 0 !== t ? t : k).hsl;
  return (0, i.jsx)(f.Z, {
    isPremium: v,
    hasThemeColors: v,
    profileType: O,
    hasBanner: null != U,
    hasProfileEffect: g,
    children: (0, i.jsxs)("div", {
      className: o()(A.banner, A.divider, (0, N.Ae)({
        profileType: O,
        user: {
          hasBanner: null != U,
          isPremium: v,
          hasProfileEffect: g
        }
      })),
      onMouseMove: () => M(!0),
      onMouseLeave: () => M(!1),
      style: {
        backgroundImage: null != U ? "url(".concat(U, ")") : void 0,
        backgroundColor: b !== S.s.COMPLETE ? u.Z.unsafe_rawColors.PRIMARY_800.css : B
      },
      children: [!y && (0, h.F8)(U) && (0, i.jsx)(T.Z, {
        className: A.gifTag
      }), C]
    })
  })
}