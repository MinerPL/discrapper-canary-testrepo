"use strict";
n("424973"), n("70102");
var r = n("890741"),
  i = n("380756"),
  o = n("280973"),
  s = Object.prototype.hasOwnProperty,
  a = {
    brackets: function(e) {
      return e + "[]"
    },
    comma: "comma",
    indices: function(e, t) {
      return e + "[" + t + "]"
    },
    repeat: function(e) {
      return e
    }
  },
  c = Array.isArray,
  u = Array.prototype.push,
  d = function(e, t) {
    u.apply(e, c(t) ? t : [t])
  },
  l = Date.prototype.toISOString,
  f = o.default,
  p = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: i.encode,
    encodeValuesOnly: !1,
    format: f,
    formatter: o.formatters[f],
    indices: !1,
    serializeDate: function(e) {
      return l.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  h = {},
  g = function e(t, n, o, s, a, u, l, f, g, b, v, m, y, x, w, S) {
    for (var k, _, E = t, M = S, D = 0, C = !1; void 0 !== (M = M.get(h)) && !C;) {
      var P = M.get(t);
      if (D += 1, void 0 !== P) {
        if (P === D) throw RangeError("Cyclic object value");
        C = !0
      }
      void 0 === M.get(h) && (D = 0)
    }
    if ("function" == typeof f ? E = f(n, E) : E instanceof Date ? E = v(E) : "comma" === o && c(E) && (E = i.maybeMap(E, function(e) {
        return e instanceof Date ? v(e) : e
      })), null === E) {
      if (a) return l && !x ? l(n, p.encoder, w, "key", m) : n;
      E = ""
    }
    if ("string" == typeof(k = E) || "number" == typeof k || "boolean" == typeof k || "symbol" == typeof k || "bigint" == typeof k || i.isBuffer(E)) return l ? [y(x ? n : l(n, p.encoder, w, "key", m)) + "=" + y(l(E, p.encoder, w, "value", m))] : [y(n) + "=" + y(String(E))];
    var T = [];
    if (void 0 === E) return T;
    if ("comma" === o && c(E)) x && l && (E = i.maybeMap(E, l)), _ = [{
      value: E.length > 0 ? E.join(",") || null : void 0
    }];
    else if (c(f)) _ = f;
    else {
      var A = Object.keys(E);
      _ = g ? A.sort(g) : A
    }
    for (var R = s && c(E) && 1 === E.length ? n + "[]" : n, I = 0; I < _.length; ++I) {
      var O = _[I],
        j = "object" == typeof O && void 0 !== O.value ? O.value : E[O];
      if (!u || null !== j) {
        var N = c(E) ? "function" == typeof o ? o(R, O) : R : R + (b ? "." + O : "[" + O + "]");
        S.set(t, D);
        var L = r();
        L.set(h, S), d(T, e(j, N, o, s, a, u, "comma" === o && x && c(E) ? null : l, f, g, b, v, m, y, x, w, L))
      }
    }
    return T
  },
  b = function(e) {
    if (!e) return p;
    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t = e.charset || p.charset;
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = o.default;
    if (void 0 !== e.format) {
      if (!s.call(o.formatters, e.format)) throw TypeError("Unknown format option provided.");
      n = e.format
    }
    var r = o.formatters[n],
      i = p.filter;
    return ("function" == typeof e.filter || c(e.filter)) && (i = e.filter), {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
      allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
      delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : p.encode,
      encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
      filter: i,
      format: n,
      formatter: r,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n, i, o, s = e,
    u = b(t);
  "function" == typeof u.filter ? s = (i = u.filter)("", s) : c(u.filter) && (n = i = u.filter);
  var l = [];
  if ("object" != typeof s || null === s) return "";
  o = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
  var f = a[o];
  if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
  var p = "comma" === f && t && t.commaRoundTrip;
  !n && (n = Object.keys(s)), u.sort && n.sort(u.sort);
  for (var h = r(), v = 0; v < n.length; ++v) {
    var m = n[v];
    (!u.skipNulls || null !== s[m]) && d(l, g(s[m], m, f, p, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, h))
  }
  var y = l.join(u.delimiter),
    x = !0 === u.addQueryPrefix ? "?" : "";
  return u.charsetSentinel && ("iso-8859-1" === u.charset ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), y.length > 0 ? x + y : ""
}