"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120");
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("974674"),
  n = s("696826"),
  r = s("420660"),
  o = s("233440"),
  u = s("158776"),
  d = s("998502"),
  c = s("505737"),
  f = s("204197"),
  S = s("78675"),
  m = s("438163"),
  I = s("652853"),
  E = s("30556"),
  v = s("228168"),
  _ = s("182294"),
  T = s("231338"),
  x = s("100651");
let N = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function A(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: A,
    channelId: U,
    onClose: g
  } = e, {
    theme: C
  } = (0, I.useUserProfileThemeContext)(), h = (0, c.default)(t.id, A), {
    avatarSrc: p,
    eventHandlers: R,
    avatarDecorationSrc: j
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: _.AvatarSizes.SIZE_120
  }), [M, P] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, U) ? [T.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [T.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: v.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsx)("div", {
      className: x.inner,
      children: (0, l.jsxs)("div", {
        ...R,
        children: [(0, l.jsx)(N, {
          src: p,
          avatarDecoration: j,
          size: _.AvatarSizes.SIZE_120,
          className: x.avatar,
          status: M,
          statusBackdropColor: (0, n.getStatusBackdropColor)(C),
          "aria-label": t.username,
          isMobile: P,
          statusTooltip: !0
        }), (0, l.jsx)("div", {
          className: x.buttons,
          children: h && (0, l.jsx)(E.default, {
            user: t,
            onClose: g
          })
        }), (0, l.jsx)(m.UserProfileCustomStatusBubble, {
          statusActivity: d,
          profileType: v.UserProfileTypes.FULL_SIZE
        })]
      })
    })]
  })
}