"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var r = n(528734),
  i = n(951516),
  a = n(217224),
  o = n(633605);

function s(e, t, n) {
  (0, i.Z)(2, arguments);
  var s, u, c, l, d, f, p, h, m = (0, o.j)(),
    g = (0, a.Z)(null !== (s = null !== (u = null !== (c = null !== (l = null == n ? void 0 : n.weekStartsOn) && void 0 !== l ? l : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== c ? c : m.weekStartsOn) && void 0 !== u ? u : null === (p = m.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.weekStartsOn) && void 0 !== s ? s : 0);
  if (!(g >= 0 && g <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var _ = (0, r.default)(e),
    b = (0, a.Z)(t),
    v = _.getUTCDay();
  return _.setUTCDate(_.getUTCDate() + (((b % 7 + 7) % 7 < g ? 7 : 0) + b - v)), _
}