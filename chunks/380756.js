"use strict";
n("424973"), n("808653"), n("781738");
var r = n("280973"),
  i = Object.prototype.hasOwnProperty,
  o = Array.isArray,
  s = function() {
    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e
  }(),
  a = function(e) {
    for (; e.length > 1;) {
      var t = e.pop(),
        n = t.obj[t.prop];
      if (o(n)) {
        for (var r = [], i = 0; i < n.length; ++i) void 0 !== n[i] && r.push(n[i]);
        t.obj[t.prop] = r
      }
    }
  },
  c = function(e, t) {
    for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
    return n
  };
e.exports = {
  arrayToObject: c,
  assign: function(e, t) {
    return Object.keys(t).reduce(function(e, n) {
      return e[n] = t[n], e
    }, e)
  },
  combine: function(e, t) {
    return [].concat(e, t)
  },
  compact: function(e) {
    for (var t = [{
        obj: {
          o: e
        },
        prop: "o"
      }], n = [], r = 0; r < t.length; ++r) {
      for (var i = t[r], o = i.obj[i.prop], s = Object.keys(o), c = 0; c < s.length; ++c) {
        var u = s[c],
          d = o[u];
        "object" == typeof d && null !== d && -1 === n.indexOf(d) && (t.push({
          obj: o,
          prop: u
        }), n.push(d))
      }
    }
    return a(t), e
  },
  decode: function(e, t, n) {
    var r = e.replace(/\+/g, " ");
    if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(r)
    } catch (e) {
      return r
    }
  },
  encode: function(e, t, n, i, o) {
    if (0 === e.length) return e;
    var a = e;
    if ("symbol" == typeof e ? a = Symbol.prototype.toString.call(e) : "string" != typeof e && (a = String(e)), "iso-8859-1" === n) return escape(a).replace(/%u[0-9a-f]{4}/gi, function(e) {
      return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
    });
    for (var c = "", u = 0; u < a.length; ++u) {
      var d = a.charCodeAt(u);
      if (45 === d || 46 === d || 95 === d || 126 === d || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || o === r.RFC1738 && (40 === d || 41 === d)) {
        c += a.charAt(u);
        continue
      }
      if (d < 128) {
        c += s[d];
        continue
      }
      if (d < 2048) {
        c += s[192 | d >> 6] + s[128 | 63 & d];
        continue
      }
      if (d < 55296 || d >= 57344) {
        c += s[224 | d >> 12] + s[128 | d >> 6 & 63] + s[128 | 63 & d];
        continue
      }
      u += 1, c += s[240 | (d = 65536 + ((1023 & d) << 10 | 1023 & a.charCodeAt(u))) >> 18] + s[128 | d >> 12 & 63] + s[128 | d >> 6 & 63] + s[128 | 63 & d]
    }
    return c
  },
  isBuffer: function(e) {
    return !!e && "object" == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
  },
  isRegExp: function(e) {
    return "[object RegExp]" === Object.prototype.toString.call(e)
  },
  maybeMap: function(e, t) {
    if (o(e)) {
      for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
      return n
    }
    return t(e)
  },
  merge: function e(t, n, r) {
    if (!n) return t;
    if ("object" != typeof n) {
      if (o(t)) t.push(n);
      else {
        if (!t || "object" != typeof t) return [t, n];
        (r && (r.plainObjects || r.allowPrototypes) || !i.call(Object.prototype, n)) && (t[n] = !0)
      }
      return t
    }
    if (!t || "object" != typeof t) return [t].concat(n);
    var s = t;
    return (o(t) && !o(n) && (s = c(t, r)), o(t) && o(n)) ? (n.forEach(function(n, o) {
      if (i.call(t, o)) {
        var s = t[o];
        s && "object" == typeof s && n && "object" == typeof n ? t[o] = e(s, n, r) : t.push(n)
      } else t[o] = n
    }), t) : Object.keys(n).reduce(function(t, o) {
      var s = n[o];
      return i.call(t, o) ? t[o] = e(t[o], s, r) : t[o] = s, t
    }, s)
  }
}