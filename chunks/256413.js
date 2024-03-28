"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("442837"),
  l = n("931261"),
  s = n("9156"),
  i = n("398758"),
  r = n("981631"),
  o = n("176505");

function u(e) {
  var t;
  let n = (0, i.useOptInEnabledForGuild)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : r.NULL_STRING_GUILD_ID),
    u = (0, a.useStateFromStores)([s.default], () => null != e && s.default.isChannelRecordOrParentOptedIn(e)),
    d = (0, l.useCanSeeOnboardingHome)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : r.NULL_STRING_GUILD_ID);
  if (null == e) return !1;
  let c = d && e.hasFlag(o.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
  return n && !c && !u && !e.isThread()
}