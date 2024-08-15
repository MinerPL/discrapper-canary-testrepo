var r = n(728804),
  i = n(505388),
  a = n(363406),
  s = Object.prototype.hasOwnProperty,
  o = {
brackets: function(e) {
  return e + '[]';
},
comma: 'comma',
indices: function(e, t) {
  return e + '[' + t + ']';
},
repeat: function(e) {
  return e;
}
  },
  l = Array.isArray,
  u = Array.prototype.push,
  c = function(e, t) {
u.apply(e, l(t) ? t : [t]);
  },
  d = Date.prototype.toISOString,
  _ = a.default,
  E = {
addQueryPrefix: !1,
allowDots: !1,
charset: 'utf-8',
charsetSentinel: !1,
delimiter: '&',
encode: !0,
encoder: i.encode,
encodeValuesOnly: !1,
format: _,
formatter: a.formatters[_],
indices: !1,
serializeDate: function(e) {
  return d.call(e);
},
skipNulls: !1,
strictNullHandling: !1
  },
  f = {},
  h = function e(t, n, a, s, o, u, d, _, h, p, m, I, T, g, S, A) {
for (var N, v, O = t, R = A, C = 0, y = !1; void 0 !== (R = R.get(f)) && !y;) {
  var D = R.get(t);
  if (C += 1, void 0 !== D) {
    if (D === C)
      throw RangeError('Cyclic object value');
    y = !0;
  }
  void 0 === R.get(f) && (C = 0);
}
if ('function' == typeof _ ? O = _(n, O) : O instanceof Date ? O = m(O) : 'comma' === a && l(O) && (O = i.maybeMap(O, function(e) {
    return e instanceof Date ? m(e) : e;
  })), null === O) {
  if (o)
    return d && !g ? d(n, E.encoder, S, 'key', I) : n;
  O = '';
}
if ('string' == typeof(N = O) || 'number' == typeof N || 'boolean' == typeof N || 'symbol' == typeof N || 'bigint' == typeof N || i.isBuffer(O))
  return d ? [T(g ? n : d(n, E.encoder, S, 'key', I)) + '=' + T(d(O, E.encoder, S, 'value', I))] : [T(n) + '=' + T(String(O))];
var L = [];
if (void 0 === O)
  return L;
if ('comma' === a && l(O))
  g && d && (O = i.maybeMap(O, d)), v = [{
    value: O.length > 0 ? O.join(',') || null : void 0
  }];
else if (l(_))
  v = _;
else {
  var b = Object.keys(O);
  v = h ? b.sort(h) : b;
}
for (var M = s && l(O) && 1 === O.length ? n + '[]' : n, P = 0; P < v.length; ++P) {
  var U = v[P],
    w = 'object' == typeof U && void 0 !== U.value ? U.value : O[U];
  if (!u || null !== w) {
    var x = l(O) ? 'function' == typeof a ? a(M, U) : M : M + (p ? '.' + U : '[' + U + ']');
    A.set(t, C);
    var G = r();
    G.set(f, A), c(L, e(w, x, a, s, o, u, 'comma' === a && g && l(O) ? null : d, _, h, p, m, I, T, g, S, G));
  }
}
return L;
  },
  p = function(e) {
if (!e)
  return E;
if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder)
  throw TypeError('Encoder has to be a function.');
var t = e.charset || E.charset;
if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
  throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
var n = a.default;
if (void 0 !== e.format) {
  if (!s.call(a.formatters, e.format))
    throw TypeError('Unknown format option provided.');
  n = e.format;
}
var r = a.formatters[n],
  i = E.filter;
return ('function' == typeof e.filter || l(e.filter)) && (i = e.filter), {
  addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : E.addQueryPrefix,
  allowDots: void 0 === e.allowDots ? E.allowDots : !!e.allowDots,
  charset: t,
  charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : E.charsetSentinel,
  delimiter: void 0 === e.delimiter ? E.delimiter : e.delimiter,
  encode: 'boolean' == typeof e.encode ? e.encode : E.encode,
  encoder: 'function' == typeof e.encoder ? e.encoder : E.encoder,
  encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : E.encodeValuesOnly,
  filter: i,
  format: n,
  formatter: r,
  serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : E.serializeDate,
  skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : E.skipNulls,
  sort: 'function' == typeof e.sort ? e.sort : null,
  strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : E.strictNullHandling
};
  };
e.exports = function(e, t) {
  var n, i, a, s = e,
u = p(t);
  'function' == typeof u.filter ? s = (i = u.filter)('', s) : l(u.filter) && (n = i = u.filter);
  var d = [];
  if ('object' != typeof s || null === s)
return '';
  a = t && t.arrayFormat in o ? t.arrayFormat : t && 'indices' in t ? t.indices ? 'indices' : 'repeat' : 'indices';
  var _ = o[a];
  if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip)
throw TypeError('`commaRoundTrip` must be a boolean, or absent');
  var E = 'comma' === _ && t && t.commaRoundTrip;
  !n && (n = Object.keys(s)), u.sort && n.sort(u.sort);
  for (var f = r(), m = 0; m < n.length; ++m) {
var I = n[m];
if (!u.skipNulls || null !== s[I])
  c(d, h(s[I], I, _, E, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, f));
  }
  var T = d.join(u.delimiter),
g = !0 === u.addQueryPrefix ? '?' : '';
  return u.charsetSentinel && ('iso-8859-1' === u.charset ? g += 'utf8=%26%2310003%3B&' : g += 'utf8=%E2%9C%93&'), T.length > 0 ? g + T : '';
};