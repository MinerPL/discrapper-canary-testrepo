"use strict";
n.r(t);
var a = n("442837"),
  s = n("430824"),
  l = n("914010"),
  i = n("771845");
t.default = () => {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getFlattenedGuildIds()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getGuildId());
  return (0, a.useStateFromStores)([s.default], () => s.default.getGuild(null != t ? t : e[0]))
}