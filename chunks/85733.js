"use strict";
var r = n(478497),
  i = n(995769),
  a = n(606956),
  o = Object.prototype.hasOwnProperty,
  s = {
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
  u = Array.isArray,
  c = Array.prototype.push,
  l = function(e, t) {
    c.apply(e, u(t) ? t : [t])
  },
  d = Date.prototype.toISOString,
  f = a.default,
  p = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: i.encode,
    encodeValuesOnly: !1,
    format: f,
    formatter: a.formatters[f],
    indices: !1,
    serializeDate: function(e) {
      return d.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  h = {},
  m = function e(t, n, a, o, s, c, d, f, m, g, _, b, v, y, E, S, x, w) {
    for (var C, T, D = t, M = w, O = 0, A = !1; void 0 !== (M = M.get(h)) && !A;) {
      var k = M.get(t);
      if (O += 1, void 0 !== k) {
        if (k === O) throw RangeError("Cyclic object value");
        A = !0
      }
      void 0 === M.get(h) && (O = 0)
    }
    if ("function" == typeof g ? D = g(n, D) : D instanceof Date ? D = v(D) : "comma" === a && u(D) && (D = i.maybeMap(D, function(e) {
        return e instanceof Date ? v(e) : e
      })), null === D) {
      if (c) return m && !S ? m(n, p.encoder, x, "key", y) : n;
      D = ""
    }
    if ("string" == typeof(C = D) || "number" == typeof C || "boolean" == typeof C || "symbol" == typeof C || "bigint" == typeof C || i.isBuffer(D)) return m ? [E(S ? n : m(n, p.encoder, x, "key", y)) + "=" + E(m(D, p.encoder, x, "value", y))] : [E(n) + "=" + E(String(D))];
    var R = [];
    if (void 0 === D) return R;
    if ("comma" === a && u(D)) S && m && (D = i.maybeMap(D, m)), T = [{
      value: D.length > 0 ? D.join(",") || null : void 0
    }];
    else if (u(g)) T = g;
    else {
      var N = Object.keys(D);
      T = _ ? N.sort(_) : N
    }
    var I = f ? n.replace(/\./g, "%2E") : n,
      L = o && u(D) && 1 === D.length ? I + "[]" : I;
    if (s && u(D) && 0 === D.length) return L + "[]";
    for (var P = 0; P < T.length; ++P) {
      var B = T[P],
        F = "object" == typeof B && void 0 !== B.value ? B.value : D[B];
      if (!d || null !== F) {
        var U = b && f ? B.replace(/\./g, "%2E") : B,
          j = u(D) ? "function" == typeof a ? a(L, U) : L : L + (b ? "." + U : "[" + U + "]");
        w.set(t, O);
        var Y = r();
        Y.set(h, w), l(R, e(F, j, a, o, s, c, d, f, "comma" === a && S && u(D) ? null : m, g, _, b, v, y, E, S, x, Y))
      }
    }
    return R
  },
  g = function(e) {
    if (!e) return p;
    if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys) throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t, n = e.charset || p.charset;
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = a.default;
    if (void 0 !== e.format) {
      if (!o.call(a.formatters, e.format)) throw TypeError("Unknown format option provided.");
      r = e.format
    }
    var i = a.formatters[r],
      c = p.filter;
    if (("function" == typeof e.filter || u(e.filter)) && (c = e.filter), t = e.arrayFormat in s ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : p.arrayFormat, "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
    var l = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || p.allowDots : !!e.allowDots;
    return {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
      allowDots: l,
      allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : p.allowEmptyArrays,
      arrayFormat: t,
      charset: n,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
      commaRoundTrip: e.commaRoundTrip,
      delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : p.encode,
      encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : p.encodeDotInKeys,
      encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
      filter: c,
      format: r,
      formatter: i,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n, i, a = e,
    o = g(t);
  "function" == typeof o.filter ? a = (i = o.filter)("", a) : u(o.filter) && (n = i = o.filter);
  var c = [];
  if ("object" != typeof a || null === a) return "";
  var d = s[o.arrayFormat],
    f = "comma" === d && o.commaRoundTrip;
  !n && (n = Object.keys(a)), o.sort && n.sort(o.sort);
  for (var p = r(), h = 0; h < n.length; ++h) {
    var _ = n[h];
    if (!o.skipNulls || null !== a[_]) l(c, m(a[_], _, d, f, o.allowEmptyArrays, o.strictNullHandling, o.skipNulls, o.encodeDotInKeys, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, p))
  }
  var b = c.join(o.delimiter),
    v = !0 === o.addQueryPrefix ? "?" : "";
  return o.charsetSentinel && ("iso-8859-1" === o.charset ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), b.length > 0 ? v + b : ""
}