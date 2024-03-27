"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("446674"),
  a = n("290886"),
  l = n("282109"),
  i = n("512395"),
  r = n("49111"),
  o = n("724210");

function u(e) {
  var t;
  let n = (0, i.useOptInEnabledForGuild)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : r.NULL_STRING_GUILD_ID),
    u = (0, s.useStateFromStores)([l.default], () => null != e && l.default.isChannelRecordOrParentOptedIn(e)),
    d = (0, a.useCanSeeOnboardingHome)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : r.NULL_STRING_GUILD_ID);
  if (null == e) return !1;
  let c = d && e.hasFlag(o.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
  return n && !c && !u && !e.isThread()
}