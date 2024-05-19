"use strict";
n.r(t), n.d(t, {
  useMutualGuilds: function() {
    return r
  }
});
var a = n("442837"),
  s = n("271383"),
  l = n("430824"),
  i = n("823379");

function r(e) {
  return (0, a.useStateFromStores)([s.default, l.default], () => s.default.memberOf(e).map(l.default.getGuild).filter(i.isNotNullish))
}