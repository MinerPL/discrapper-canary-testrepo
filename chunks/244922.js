"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var a = n("446674"),
  s = n("305961"),
  l = n("49111");

function i() {
  return (0, a.useStateFromStores)([s.default], () => {
    let e = s.default.getGuilds();
    return Object.entries(e).filter(e => {
      let [t, n] = e;
      return n.hasFeature(l.GuildFeatures.HUB)
    }).map(e => {
      let [t, n] = e;
      return n
    })
  })
}