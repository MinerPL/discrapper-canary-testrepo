"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(399606),
  l = t(481060),
  a = t(725803),
  r = t(999382),
  o = t(352981),
  c = t(469351),
  d = t(981631),
  u = t(674563);

function E() {
  let e = (0, i.e7)([r.Z], () => r.Z.getGuild()),
    s = (0, o.y)(null == e ? void 0 : e.id, "guild_product_settings"),
    {
      application: t,
      loading: E
    } = (0, a.Z)(null == e ? void 0 : e.id, u.wW.GUILD_ROLE_SUBSCRIPTIONS),
    _ = null != t && (null == e ? void 0 : e.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
  return (0, n.jsx)("main", {
    children: null == e || !s || E ? (0, n.jsx)(l.Spinner, {}) : (0, n.jsx)(c.t, {
      guildId: e.id,
      hasValidApplication: _
    })
  })
}