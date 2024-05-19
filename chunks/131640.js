"use strict";
n.r(t), n.d(t, {
  UserPopoutAvatar: function() {
    return V
  },
  UserPopoutBadgeList: function() {
    return k
  },
  default: function() {
    return x
  }
}), n("627341");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("278074"),
  l = n("442837"),
  u = n("692547"),
  d = n("481060"),
  _ = n("906732"),
  c = n("1585"),
  E = n("797610"),
  I = n("233440"),
  T = n("680295"),
  f = n("430824"),
  S = n("759231"),
  h = n("806519"),
  A = n("626135"),
  m = n("74538"),
  N = n("998502"),
  p = n("785717"),
  O = n("621853"),
  C = n("204197"),
  R = n("735336"),
  g = n("793397"),
  L = n("184325"),
  v = n("652853"),
  D = n("171368"),
  M = n("228168"),
  y = n("981631"),
  P = n("474936"),
  U = n("689938"),
  b = n("852994");
let G = d.AvatarSizes.SIZE_80,
  w = (0, c.getDecorationSizeForAvatarSize)(G);

function k(e) {
  let {
    user: t,
    guildId: n,
    isTryItOutFlow: r,
    forProfileEffectModal: a,
    onClick: s
  } = e, o = (0, l.useStateFromStores)([O.default], () => O.default.getUserProfile(t.id), [t]), _ = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(n), [n]), c = (0, E.useClydeProfilesEnabled)(_);
  return (0, i.jsxs)(i.Fragment, {
    children: [(null == o ? void 0 : o.profileFetchFailed) && (!t.isClyde() || c) && (0, i.jsx)(d.Tooltip, {
      text: U.default.Messages.USER_PROFILE_LOAD_ERROR,
      spacing: 16,
      children: e => (0, i.jsx)(S.default, {
        ...e,
        className: b.warningCircleIcon,
        color: u.default.unsafe_rawColors.YELLOW_300.css
      })
    }), (0, i.jsx)(L.default, {
      className: a ? b.profileBadgesCompactNoTouch : b.profileBadges,
      user: t,
      guildId: n,
      isTryItOutFlow: r,
      size: L.BadgeSizes.SIZE_22,
      onBadgeClick: s
    })]
  })
}
let B = N.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

function V(e) {
  let {
    user: t,
    displayProfile: n,
    avatarSrc: a,
    hasBanner: l,
    status: u,
    isMobile: c,
    guildId: E,
    channelId: T,
    onClose: f,
    disableUserProfileLink: S,
    profileType: N,
    animateOnHover: O,
    hasProfileEffect: R,
    statusTooltipDelay: L
  } = e, {
    theme: k
  } = (0, v.useUserProfileThemeContext)(), V = r.useContext(A.AnalyticsContext), x = t.isNonUserBot() && !t.isClyde(), F = m.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, P.PremiumTypes.TIER_2), H = r.useMemo(() => (0, I.shouldDisableUserPresenceInChannel)(t, T), [t, T]), {
    analyticsLocations: Y
  } = (0, _.default)(), {
    trackUserProfileAction: j,
    messageId: W,
    roleId: K
  } = (0, p.useUserProfileAnalyticsContext)(), z = S || t.isClyde(), {
    avatarDecorationSrc: Z,
    avatarSrc: X,
    eventHandlers: Q
  } = (0, C.default)({
    user: t,
    guildId: E,
    size: G,
    animateOnHover: O
  }), q = (0, i.jsx)("div", {
    className: b.avatarHoverTarget,
    ...Q,
    children: (0, i.jsx)(B, {
      src: null != a ? a : X,
      avatarDecoration: Z,
      size: G,
      "aria-label": t.username,
      status: H ? y.StatusTypes.UNKNOWN : u,
      statusBackdropColor: F && !H ? (0, d.getStatusBackdropColor)(k) : void 0,
      isMobile: c,
      statusTooltip: !0,
      statusTooltipDelay: L
    })
  }), J = (0, o.match)(N).with(M.UserProfileTypes.POPOUT, () => (0, g.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: b.avatarPositionPremiumBanner,
    premiumUserWithoutBanner: b.avatarPositionPremiumNoBanner,
    default: b.avatarPositionNormal
  })({
    isPremium: F,
    hasBanner: l,
    hasProfileEffect: R
  })).with(M.UserProfileTypes.POMELO_POPOUT, () => b.avatarPositionPomelo).with(M.UserProfileTypes.PANEL, () => b.avatarPositionPanel).with(M.UserProfileTypes.BITE_SIZE, () => b.avatarPositionBiteSize).exhaustive();
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)(d.Clickable, {
      className: s()({
        [b.clickable]: !z,
        [b.avatarWrapperNonUserBot]: x,
        [b.avatarWrapperNormal]: !x
      }, J),
      onClick: x || z ? void 0 : function() {
        j({
          action: "PRESS_VIEW_PROFILE"
        }), (0, D.openUserProfileModal)({
          userId: t.id,
          guildId: E,
          channelId: T,
          messageId: W,
          roleId: K,
          sourceAnalyticsLocations: Y,
          analyticsLocation: V.location
        }), null == f || f()
      },
      children: [q, !z && function() {
        let e = null != Z,
          t = e ? w : (0, d.getAvatarSize)(G);
        return (0, i.jsx)(h.default, {
          mask: null == u || u === y.StatusTypes.UNKNOWN || H ? h.default.Masks.AVATAR_DEFAULT : (0, o.match)([e, c]).with([!0, !0], () => h.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => h.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => h.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => h.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
          className: e ? b.avatarDecorationHint : b.avatarHint,
          style: e ? {
            borderRadius: .4 * t
          } : void 0,
          width: t,
          height: t,
          children: (0, i.jsx)("div", {
            className: b.avatarHintInner,
            children: U.default.Messages.VIEW_PROFILE
          })
        })
      }()]
    })
  })
}

function x(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: r,
    channelId: a,
    onClose: s,
    isMobile: o,
    isStreaming: l,
    status: u,
    disableUserProfileLink: d,
    isHovering: _,
    showPremiumBadgeUpsell: c = !0,
    upsell: E
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [E, (0, i.jsx)(R.default, {
      user: t,
      displayProfile: n,
      onClose: s,
      guildId: r,
      profileType: M.UserProfileTypes.POPOUT,
      showPremiumBadgeUpsell: c,
      isHovering: _,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
    }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(T.default, {
      profileEffectId: null == n ? void 0 : n.profileEffectId,
      bannerAdjustment: 0,
      isHovering: _
    }), (0, i.jsx)(V, {
      user: t,
      displayProfile: n,
      status: l ? y.StatusTypes.STREAMING : u,
      isMobile: o,
      guildId: r,
      channelId: a,
      onClose: s,
      disableUserProfileLink: d,
      hasBanner: (null == n ? void 0 : n.banner) != null,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
      profileType: M.UserProfileTypes.POPOUT
    }), (0, i.jsx)(k, {
      user: t,
      guildId: r,
      onClick: s
    })]
  })
}