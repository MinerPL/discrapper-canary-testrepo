"use strict";
S.r(s), S.d(s, {
  isGuildEligibleForStageChannels: function() {
    return n
  },
  useGuildEligibleForStageChannels: function() {
    return I
  }
}), S("222007");
var e = S("446674"),
  i = S("305961"),
  _ = S("49111");

function n(E) {
  var s;
  let [S] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
  return !!(null === (s = S.getGuild(E)) || void 0 === s ? void 0 : s.hasFeature(_.GuildFeatures.COMMUNITY))
}

function I(E) {
  return (0, e.useStateFromStores)([i.default], () => n(E, [i.default]), [E])
}