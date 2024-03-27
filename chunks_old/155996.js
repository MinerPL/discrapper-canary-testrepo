"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("884691"),
  a = n("298386"),
  s = n("65597"),
  i = n("656038"),
  r = n("42203"),
  u = n("923959"),
  o = n("449008");

function d(e) {
  let t = (0, s.useStateFromStoresArray)([u.default], () => u.default.getVocalChannelIds(e)),
    n = (0, s.useStateFromStoresArray)([r.default], () => t.map(e => r.default.getChannel(e)).filter(o.isNotNullish), [t]),
    d = l.useMemo(() => n.filter(e => !(0, i.default)(e) && e.type === a.ChannelTypes.GUILD_VOICE), [n]);
  return d
}