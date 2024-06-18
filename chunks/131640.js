"use strict";
n.d(t, {
  Cb: function() {
    return k
  },
  ZP: function() {
    return V
  },
  tZ: function() {
    return x
  }
}), n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(442837),
  u = n(692547),
  _ = n(481060),
  d = n(906732),
  c = n(1585),
  E = n(797610),
  I = n(233440),
  T = n(680295),
  h = n(430824),
  S = n(759231),
  f = n(806519),
  N = n(626135),
  A = n(74538),
  m = n(998502),
  O = n(785717),
  R = n(621853),
  C = n(204197),
  p = n(735336),
  g = n(793397),
  L = n(184325),
  v = n(652853),
  D = n(171368),
  M = n(228168),
  P = n(981631),
  y = n(474936),
  U = n(689938),
  b = n(852994);
let G = _.AvatarSizes.SIZE_80,
  w = (0, c.y9)(G);

function k(e) {
  let {
    user: t,
    guildId: n,
    isTryItOutFlow: r,
    forProfileEffectModal: s,
    onClick: o
  } = e, a = (0, l.e7)([R.Z], () => R.Z.getUserProfile(t.id), [t]), d = (0, l.e7)([h.Z], () => h.Z.getGuild(n), [n]), c = (0, E.OR)(d);
  return (0, i.jsxs)(i.Fragment, {
    children: [(null == a ? void 0 : a.profileFetchFailed) && (!t.isClyde() || c) && (0, i.jsx)(_.Tooltip, {
      text: U.Z.Messages.USER_PROFILE_LOAD_ERROR,
      spacing: 16,
      children: e => (0, i.jsx)(S.Z, {
        ...e,
        className: b.warningCircleIcon,
        color: u.Z.unsafe_rawColors.YELLOW_300.css
      })
    }), (0, i.jsx)(L.Z, {
      className: s ? b.profileBadgesCompactNoTouch : b.profileBadges,
      user: t,
      guildId: n,
      isTryItOutFlow: r,
      size: L.V.SIZE_22,
      onBadgeClick: o
    })]
  })
}
let B = m.ZP.getEnableHardwareAcceleration() ? _.AnimatedAvatar : _.Avatar;

function x(e) {
  let {
    user: t,
    displayProfile: n,
    avatarSrc: s,
    hasBanner: l,
    status: u,
    isMobile: c,
    guildId: E,
    channelId: T,
    onClose: h,
    disableUserProfileLink: S,
    profileType: m,
    animateOnHover: R,
    hasProfileEffect: p,
    statusTooltipDelay: L
  } = e, {
    theme: k
  } = (0, v.z)(), x = r.useContext(N.AnalyticsContext), V = t.isNonUserBot() && !t.isClyde(), Z = A.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, y.p9.TIER_2), H = r.useMemo(() => (0, I.W)(t, T), [t, T]), {
    analyticsLocations: F
  } = (0, d.ZP)(), {
    trackUserProfileAction: Y,
    messageId: j,
    roleId: W
  } = (0, O.KZ)(), K = S || t.isClyde(), {
    avatarDecorationSrc: z,
    avatarSrc: q,
    eventHandlers: X
  } = (0, C.Z)({
    user: t,
    guildId: E,
    size: G,
    animateOnHover: R
  }), Q = (0, i.jsx)("div", {
    className: b.avatarHoverTarget,
    ...X,
    children: (0, i.jsx)(B, {
      src: null != s ? s : q,
      avatarDecoration: z,
      size: G,
      "aria-label": t.username,
      status: H ? P.Skl.UNKNOWN : u,
      statusBackdropColor: Z && !H ? (0, _.getStatusBackdropColor)(k) : void 0,
      isMobile: c,
      statusTooltip: !0,
      statusTooltipDelay: L
    })
  }), J = (0, a.EQ)(m).with(M.y0.POPOUT, () => (0, g.zW)({
    premiumUserWithBanner: b.avatarPositionPremiumBanner,
    premiumUserWithoutBanner: b.avatarPositionPremiumNoBanner,
    default: b.avatarPositionNormal
  })({
    isPremium: Z,
    hasBanner: l,
    hasProfileEffect: p
  })).with(M.y0.POMELO_POPOUT, () => b.avatarPositionPomelo).with(M.y0.PANEL, () => b.avatarPositionPanel).with(M.y0.BITE_SIZE, () => b.avatarPositionBiteSize).exhaustive();
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)(_.Clickable, {
      className: o()({
        [b.clickable]: !K,
        [b.avatarWrapperNonUserBot]: V,
        [b.avatarWrapperNormal]: !V
      }, J),
      onClick: V || K ? void 0 : function() {
        Y({
          action: "PRESS_VIEW_PROFILE"
        }), (0, D.openUserProfileModal)({
          userId: t.id,
          guildId: E,
          channelId: T,
          messageId: j,
          roleId: W,
          sourceAnalyticsLocations: F,
          analyticsLocation: x.location
        }), null == h || h()
      },
      children: [Q, !K && function() {
        let e = null != z,
          t = e ? w : (0, _.getAvatarSize)(G);
        return (0, i.jsx)(f.ZP, {
          mask: null == u || u === P.Skl.UNKNOWN || H ? f.ZP.Masks.AVATAR_DEFAULT : (0, a.EQ)([e, c]).with([!0, !0], () => f.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => f.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => f.ZP.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => f.ZP.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
          className: e ? b.avatarDecorationHint : b.avatarHint,
          style: e ? {
            borderRadius: .4 * t
          } : void 0,
          width: t,
          height: t,
          children: (0, i.jsx)("div", {
            className: b.avatarHintInner,
            children: U.Z.Messages.VIEW_PROFILE
          })
        })
      }()]
    })
  })
}

function V(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: r,
    channelId: s,
    onClose: o,
    isMobile: a,
    isStreaming: l,
    status: u,
    disableUserProfileLink: _,
    isHovering: d,
    showPremiumBadgeUpsell: c = !0,
    upsell: E
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [E, (0, i.jsx)(p.Z, {
      user: t,
      displayProfile: n,
      onClose: o,
      guildId: r,
      profileType: M.y0.POPOUT,
      showPremiumBadgeUpsell: c,
      isHovering: d,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
    }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(T.Z, {
      profileEffectId: null == n ? void 0 : n.profileEffectId,
      bannerAdjustment: 0,
      isHovering: d
    }), (0, i.jsx)(x, {
      user: t,
      displayProfile: n,
      status: l ? P.Skl.STREAMING : u,
      isMobile: a,
      guildId: r,
      channelId: s,
      onClose: o,
      disableUserProfileLink: _,
      hasBanner: (null == n ? void 0 : n.banner) != null,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
      profileType: M.y0.POPOUT
    }), (0, i.jsx)(k, {
      user: t,
      guildId: r,
      onClick: o
    })]
  })
}