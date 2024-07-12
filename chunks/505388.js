var r = n(363406),
  i = Object.prototype.hasOwnProperty,
  a = Array.isArray,
  o = function() {
for (var e = [], t = 0; t < 256; ++t)
  e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
return e;
  }(),
  s = function(e) {
for (; e.length > 1;) {
  var t = e.pop(),
    n = t.obj[t.prop];
  if (a(n)) {
    for (var r = [], i = 0; i < n.length; ++i)
      void 0 !== n[i] && r.push(n[i]);
    t.obj[t.prop] = r;
  }
}
  },
  l = function(e, t) {
for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)
  void 0 !== e[r] && (n[r] = e[r]);
return n;
  };
e.exports = {
  arrayToObject: l,
  assign: function(e, t) {
return Object.keys(t).reduce(function(e, n) {
  return e[n] = t[n], e;
}, e);
  },
  combine: function(e, t) {
return [].concat(e, t);
  },
  compact: function(e) {
for (var t = [{
    obj: {
      o: e
    },
    prop: 'o'
  }], n = [], r = 0; r < t.length; ++r) {
  for (var i = t[r], a = i.obj[i.prop], o = Object.keys(a), l = 0; l < o.length; ++l) {
    var u = o[l],
      c = a[u];
    'object' == typeof c && null !== c && -1 === n.indexOf(c) && (t.push({
      obj: a,
      prop: u
    }), n.push(c));
  }
}
return s(t), e;
  },
  decode: function(e, t, n) {
var r = e.replace(/\+/g, ' ');
if ('iso-8859-1' === n)
  return r.replace(/%[0-9a-f]{2}/gi, unescape);
try {
  return decodeURIComponent(r);
} catch (e) {
  return r;
}
  },
  encode: function(e, t, n, i, a) {
if (0 === e.length)
  return e;
var s = e;
if ('symbol' == typeof e ? s = Symbol.prototype.toString.call(e) : 'string' != typeof e && (s = String(e)), 'iso-8859-1' === n)
  return escape(s).replace(/%u[0-9a-f]{4}/gi, function(e) {
    return '%26%23' + parseInt(e.slice(2), 16) + '%3B';
  });
for (var l = '', u = 0; u < s.length; ++u) {
  var c = s.charCodeAt(u);
  if (45 === c || 46 === c || 95 === c || 126 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === r.RFC1738 && (40 === c || 41 === c)) {
    l += s.charAt(u);
    continue;
  }
  if (c < 128) {
    l += o[c];
    continue;
  }
  if (c < 2048) {
    l += o[192 | c >> 6] + o[128 | 63 & c];
    continue;
  }
  if (c < 55296 || c >= 57344) {
    l += o[224 | c >> 12] + o[128 | c >> 6 & 63] + o[128 | 63 & c];
    continue;
  }
  u += 1, l += o[240 | (c = 65536 + ((1023 & c) << 10 | 1023 & s.charCodeAt(u))) >> 18] + o[128 | c >> 12 & 63] + o[128 | c >> 6 & 63] + o[128 | 63 & c];
}
return l;
  },
  isBuffer: function(e) {
return !!e && 'object' == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
  },
  isRegExp: function(e) {
return '[object RegExp]' === Object.prototype.toString.call(e);
  },
  maybeMap: function(e, t) {
if (a(e)) {
  for (var n = [], r = 0; r < e.length; r += 1)
    n.push(t(e[r]));
  return n;
}
return t(e);
  },
  merge: function e(t, n, r) {
if (!n)
  return t;
if ('object' != typeof n) {
  if (a(t))
    t.push(n);
  else {
    if (!t || 'object' != typeof t)
      return [
        t,
        n
      ];
    (r && (r.plainObjects || r.allowPrototypes) || !i.call(Object.prototype, n)) && (t[n] = !0);
  }
  return t;
}
if (!t || 'object' != typeof t)
  return [t].concat(n);
var o = t;
return (a(t) && !a(n) && (o = l(t, r)), a(t) && a(n)) ? (n.forEach(function(n, a) {
  if (i.call(t, a)) {
    var o = t[a];
    o && 'object' == typeof o && n && 'object' == typeof n ? t[a] = e(o, n, r) : t.push(n);
  } else
    t[a] = n;
}), t) : Object.keys(n).reduce(function(t, a) {
  var o = n[a];
  return i.call(t, a) ? t[a] = e(t[a], o, r) : t[a] = o, t;
}, o);
  }
};