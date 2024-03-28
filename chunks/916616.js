"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("627341");
var i = n("735250"),
  s = n("470079"),
  a = n("278074"),
  l = n("979554"),
  r = n("399606"),
  u = n("481060"),
  o = n("1585"),
  c = n("125988"),
  d = n("583434"),
  m = n("479446"),
  f = n("981632"),
  p = n("25251"),
  S = n("996678"),
  _ = n("680295"),
  I = n("998502"),
  E = n("987209"),
  P = n("689938"),
  T = n("506027"),
  N = n("241822");
let h = I.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;

function x(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: s,
    avatarPlaceholderSrc: a
  } = (0, c.default)({
    avatarDecorationOverride: t,
    size: (0, o.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)("div", {
    className: T.giftMainAnimationWrapper,
    children: (0, i.jsx)(h, {
      ...s,
      avatarDecoration: n,
      src: a,
      className: T.avatar,
      size: u.AvatarSizes.SIZE_152,
      "aria-label": P.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function v(e) {
  let {
    id: t
  } = e, n = (0, r.useStateFromStores)([p.default], () => {
    var e;
    return null === (e = p.default.getProfileEffectById(t)) || void 0 === e ? void 0 : e.config
  }), a = null != n;
  return s.useEffect(() => {
    !a && (0, S.getOrFetchProfileEffects)(!0)
  }, [a]), (0, i.jsxs)("div", {
    className: T.profileEffectContainer,
    children: [(0, i.jsx)("img", {
      src: N,
      alt: null == n ? void 0 : n.accessibilityLabel,
      className: T.profileEffectBackground
    }), (0, i.jsx)(_.default, {
      profileEffectId: t
    })]
  })
}

function A(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, E.useGiftContext)(), {
    product: s
  } = (0, d.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), r = null == s ? void 0 : s.items[0], u = (0, a.match)(r).with({
    type: l.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, i.jsx)(x, {
    avatarDecoration: e
  })).with({
    type: l.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, i.jsx)(v, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, i.jsx)("div", {
    className: T.giftMainAnimationWrapper,
    children: (0, i.jsx)(f.default, {
      defaultAnimationState: m.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: T.__invalid_giftMainAnimation
    })
  }) : u
}