"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("627341");
var i = n("735250");
n("470079");
var s = n("278074"),
  l = n("979554"),
  a = n("481060"),
  r = n("1585"),
  u = n("125988"),
  o = n("583434"),
  c = n("479446"),
  d = n("981632"),
  m = n("731896"),
  f = n("680295"),
  p = n("998502"),
  _ = n("987209"),
  S = n("689938"),
  I = n("125374"),
  P = n("241822");
let E = p.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function T(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: s,
    avatarPlaceholderSrc: l
  } = (0, u.default)({
    avatarDecorationOverride: t,
    size: (0, r.getDecorationSizeForAvatarSize)(a.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)("div", {
    className: I.giftMainAnimationWrapper,
    children: (0, i.jsx)(E, {
      ...s,
      avatarDecoration: n,
      src: l,
      className: I.avatar,
      size: a.AvatarSizes.SIZE_152,
      "aria-label": S.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function N(e) {
  var t;
  let {
    id: n
  } = e, s = null === (t = (0, m.useProfileEffectPreset)(n)) || void 0 === t ? void 0 : t.config;
  return (0, i.jsxs)("div", {
    className: I.profileEffectContainer,
    children: [(0, i.jsx)("img", {
      src: P,
      alt: null == s ? void 0 : s.accessibilityLabel,
      className: I.profileEffectBackground
    }), (0, i.jsx)(f.default, {
      profileEffectId: n
    })]
  })
}

function v(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, _.useGiftContext)(), {
    product: a
  } = (0, o.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), r = null == a ? void 0 : a.items[0], u = (0, s.match)(r).with({
    type: l.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, i.jsx)(T, {
    avatarDecoration: e
  })).with({
    type: l.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, i.jsx)(N, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, i.jsx)("div", {
    className: I.giftMainAnimationWrapper,
    children: (0, i.jsx)(d.default, {
      defaultAnimationState: c.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: I.__invalid_giftMainAnimation
    })
  }) : u
}