n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(528734),
  i = n(951516),
  a = n(217224),
  o = n(633605);

function s(e, t, n) {
  (0, i.Z)(2, arguments);
  var s, l, u, c, d, _, E, f, h = (0, o.j)(),
p = (0, a.Z)(null !== (s = null !== (l = null !== (u = null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c ? c : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (_ = d.options) || void 0 === _ ? void 0 : _.weekStartsOn) && void 0 !== u ? u : h.weekStartsOn) && void 0 !== l ? l : null === (E = h.locale) || void 0 === E ? void 0 : null === (f = E.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== s ? s : 0);
  if (!(p >= 0 && p <= 6))
throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var m = (0, r.default)(e),
I = (0, a.Z)(t),
T = m.getUTCDay();
  return m.setUTCDate(m.getUTCDate() + (((I % 7 + 7) % 7 < p ? 7 : 0) + I - T)), m;
}