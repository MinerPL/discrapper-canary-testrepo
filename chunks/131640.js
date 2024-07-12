n.d(t, {
  ZP: function() {
return B;
  },
  tZ: function() {
return k;
  }
}), n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(278074),
  l = n(442837),
  u = n(692547),
  c = n(481060),
  d = n(906732),
  _ = n(1585),
  E = n(797610),
  f = n(233440),
  h = n(680295),
  p = n(430824),
  m = n(806519),
  I = n(626135),
  T = n(74538),
  g = n(998502),
  S = n(785717),
  A = n(621853),
  N = n(204197),
  v = n(735336),
  O = n(793397),
  R = n(184325),
  C = n(652853),
  y = n(171368),
  D = n(228168),
  L = n(981631),
  b = n(474936),
  M = n(689938),
  P = n(737962);
let U = c.AvatarSizes.SIZE_80,
  w = (0, _.y9)(U);

function x(e) {
  let {
user: t,
guildId: n,
isTryItOutFlow: i,
forProfileEffectModal: a,
onClick: o
  } = e, s = (0, l.e7)([A.Z], () => A.Z.getUserProfile(t.id), [t]), d = (0, l.e7)([p.Z], () => p.Z.getGuild(n), [n]), _ = (0, E.OR)(d);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || _) && (0, r.jsx)(c.Tooltip, {
    text: M.Z.Messages.USER_PROFILE_LOAD_ERROR,
    spacing: 16,
    children: e => (0, r.jsx)(c.CircleExclamationPointIcon, {
      size: 'custom',
      width: 20,
      height: 20,
      ...e,
      className: P.warningCircleIcon,
      color: u.Z.unsafe_rawColors.YELLOW_300.css
    })
  }),
  (0, r.jsx)(R.Z, {
    className: a ? P.profileBadgesCompactNoTouch : P.profileBadges,
    user: t,
    guildId: n,
    isTryItOutFlow: i,
    size: R.V.SIZE_22,
    onBadgeClick: o
  })
]
  });
}
let G = g.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

function k(e) {
  let {
user: t,
displayProfile: n,
avatarSrc: a,
hasBanner: l,
status: u,
isMobile: _,
guildId: E,
channelId: h,
onClose: p,
disableUserProfileLink: g,
profileType: A,
animateOnHover: v,
hasProfileEffect: R,
statusTooltipDelay: x
  } = e, {
theme: k
  } = (0, C.z)(), B = i.useContext(I.AnalyticsContext), F = t.isNonUserBot() && !t.isClyde(), V = T.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, b.p9.TIER_2), H = i.useMemo(() => (0, f.W)(t, h), [
t,
h
  ]), {
analyticsLocations: Z
  } = (0, d.ZP)(), {
trackUserProfileAction: Y,
messageId: j,
roleId: W
  } = (0, S.KZ)(), K = g || t.isClyde(), {
avatarDecorationSrc: z,
avatarSrc: q,
eventHandlers: Q
  } = (0, N.Z)({
user: t,
guildId: E,
size: U,
animateOnHover: v
  }), X = (0, r.jsx)('div', {
className: P.avatarHoverTarget,
...Q,
children: (0, r.jsx)(G, {
  src: null != a ? a : q,
  avatarDecoration: z,
  size: U,
  'aria-label': t.username,
  status: H ? L.Skl.UNKNOWN : u,
  statusBackdropColor: V && !H ? (0, c.getStatusBackdropColor)(k) : void 0,
  isMobile: _,
  statusTooltip: !0,
  statusTooltipDelay: x
})
  }), $ = (0, s.EQ)(A).with(D.y0.POPOUT, () => (0, O.zW)({
premiumUserWithBanner: P.avatarPositionPremiumBanner,
premiumUserWithoutBanner: P.avatarPositionPremiumNoBanner,
default: P.avatarPositionNormal
  })({
isPremium: V,
hasBanner: l,
hasProfileEffect: R
  })).with(D.y0.POMELO_POPOUT, () => P.avatarPositionPomelo).with(D.y0.PANEL, () => P.avatarPositionPanel).with(D.y0.BITE_SIZE, () => P.avatarPositionBiteSize).exhaustive();
  return (0, r.jsx)(r.Fragment, {
children: (0, r.jsxs)(c.Clickable, {
  className: o()({
    [P.clickable]: !K,
    [P.avatarWrapperNonUserBot]: F,
    [P.avatarWrapperNormal]: !F
  }, $),
  onClick: F || K ? void 0 : function() {
    Y({
      action: 'PRESS_VIEW_PROFILE'
    }), (0, y.openUserProfileModal)({
      userId: t.id,
      guildId: E,
      channelId: h,
      messageId: j,
      roleId: W,
      sourceAnalyticsLocations: Z,
      analyticsLocation: B.location
    }), null == p || p();
  },
  children: [
    X,
    !K && function() {
      let e = null != z,
        t = e ? w : (0, c.getAvatarSize)(U);
      return (0, r.jsx)(m.ZP, {
        mask: null == u || u === L.Skl.UNKNOWN || H ? m.ZP.Masks.AVATAR_DEFAULT : (0, s.EQ)([
          e,
          _
        ]).with([
          !0,
          !0
        ], () => m.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([
          !0,
          !1
        ], () => m.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([
          !1,
          !0
        ], () => m.ZP.Masks.AVATAR_STATUS_MOBILE_80).with([
          !1,
          !1
        ], () => m.ZP.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
        className: e ? P.avatarDecorationHint : P.avatarHint,
        style: e ? {
          borderRadius: 0.4 * t
        } : void 0,
        width: t,
        height: t,
        children: (0, r.jsx)('div', {
          className: P.avatarHintInner,
          children: M.Z.Messages.VIEW_PROFILE
        })
      });
    }()
  ]
})
  });
}

function B(e) {
  let {
user: t,
displayProfile: n,
guildId: i,
channelId: a,
onClose: o,
isMobile: s,
isStreaming: l,
status: u,
disableUserProfileLink: c,
isHovering: d,
showPremiumBadgeUpsell: _ = !0,
upsell: E
  } = e;
  return (0, r.jsxs)(r.Fragment, {
children: [
  E,
  (0, r.jsx)(v.Z, {
    user: t,
    displayProfile: n,
    onClose: o,
    guildId: i,
    profileType: D.y0.POPOUT,
    showPremiumBadgeUpsell: _,
    isHovering: d,
    hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
  }),
  (null == n ? void 0 : n.profileEffectId) != null && (0, r.jsx)(h.Z, {
    profileEffectId: null == n ? void 0 : n.profileEffectId,
    bannerAdjustment: 0,
    isHovering: d
  }),
  (0, r.jsx)(k, {
    user: t,
    displayProfile: n,
    status: l ? L.Skl.STREAMING : u,
    isMobile: s,
    guildId: i,
    channelId: a,
    onClose: o,
    disableUserProfileLink: c,
    hasBanner: (null == n ? void 0 : n.banner) != null,
    hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
    profileType: D.y0.POPOUT
  }),
  (0, r.jsx)(x, {
    user: t,
    guildId: i,
    onClick: o
  })
]
  });
}