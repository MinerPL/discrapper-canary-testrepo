"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("442837"),
  s = n("481060"),
  o = n("420660"),
  l = n("233440"),
  u = n("199902"),
  d = n("158776"),
  _ = n("74538"),
  c = n("998502"),
  E = n("785717"),
  I = n("204197"),
  T = n("652853"),
  f = n("228168"),
  S = n("981631"),
  h = n("474936"),
  A = n("579935");
let m = s.AvatarSizes.SIZE_80,
  N = c.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function p(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: c,
    channelId: p,
    animateOnHover: O,
    onOpenProfile: C
  } = e, {
    theme: R
  } = (0, T.useUserProfileThemeContext)(), {
    trackUserProfileAction: g
  } = (0, E.useUserProfileAnalyticsContext)(), L = _.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, h.PremiumTypes.TIER_2), v = r.useMemo(() => (0, l.shouldDisableUserPresenceInChannel)(t, p), [t, p]), {
    status: D,
    isMobileOnline: M
  } = (0, a.useStateFromStoresObject)([u.default, d.default], () => {
    let e = null != u.default.getAnyStreamForUser(t.id),
      n = d.default.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === S.ActivityTypes.PLAYING : n !== S.ActivityTypes.CUSTOM_STATUS
      });
    return {
      status: (0, o.default)(n) ? S.StatusTypes.STREAMING : d.default.getStatus(t.id),
      isMobileOnline: d.default.isMobileOnline(t.id)
    }
  }), {
    avatarDecorationSrc: y,
    avatarSrc: P,
    eventHandlers: U
  } = (0, I.default)({
    user: t,
    guildId: c,
    size: m,
    animateOnHover: O
  });
  return (0, i.jsx)(s.Clickable, {
    ...U,
    className: A.clickable,
    onClick: null == C ? void 0 : () => {
      g({
        action: "PRESS_VIEW_PROFILE"
      }), null == C || C()
    },
    children: (0, i.jsx)(N, {
      src: P,
      avatarDecoration: y,
      size: m,
      "aria-label": t.username,
      imageClassName: null != C ? A.overlay : void 0,
      status: v ? S.StatusTypes.UNKNOWN : D,
      statusBackdropColor: L && !v ? (0, s.getStatusBackdropColor)(R) : void 0,
      isMobile: M,
      statusTooltip: !0,
      statusTooltipDelay: f.USER_PROFILE_TOOLTIP_DELAY
    })
  })
}