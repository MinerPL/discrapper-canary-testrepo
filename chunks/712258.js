"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("990766"),
  s = n("161454"),
  l = n("373469"),
  i = n("42203"),
  r = n("305961"),
  o = n("42887"),
  u = n("957255"),
  d = n("18494"),
  c = n("703370"),
  f = n("223913"),
  E = n("479788"),
  h = n("375202");

function _() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, E.default)(o.default) || null != l.default.getCurrentUserActiveStream()) return !1;
  let t = (0, h.default)(s.default, c.default);
  if (null == t || t.isLauncher && !e) return !1;
  let n = d.default.getVoiceChannelId(),
    _ = i.default.getChannel(n);
  if (null == _) return !1;
  let C = _.getGuildId();
  return !!(0, f.canStreamInChannel)(_, r.default, u.default, !1) && ((0, a.startStream)(C, _.id, {
    pid: t.pid
  }), !0)
}