var r = n(478497),
  i = n(995769),
  a = n(606956),
  o = Object.prototype.hasOwnProperty,
  s = {
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
allowEmptyArrays: !1,
arrayFormat: 'indices',
charset: 'utf-8',
charsetSentinel: !1,
delimiter: '&',
encode: !0,
encodeDotInKeys: !1,
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
  h = function e(t, n, a, o, s, u, d, _, h, p, m, I, T, g, S, A, N, v) {
for (var O, R, C = t, y = v, D = 0, L = !1; void 0 !== (y = y.get(f)) && !L;) {
  var b = y.get(t);
  if (D += 1, void 0 !== b) {
    if (b === D)
      throw RangeError('Cyclic object value');
    L = !0;
  }
  void 0 === y.get(f) && (D = 0);
}
if ('function' == typeof p ? C = p(n, C) : C instanceof Date ? C = T(C) : 'comma' === a && l(C) && (C = i.maybeMap(C, function(e) {
    return e instanceof Date ? T(e) : e;
  })), null === C) {
  if (u)
    return h && !A ? h(n, E.encoder, N, 'key', g) : n;
  C = '';
}
if ('string' == typeof(O = C) || 'number' == typeof O || 'boolean' == typeof O || 'symbol' == typeof O || 'bigint' == typeof O || i.isBuffer(C))
  return h ? [S(A ? n : h(n, E.encoder, N, 'key', g)) + '=' + S(h(C, E.encoder, N, 'value', g))] : [S(n) + '=' + S(String(C))];
var M = [];
if (void 0 === C)
  return M;
if ('comma' === a && l(C))
  A && h && (C = i.maybeMap(C, h)), R = [{
    value: C.length > 0 ? C.join(',') || null : void 0
  }];
else if (l(p))
  R = p;
else {
  var P = Object.keys(C);
  R = m ? P.sort(m) : P;
}
var U = _ ? n.replace(/\./g, '%2E') : n,
  w = o && l(C) && 1 === C.length ? U + '[]' : U;
if (s && l(C) && 0 === C.length)
  return w + '[]';
for (var x = 0; x < R.length; ++x) {
  var G = R[x],
    k = 'object' == typeof G && void 0 !== G.value ? G.value : C[G];
  if (!d || null !== k) {
    var B = I && _ ? G.replace(/\./g, '%2E') : G,
      F = l(C) ? 'function' == typeof a ? a(w, B) : w : w + (I ? '.' + B : '[' + B + ']');
    v.set(t, D);
    var V = r();
    V.set(f, v), c(M, e(k, F, a, o, s, u, d, _, 'comma' === a && A && l(C) ? null : h, p, m, I, T, g, S, A, N, V));
  }
}
return M;
  },
  p = function(e) {
if (!e)
  return E;
if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays)
  throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
if (void 0 !== e.encodeDotInKeys && 'boolean' != typeof e.encodeDotInKeys)
  throw TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder)
  throw TypeError('Encoder has to be a function.');
var t, n = e.charset || E.charset;
if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
  throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
var r = a.default;
if (void 0 !== e.format) {
  if (!o.call(a.formatters, e.format))
    throw TypeError('Unknown format option provided.');
  r = e.format;
}
var i = a.formatters[r],
  u = E.filter;
if (('function' == typeof e.filter || l(e.filter)) && (u = e.filter), t = e.arrayFormat in s ? e.arrayFormat : 'indices' in e ? e.indices ? 'indices' : 'repeat' : E.arrayFormat, 'commaRoundTrip' in e && 'boolean' != typeof e.commaRoundTrip)
  throw TypeError('`commaRoundTrip` must be a boolean, or absent');
var c = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || E.allowDots : !!e.allowDots;
return {
  addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : E.addQueryPrefix,
  allowDots: c,
  allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : E.allowEmptyArrays,
  arrayFormat: t,
  charset: n,
  charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : E.charsetSentinel,
  commaRoundTrip: e.commaRoundTrip,
  delimiter: void 0 === e.delimiter ? E.delimiter : e.delimiter,
  encode: 'boolean' == typeof e.encode ? e.encode : E.encode,
  encodeDotInKeys: 'boolean' == typeof e.encodeDotInKeys ? e.encodeDotInKeys : E.encodeDotInKeys,
  encoder: 'function' == typeof e.encoder ? e.encoder : E.encoder,
  encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : E.encodeValuesOnly,
  filter: u,
  format: r,
  formatter: i,
  serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : E.serializeDate,
  skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : E.skipNulls,
  sort: 'function' == typeof e.sort ? e.sort : null,
  strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : E.strictNullHandling
};
  };
e.exports = function(e, t) {
  var n, i, a = e,
o = p(t);
  'function' == typeof o.filter ? a = (i = o.filter)('', a) : l(o.filter) && (n = i = o.filter);
  var u = [];
  if ('object' != typeof a || null === a)
return '';
  var d = s[o.arrayFormat],
_ = 'comma' === d && o.commaRoundTrip;
  !n && (n = Object.keys(a)), o.sort && n.sort(o.sort);
  for (var E = r(), f = 0; f < n.length; ++f) {
var m = n[f];
if (!o.skipNulls || null !== a[m])
  c(u, h(a[m], m, d, _, o.allowEmptyArrays, o.strictNullHandling, o.skipNulls, o.encodeDotInKeys, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, E));
  }
  var I = u.join(o.delimiter),
T = !0 === o.addQueryPrefix ? '?' : '';
  return o.charsetSentinel && ('iso-8859-1' === o.charset ? T += 'utf8=%26%2310003%3B&' : T += 'utf8=%E2%9C%93&'), I.length > 0 ? T + I : '';
};