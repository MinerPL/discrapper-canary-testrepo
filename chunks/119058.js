n.r(t), n.d(t, {
  default: function() {
return T;
  }
});
var r = n(310644),
  i = n(465735),
  a = n(528734),
  s = n(570289),
  o = n(128961),
  l = n(424421),
  u = n(198050),
  c = n(217224),
  d = n(951516),
  _ = n(633605),
  E = n(393655),
  f = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  p = /^'([^]*?)'?$/,
  m = /''/g,
  I = /[a-zA-Z]/;

function T(e, t, n) {
  (0, d.Z)(2, arguments);
  var T, g, S, A, N, v, O, R, C, y, D, L, b, M, P, U, w, x, G = String(t),
k = (0, _.j)(),
B = null !== (T = null !== (g = null == n ? void 0 : n.locale) && void 0 !== g ? g : k.locale) && void 0 !== T ? T : E.Z,
F = (0, c.Z)(null !== (S = null !== (A = null !== (N = null !== (v = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== v ? v : null == n ? void 0 : null === (O = n.locale) || void 0 === O ? void 0 : null === (R = O.options) || void 0 === R ? void 0 : R.firstWeekContainsDate) && void 0 !== N ? N : k.firstWeekContainsDate) && void 0 !== A ? A : null === (C = k.locale) || void 0 === C ? void 0 : null === (y = C.options) || void 0 === y ? void 0 : y.firstWeekContainsDate) && void 0 !== S ? S : 1);
  if (!(F >= 1 && F <= 7))
throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  var V = (0, c.Z)(null !== (D = null !== (L = null !== (b = null !== (M = null == n ? void 0 : n.weekStartsOn) && void 0 !== M ? M : null == n ? void 0 : null === (P = n.locale) || void 0 === P ? void 0 : null === (U = P.options) || void 0 === U ? void 0 : U.weekStartsOn) && void 0 !== b ? b : k.weekStartsOn) && void 0 !== L ? L : null === (w = k.locale) || void 0 === w ? void 0 : null === (x = w.options) || void 0 === x ? void 0 : x.weekStartsOn) && void 0 !== D ? D : 0);
  if (!(V >= 0 && V <= 6))
throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
  if (!B.localize)
throw RangeError('locale must contain localize property');
  if (!B.formatLong)
throw RangeError('locale must contain formatLong property');
  var H = (0, a.default)(e);
  if (!(0, r.default)(H))
throw RangeError('Invalid time value');
  var Z = (0, l.Z)(H),
Y = (0, i.Z)(H, Z),
j = {
  firstWeekContainsDate: F,
  weekStartsOn: V,
  locale: B,
  _originalDate: H
};
  return G.match(h).map(function(e) {
var t = e[0];
return 'p' === t || 'P' === t ? (0, o.Z[t])(e, B.formatLong) : e;
  }).join('').match(f).map(function(r) {
if ('\'\'' === r)
  return '\'';
var i = r[0];
if ('\'' === i)
  return function(e) {
    var t = e.match(p);
    return t ? t[1].replace(m, '\'') : e;
  }(r);
var a = s.Z[i];
if (a)
  return !(null != n && n.useAdditionalWeekYearTokens) && (0, u.Do)(r) && (0, u.qp)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.Iu)(r) && (0, u.qp)(r, t, String(e)), a(Y, r, B.localize, j);
if (i.match(I))
  throw RangeError('Format string contains an unescaped latin alphabet character `' + i + '`');
return r;
  }).join('');
}