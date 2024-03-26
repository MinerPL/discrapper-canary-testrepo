"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("794252");
var s = n("37983");
n("884691");
var r = n("506838"),
  a = n("265586"),
  i = n("65597"),
  l = n("77078"),
  u = n("606292"),
  o = n("688318"),
  c = n("426188"),
  d = n("210721"),
  m = n("65324"),
  f = n("845962"),
  p = n("635471"),
  _ = n("50885"),
  S = n("635357"),
  I = n("782340"),
  E = n("285311"),
  P = n("93902");
let T = _.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function N(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: r,
    avatarPlaceholderSrc: a
  } = (0, o.default)({
    avatarDecorationOverride: t,
    size: (0, u.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_152)
  });
  return (0, s.jsx)("div", {
    className: E.giftMainAnimationWrapper,
    children: (0, s.jsx)(T, {
      ...r,
      avatarDecoration: n,
      src: a,
      className: E.avatar,
      size: l.AvatarSizes.SIZE_152,
      "aria-label": I.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function C(e) {
  let {
    id: t
  } = e, n = (0, i.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getProfileEffectById(t)) || void 0 === e ? void 0 : e.config
  });
  return (0, s.jsxs)("div", {
    className: E.profileEffectContainer,
    children: [(0, s.jsx)("img", {
      src: P,
      alt: null == n ? void 0 : n.accessibilityLabel,
      className: E.profileEffectBackground
    }), (0, s.jsx)(p.default, {
      profileEffectId: t
    })]
  })
}

function A(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, S.useGiftContext)(), {
    product: i
  } = (0, c.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), l = null == i ? void 0 : i.items[0], u = (0, r.match)(l).with({
    type: a.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, s.jsx)(N, {
    avatarDecoration: e
  })).with({
    type: a.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, s.jsx)(C, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, s.jsx)("div", {
    className: E.giftMainAnimationWrapper,
    children: (0, s.jsx)(m.default, {
      defaultAnimationState: d.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: E.giftMainAnimation
    })
  }) : u
}