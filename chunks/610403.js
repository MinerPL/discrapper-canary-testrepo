"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("399606"),
  n = s("481060"),
  i = s("725803"),
  r = s("999382"),
  o = s("352981"),
  d = s("469351"),
  u = s("981631"),
  c = s("674563");

function E() {
  let e = (0, l.useStateFromStores)([r.default], () => r.default.getGuild()),
    t = (0, o.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "guild_product_settings"),
    {
      application: s,
      loading: E
    } = (0, i.default)(null == e ? void 0 : e.id, c.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS),
    _ = null != s && (null == e ? void 0 : e.hasFeature(u.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
  return (0, a.jsx)("main", {
    children: null == e || !t || E ? (0, a.jsx)(n.Spinner, {}) : (0, a.jsx)(d.GuildProductsSettingsOverview, {
      guildId: e.id,
      hasValidApplication: _
    })
  })
}