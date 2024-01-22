"use strict";
s.r(S), s.d(S, {
  isGuildEligibleForStageChannels: function() {
    return n
  },
  useGuildEligibleForStageChannels: function() {
    return I
  }
}), s("222007");
var e = s("446674"),
  i = s("305961"),
  _ = s("49111");

function n(E) {
  var S;
  let [s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
  return !!(null === (S = s.getGuild(E)) || void 0 === S ? void 0 : S.hasFeature(_.GuildFeatures.COMMUNITY))
}

function I(E) {
  return (0, e.useStateFromStores)([i.default], () => n(E, [i.default]), [E])
}