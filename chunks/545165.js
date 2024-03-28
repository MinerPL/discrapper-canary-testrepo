"use strict";
l.r(t), l.d(t, {
  getEventChannelsByType: function() {
    return r
  },
  useGetEventChannelsByType: function() {
    return i
  }
}), l("47120"), l("653041");
var a = l("442837"),
  n = l("889161");
l("427679");
var s = l("984933");

function r(e, t) {
  let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
  if (null == t) return [];
  let a = l.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
    r = [];
  for (let {
      channel: e
    }
    of a) {
    let {
      canCreateGuildEvent: l,
      canManageAllEvents: a
    } = (0, n.getManageResourcePermissions)(e), s = l || a;
    e.type === t && (e.isGuildVoice() && s ? r.push(e) : e.isGuildStageVoice() && s && r.push(e))
  }
  return r
}

function i(e, t) {
  return (0, a.useStateFromStoresArray)([s.default], () => r(e, t, [s.default]), [e, t])
}
l("496675"), l("85243")