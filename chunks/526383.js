"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("47120");
var a = n("442837"),
  s = n("430824"),
  l = n("981631");

function i() {
  return (0, a.useStateFromStores)([s.default], () => Object.entries(s.default.getGuilds()).filter(e => {
    let [t, n] = e;
    return n.hasFeature(l.GuildFeatures.HUB)
  }).map(e => {
    let [t, n] = e;
    return n
  }))
}