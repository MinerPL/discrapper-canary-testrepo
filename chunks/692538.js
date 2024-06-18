"use strict";
var r = n(995769),
  i = Object.prototype.hasOwnProperty,
  a = Array.isArray,
  o = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !0,
    decoder: r.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
  s = function(e, t) {
    return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
  },
  u = function(e, t) {
    var n = {
        __proto__: null
      },
      u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
      c = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
      l = u.split(t.delimiter, c),
      d = -1,
      f = t.charset;
    if (t.charsetSentinel)
      for (p = 0; p < l.length; ++p) 0 === l[p].indexOf("utf8=") && ("utf8=%E2%9C%93" === l[p] ? f = "utf-8" : "utf8=%26%2310003%3B" === l[p] && (f = "iso-8859-1"), d = p, p = l.length);
    for (p = 0; p < l.length; ++p) {
      if (p !== d) {
        var p, h, m, g = l[p],
          _ = g.indexOf("]="),
          b = -1 === _ ? g.indexOf("=") : _ + 1;
        if (-1 === b ? (h = t.decoder(g, o.decoder, f, "key"), m = t.strictNullHandling ? null : "") : (h = t.decoder(g.slice(0, b), o.decoder, f, "key"), m = r.maybeMap(s(g.slice(b + 1), t), function(e) {
            return t.decoder(e, o.decoder, f, "value")
          })), m && t.interpretNumericEntities && "iso-8859-1" === f) m = m.replace(/&#(\d+);/g, function(e, t) {
          return String.fromCharCode(parseInt(t, 10))
        });
        g.indexOf("[]=") > -1 && (m = a(m) ? [m] : m);
        var v = i.call(n, h);
        v && "combine" === t.duplicates ? n[h] = r.combine(n[h], m) : (!v || "last" === t.duplicates) && (n[h] = m)
      }
    }
    return n
  },
  c = function(e, t, n, r) {
    for (var i = r ? t : s(t, n), a = e.length - 1; a >= 0; --a) {
      var o, u = e[a];
      if ("[]" === u && n.parseArrays) o = n.allowEmptyArrays && "" === i ? [] : [].concat(i);
      else {
        o = n.plainObjects ? Object.create(null) : {};
        var c = "[" === u.charAt(0) && "]" === u.charAt(u.length - 1) ? u.slice(1, -1) : u,
          l = n.decodeDotInKeys ? c.replace(/%2E/g, ".") : c,
          d = parseInt(l, 10);
        n.parseArrays || "" !== l ? !isNaN(d) && u !== l && String(d) === l && d >= 0 && n.parseArrays && d <= n.arrayLimit ? (o = [])[d] = i : "__proto__" !== l && (o[l] = i) : o = {
          0: i
        }
      }
      i = o
    }
    return i
  },
  l = function(e, t, n, r) {
    if (!!e) {
      var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        o = /(\[[^[\]]*])/g,
        s = n.depth > 0 && /(\[[^[\]]*])/.exec(a),
        u = s ? a.slice(0, s.index) : a,
        l = [];
      if (u) {
        if (!n.plainObjects && i.call(Object.prototype, u) && !n.allowPrototypes) return;
        l.push(u)
      }
      for (var d = 0; n.depth > 0 && null !== (s = o.exec(a)) && d < n.depth;) {
        if (d += 1, !n.plainObjects && i.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
        l.push(s[1])
      }
      return s && l.push("[" + a.slice(s.index) + "]"), c(l, t, n, r)
    }
  },
  d = function(e) {
    if (!e) return o;
    if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (void 0 !== e.decodeDotInKeys && "boolean" != typeof e.decodeDotInKeys) throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var t = void 0 === e.charset ? o.charset : e.charset,
      n = void 0 === e.duplicates ? o.duplicates : e.duplicates;
    if ("combine" !== n && "first" !== n && "last" !== n) throw TypeError("The duplicates option must be either combine, first, or last");
    return {
      allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || o.allowDots : !!e.allowDots,
      allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : o.allowEmptyArrays,
      allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
      allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : o.allowSparse,
      arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
      comma: "boolean" == typeof e.comma ? e.comma : o.comma,
      decodeDotInKeys: "boolean" == typeof e.decodeDotInKeys ? e.decodeDotInKeys : o.decodeDotInKeys,
      decoder: "function" == typeof e.decoder ? e.decoder : o.decoder,
      delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
      depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
      duplicates: n,
      ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
      parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
      parseArrays: !1 !== e.parseArrays,
      plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n = d(t);
  if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
  for (var i = "string" == typeof e ? u(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, o = Object.keys(i), s = 0; s < o.length; ++s) {
    var c = o[s],
      f = l(c, i[c], n, "string" == typeof e);
    a = r.merge(a, f, n)
  }
  return !0 === n.allowSparse ? a : r.compact(a)
}