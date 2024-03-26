"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("794252");
var s = n("37983"),
  r = n("884691"),
  a = n("506838"),
  i = n("265586"),
  l = n("65597"),
  u = n("77078"),
  o = n("606292"),
  c = n("688318"),
  d = n("426188"),
  m = n("210721"),
  f = n("65324"),
  p = n("845962"),
  _ = n("501768"),
  S = n("635471"),
  I = n("50885"),
  E = n("635357"),
  P = n("782340"),
  T = n("285311"),
  N = n("93902");
let A = I.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;

function C(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: r,
    avatarPlaceholderSrc: a
  } = (0, c.default)({
    avatarDecorationOverride: t,
    size: (0, o.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_152)
  });
  return (0, s.jsx)("div", {
    className: T.giftMainAnimationWrapper,
    children: (0, s.jsx)(A, {
      ...r,
      avatarDecoration: n,
      src: a,
      className: T.avatar,
      size: u.AvatarSizes.SIZE_152,
      "aria-label": P.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function h(e) {
  let {
    id: t
  } = e, n = (0, l.useStateFromStores)([p.default], () => {
    var e;
    return null === (e = p.default.getProfileEffectById(t)) || void 0 === e ? void 0 : e.config
  }), a = null != n;
  return r.useEffect(() => {
    !a && (0, _.getOrFetchProfileEffects)(!0)
  }, [a]), (0, s.jsxs)("div", {
    className: T.profileEffectContainer,
    children: [(0, s.jsx)("img", {
      src: N,
      alt: null == n ? void 0 : n.accessibilityLabel,
      className: T.profileEffectBackground
    }), (0, s.jsx)(S.default, {
      profileEffectId: t
    })]
  })
}

function v(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, E.useGiftContext)(), {
    product: r
  } = (0, d.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), l = null == r ? void 0 : r.items[0], u = (0, a.match)(l).with({
    type: i.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, s.jsx)(C, {
    avatarDecoration: e
  })).with({
    type: i.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, s.jsx)(h, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, s.jsx)("div", {
    className: T.giftMainAnimationWrapper,
    children: (0, s.jsx)(f.default, {
      defaultAnimationState: m.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: T.giftMainAnimation
    })
  }) : u
}