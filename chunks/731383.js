"use strict";
var r = n(728804),
  i = n(505388),
  a = n(363406),
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
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
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
  m = function e(t, n, a, o, s, c, d, f, m, g, _, b, v, y, E, S) {
    for (var x, w, C = t, T = S, D = 0, M = !1; void 0 !== (T = T.get(h)) && !M;) {
      var O = T.get(t);
      if (D += 1, void 0 !== O) {
        if (O === D) throw RangeError("Cyclic object value");
        M = !0
      }
      void 0 === T.get(h) && (D = 0)
    }
    if ("function" == typeof f ? C = f(n, C) : C instanceof Date ? C = _(C) : "comma" === a && u(C) && (C = i.maybeMap(C, function(e) {
        return e instanceof Date ? _(e) : e
      })), null === C) {
      if (s) return d && !y ? d(n, p.encoder, E, "key", b) : n;
      C = ""
    }
    if ("string" == typeof(x = C) || "number" == typeof x || "boolean" == typeof x || "symbol" == typeof x || "bigint" == typeof x || i.isBuffer(C)) return d ? [v(y ? n : d(n, p.encoder, E, "key", b)) + "=" + v(d(C, p.encoder, E, "value", b))] : [v(n) + "=" + v(String(C))];
    var A = [];
    if (void 0 === C) return A;
    if ("comma" === a && u(C)) y && d && (C = i.maybeMap(C, d)), w = [{
      value: C.length > 0 ? C.join(",") || null : void 0
    }];
    else if (u(f)) w = f;
    else {
      var k = Object.keys(C);
      w = m ? k.sort(m) : k
    }
    for (var R = o && u(C) && 1 === C.length ? n + "[]" : n, N = 0; N < w.length; ++N) {
      var I = w[N],
        L = "object" == typeof I && void 0 !== I.value ? I.value : C[I];
      if (!c || null !== L) {
        var P = u(C) ? "function" == typeof a ? a(R, I) : R : R + (g ? "." + I : "[" + I + "]");
        S.set(t, D);
        var B = r();
        B.set(h, S), l(A, e(L, P, a, o, s, c, "comma" === a && y && u(C) ? null : d, f, m, g, _, b, v, y, E, B))
      }
    }
    return A
  },
  g = function(e) {
    if (!e) return p;
    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t = e.charset || p.charset;
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = a.default;
    if (void 0 !== e.format) {
      if (!o.call(a.formatters, e.format)) throw TypeError("Unknown format option provided.");
      n = e.format
    }
    var r = a.formatters[n],
      i = p.filter;
    return ("function" == typeof e.filter || u(e.filter)) && (i = e.filter), {
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
  var n, i, a, o = e,
    c = g(t);
  "function" == typeof c.filter ? o = (i = c.filter)("", o) : u(c.filter) && (n = i = c.filter);
  var d = [];
  if ("object" != typeof o || null === o) return "";
  a = t && t.arrayFormat in s ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
  var f = s[a];
  if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
  var p = "comma" === f && t && t.commaRoundTrip;
  !n && (n = Object.keys(o)), c.sort && n.sort(c.sort);
  for (var h = r(), _ = 0; _ < n.length; ++_) {
    var b = n[_];
    if (!c.skipNulls || null !== o[b]) l(d, m(o[b], b, f, p, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset, h))
  }
  var v = d.join(c.delimiter),
    y = !0 === c.addQueryPrefix ? "?" : "";
  return c.charsetSentinel && ("iso-8859-1" === c.charset ? y += "utf8=%26%2310003%3B&" : y += "utf8=%E2%9C%93&"), v.length > 0 ? y + v : ""
}