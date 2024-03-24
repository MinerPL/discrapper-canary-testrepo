"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("702976");
var s = n("65597"),
  a = n("42203"),
  l = n("568734"),
  i = n("86415"),
  r = n("290886"),
  o = n("49111"),
  u = n("724210");

function d(e) {
  var t;
  let n = (0, s.useStateFromStores)([a.default], () => a.default.getChannel(e)),
    d = null != n && (0, l.hasFlag)(n.flags, u.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL),
    c = (0, s.useStateFromStores)([i.default], () => i.default.getSelectedResourceChannelId(null == n ? void 0 : n.guild_id)),
    f = (0, r.useCanSeeOnboardingHome)(null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID);
  return null != n && f && d && c === n.id
}