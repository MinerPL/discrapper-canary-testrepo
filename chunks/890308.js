e = n.nmd(e), ! function(r) {
  var i = t && !t.nodeType && t,
a = e && !e.nodeType && e,
s = 'object' == typeof n.g && n.g;
  (s.global === s || s.window === s || s.self === s) && (r = s);
  var o, l, u = /^xn--/,
c = /[^\x20-\x7E]/,
d = /[\x2E\u3002\uFF0E\uFF61]/g,
_ = {
  overflow: 'Overflow: input needs wider integers to process',
  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  'invalid-input': 'Invalid input'
},
E = 35,
f = Math.floor,
h = String.fromCharCode;

  function p(e) {
throw RangeError(_[e]);
  }

  function m(e, t) {
for (var n = e.length, r = []; n--;)
  r[n] = t(e[n]);
return r;
  }

  function I(e, t) {
var n = e.split('@'),
  r = '';
return n.length > 1 && (r = n[0] + '@', e = n[1]), r + m((e = e.replace(d, '.')).split('.'), t).join('.');
  }

  function T(e) {
for (var t, n, r = [], i = 0, a = e.length; i < a;)
  (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? (64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
return r;
  }

  function g(e) {
return m(e, function(e) {
  var t = '';
  return e > 65535 && (e -= 65536, t += h(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += h(e);
}).join('');
  }

  function S(e, t) {
return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
  }

  function A(e, t, n) {
var r = 0;
for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 26 * E >> 1; r += 36)
  e = f(e / E);
return f(r + (E + 1) * e / (e + 38));
  }

  function N(e) {
var t, n, r, i, a, s, o, l, u, c, d, _ = [],
  E = e.length,
  h = 0,
  m = 128,
  I = 72;
for ((r = e.lastIndexOf('-')) < 0 && (r = 0), i = 0; i < r; ++i)
  e.charCodeAt(i) >= 128 && p('not-basic'), _.push(e.charCodeAt(i));
for (a = r > 0 ? r + 1 : 0; a < E;) {
  for (s = h, o = 1, l = 36;; l += 36) {
    ;
    if (a >= E && p('invalid-input'), ((u = (t = e.charCodeAt(a++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36) >= 36 || u > f((2147483647 - h) / o)) && p('overflow'), h += u * o, u < (c = l <= I ? 1 : l >= I + 26 ? 26 : l - I))
      break;
    o > f(2147483647 / (d = 36 - c)) && p('overflow'), o *= d;
  }
  I = A(h - s, n = _.length + 1, 0 == s), f(h / n) > 2147483647 - m && p('overflow'), m += f(h / n), h %= n, _.splice(h++, 0, m);
}
return g(_);
  }

  function v(e) {
var t, n, r, i, a, s, o, l, u, c, d, _, E, m, I, g = [];
for (s = 0, _ = (e = T(e)).length, t = 128, n = 0, a = 72; s < _; ++s)
  (d = e[s]) < 128 && g.push(h(d));
for (r = i = g.length, i && g.push('-'); r < _;) {
  for (o = 2147483647, s = 0; s < _; ++s)
    (d = e[s]) >= t && d < o && (o = d);
  for (o - t > f((2147483647 - n) / (E = r + 1)) && p('overflow'), n += (o - t) * E, t = o, s = 0; s < _; ++s)
    if ((d = e[s]) < t && ++n > 2147483647 && p('overflow'), d == t) {
      for (l = n, u = 36; !(l < (c = u <= a ? 1 : u >= a + 26 ? 26 : u - a)); u += 36) {
        ;
        I = l - c, m = 36 - c, g.push(h(S(c + I % m, 0))), l = f(I / m);
      }
      g.push(h(S(l, 0))), a = A(n, E, r == i), n = 0, ++r;
    }
    ++ n, ++t;
}
return g.join('');
  }
  if (o = {
  version: '1.4.1',
  ucs2: {
    decode: T,
    encode: g
  },
  decode: N,
  encode: v,
  toASCII: function(e) {
    return I(e, function(e) {
      return c.test(e) ? 'xn--' + v(e) : e;
    });
  },
  toUnicode: function(e) {
    return I(e, function(e) {
      return u.test(e) ? N(e.slice(4).toLowerCase()) : e;
    });
  }
}, 'function' == typeof define && 'object' == typeof define.amd && define.amd)
define('punycode', function() {
  return o;
});
  else if (i && a) {
if (e.exports == i)
  a.exports = o;
else
  for (l in o)
    o.hasOwnProperty(l) && (i[l] = o[l]);
  } else
r.punycode = o;
}(this);