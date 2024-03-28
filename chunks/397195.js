"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("470079"),
  a = n("106351"),
  s = n("399606"),
  i = n("447003"),
  r = n("592125"),
  o = n("984933"),
  u = n("823379");

function d(e) {
  let t = (0, s.useStateFromStoresArray)([o.default], () => o.default.getVocalChannelIds(e)),
    n = (0, s.useStateFromStoresArray)([r.default], () => t.map(e => r.default.getChannel(e)).filter(u.isNotNullish), [t]);
  return l.useMemo(() => n.filter(e => !(0, i.default)(e) && e.type === a.ChannelTypes.GUILD_VOICE), [n])
}