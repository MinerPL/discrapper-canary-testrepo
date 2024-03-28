"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("442837"),
  l = n("314897"),
  s = n("858340"),
  i = n("959457"),
  r = n("557457"),
  o = n("614963"),
  u = n("981631");

function d(e) {
  let t = (0, r.getMaxQuality)(e),
    n = e.stream.guildId,
    d = e.stream.ownerId;
  return (0, a.useStateFromStores)([i.default, s.default, l.default], () => null != d ? (0, o.default)(i.default.getQuality(), i.default.getStatsHistory(n, d, d === l.default.getId()), d === l.default.getId() && null != s.default.getHookError(u.MediaEngineHookTypes.SOUND), t) : null, [t, n, d])
}