"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("100527"),
  u = n("906732"),
  r = n("613464"),
  o = n("6025"),
  d = n("433355"),
  c = n("430824"),
  f = n("981631"),
  h = n("94234");

function m(e) {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
    analyticsLocations: m
  } = (0, u.default)(i.default.MEMBER_SAFETY_PAGE), S = (0, s.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(t), [t]), g = a.useCallback(() => {
    o.default.closeGuildSidebar(t)
  }, [t]);
  return null != n && null != S && null != S ? (0, l.jsx)(u.AnalyticsLocationProvider, {
    value: m,
    children: (0, l.jsx)("div", {
      className: h.__invalid_sidebarContainer,
      style: {
        width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
      },
      children: (0, l.jsx)(r.default, {
        userId: S.details.userId,
        guildId: S.details.guildId,
        onClose: g
      })
    })
  }) : null
}