"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("789020");
var a = n("399606"),
  l = n("592125"),
  s = n("630388"),
  i = n("637271"),
  r = n("931261"),
  o = n("981631"),
  u = n("176505");

function d(e) {
  var t;
  let n = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e)),
    d = null != n && (0, s.hasFlag)(n.flags, u.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL),
    c = (0, a.useStateFromStores)([i.default], () => i.default.getSelectedResourceChannelId(null == n ? void 0 : n.guild_id)),
    f = (0, r.useCanSeeOnboardingHome)(null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID);
  return null != n && f && d && c === n.id
}