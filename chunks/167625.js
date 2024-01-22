"use strict";
n("781738"), n("424973"), n("70102");
var r = n("380756"),
  i = Object.prototype.hasOwnProperty,
  o = Array.isArray,
  s = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: r.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
  a = function(e, t) {
    return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
  },
  c = function(e, t) {
    var n = {
        __proto__: null
      },
      c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
      u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
      d = c.split(t.delimiter, u),
      l = -1,
      f = t.charset;
    if (t.charsetSentinel)
      for (p = 0; p < d.length; ++p) 0 === d[p].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[p] ? f = "utf-8" : "utf8=%26%2310003%3B" === d[p] && (f = "iso-8859-1"), l = p, p = d.length);
    for (p = 0; p < d.length; ++p)
      if (p !== l) {
        var p, h, g, b = d[p],
          v = b.indexOf("]="),
          m = -1 === v ? b.indexOf("=") : v + 1;
        if (-1 === m ? (h = t.decoder(b, s.decoder, f, "key"), g = t.strictNullHandling ? null : "") : (h = t.decoder(b.slice(0, m), s.decoder, f, "key"), g = r.maybeMap(a(b.slice(m + 1), t), function(e) {
            return t.decoder(e, s.decoder, f, "value")
          })), g && t.interpretNumericEntities && "iso-8859-1" === f) g = g.replace(/&#(\d+);/g, function(e, t) {
          return String.fromCharCode(parseInt(t, 10))
        });
        b.indexOf("[]=") > -1 && (g = o(g) ? [g] : g), i.call(n, h) ? n[h] = r.combine(n[h], g) : n[h] = g
      } return n
  },
  u = function(e, t, n, r) {
    for (var i = r ? t : a(t, n), o = e.length - 1; o >= 0; --o) {
      var s, c = e[o];
      if ("[]" === c && n.parseArrays) s = [].concat(i);
      else {
        s = n.plainObjects ? Object.create(null) : {};
        var u = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c,
          d = parseInt(u, 10);
        n.parseArrays || "" !== u ? !isNaN(d) && c !== u && String(d) === u && d >= 0 && n.parseArrays && d <= n.arrayLimit ? (s = [])[d] = i : "__proto__" !== u && (s[u] = i) : s = {
          0: i
        }
      }
      i = s
    }
    return i
  },
  d = function(e, t, n, r) {
    if (e) {
      var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        s = /(\[[^[\]]*])/g,
        a = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
        c = a ? o.slice(0, a.index) : o,
        d = [];
      if (c) {
        if (!n.plainObjects && i.call(Object.prototype, c) && !n.allowPrototypes) return;
        d.push(c)
      }
      for (var l = 0; n.depth > 0 && null !== (a = s.exec(o)) && l < n.depth;) {
        if (l += 1, !n.plainObjects && i.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes) return;
        d.push(a[1])
      }
      return a && d.push("[" + o.slice(a.index) + "]"), u(d, t, n, r)
    }
  },
  l = function(e) {
    if (!e) return s;
    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var t = void 0 === e.charset ? s.charset : e.charset;
    return {
      allowDots: void 0 === e.allowDots ? s.allowDots : !!e.allowDots,
      allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
      allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : s.allowSparse,
      arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
      comma: "boolean" == typeof e.comma ? e.comma : s.comma,
      decoder: "function" == typeof e.decoder ? e.decoder : s.decoder,
      delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
      depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
      ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
      parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
      parseArrays: !1 !== e.parseArrays,
      plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n = l(t);
  if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
  for (var i = "string" == typeof e ? c(e, n) : e, o = n.plainObjects ? Object.create(null) : {}, s = Object.keys(i), a = 0; a < s.length; ++a) {
    var u = s[a],
      f = d(u, i[u], n, "string" == typeof e);
    o = r.merge(o, f, n)
  }
  return !0 === n.allowSparse ? o : r.compact(o)
}