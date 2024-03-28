"use strict";
n.r(t), n.d(t, {
  isGuildEligibleForStageChannels: function() {
    return a
  },
  useGuildEligibleForStageChannels: function() {
    return o
  }
}), n("47120");
var i = n("442837"),
  r = n("430824"),
  l = n("981631");

function a(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  return !!(null === (t = n.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(l.GuildFeatures.COMMUNITY))
}

function o(e) {
  return (0, i.useStateFromStores)([r.default], () => a(e, [r.default]), [e])
}