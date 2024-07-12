n.r(t), n.d(t, {
  default: function() {
return s;
  }
});
var r = n(633605),
  i = n(528734),
  a = n(217224),
  o = n(951516);

function s(e, t) {
  (0, o.Z)(1, arguments);
  var n, s, l, u, c, d, _, E, f = (0, r.j)(),
h = (0, a.Z)(null !== (n = null !== (s = null !== (l = null !== (u = null == t ? void 0 : t.weekStartsOn) && void 0 !== u ? u : null == t ? void 0 : null === (c = t.locale) || void 0 === c ? void 0 : null === (d = c.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== l ? l : f.weekStartsOn) && void 0 !== s ? s : null === (_ = f.locale) || void 0 === _ ? void 0 : null === (E = _.options) || void 0 === E ? void 0 : E.weekStartsOn) && void 0 !== n ? n : 0);
  if (!(h >= 0 && h <= 6))
throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var p = (0, i.default)(e),
m = p.getDay();
  return p.setDate(p.getDate() + ((m < h ? -7 : 0) + 6 - (m - h))), p.setHours(23, 59, 59, 999), p;
}