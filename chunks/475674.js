"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("442837"),
  l = n("199902"),
  s = n("314897"),
  i = n("858340"),
  r = n("959457"),
  o = n("557457"),
  u = n("614963"),
  d = n("981631");

function c(e) {
  let t = (0, o.getMaxQuality)(e),
    n = e.stream.guildId,
    c = e.stream.ownerId;
  return (0, a.useStateFromStores)([r.default, i.default, s.default, l.default], () => {
    if (null == c) return null;
    let e = c === s.default.getId();
    if (!e && null == l.default.getActiveStreamForUser(c, n)) return null;
    let a = e && null != i.default.getHookError(d.MediaEngineHookTypes.SOUND);
    return (0, u.default)(r.default.getQuality(), r.default.getStatsHistory(n, c, e), a, t)
  }, [t, n, c])
}