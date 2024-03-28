"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var n = l("735250");
l("470079");
var a = l("864843"),
  s = l("981631");

function i(e) {
  let {
    guildId: t,
    applicationId: l,
    applicationPrimarySkuId: i
  } = e;
  return (0, n.jsx)(a.default, {
    guildId: t,
    applicationId: l,
    applicationPrimarySkuId: i,
    analyticsLocation: s.AnalyticsLocations.GUILD_INTEGRATION_SETTINGS
  })
}