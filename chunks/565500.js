"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("446674"),
  s = n("305961"),
  l = n("162771"),
  i = n("677099"),
  r = () => {
    let e = (0, a.useStateFromStores)([i.default], () => i.default.getFlattenedGuildIds()),
      t = (0, a.useStateFromStores)([l.default], () => l.default.getGuildId()),
      n = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(null != t ? t : e[0]));
    return n
  }