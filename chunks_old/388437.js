"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("812204"),
  l = n("685665"),
  i = n("963662"),
  r = n("379532"),
  o = n("427459"),
  u = n("49111"),
  d = n("994428"),
  c = n("944305"),
  f = n("782340"),
  E = n("65016");

function h(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, h = (0, o.getNumberOfAppliedBoostsNeededForTier)(t, u.BoostedGuildTiers.TIER_2), {
    analyticsLocations: _
  } = (0, l.default)(s.default.GUILD_BANNER_NOTICE);
  return (0, a.jsx)(i.default, {
    guild: t,
    onDismissed: () => n(d.ContentDismissActionType.UNKNOWN),
    cta: f.default.Messages.GUILD_BANNER_NOTICE_CTA,
    message: f.default.Messages.GUILD_BANNER_NOTICE.format({
      boostsNeeded: h
    }),
    type: u.ChannelNoticeTypes.GUILD_BANNER,
    image: E,
    onClick: () => (0, r.default)({
      analyticsLocations: _,
      analyticsSourceLocation: {
        section: u.AnalyticsSections.CHANNEL_NOTICE,
        object: u.AnalyticsObjects.SERVER_BANNER_TOOLTIP
      },
      guild: t,
      perks: (0, c.guildBannerUpsellPerks)()
    }),
    imageMarginTop: 15,
    imageMarginX: 22
  })
}