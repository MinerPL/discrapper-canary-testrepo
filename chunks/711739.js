let t = /^xn--/,
  n = /[^\0-\x7E]/,
  r = /[\x2E\u3002\uFF0E\uFF61]/g,
  i = {
overflow: 'Overflow: input needs wider integers to process',
'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
'invalid-input': 'Invalid input'
  },
  a = 35,
  s = Math.floor,
  o = String.fromCharCode;

function l(e) {
  throw RangeError(i[e]);
}

function u(e, t) {
  let n = e.split('@'),
i = '';
  return n.length > 1 && (i = n[0] + '@', e = n[1]), i + function(e, t) {
let n = [],
  r = e.length;
for (; r--;)
  n[r] = t(e[r]);
return n;
  }((e = e.replace(r, '.')).split('.'), t).join('.');
}

function c(e) {
  let t = [],
n = 0,
r = e.length;
  for (; n < r;) {
let i = e.charCodeAt(n++);
if (i >= 55296 && i <= 56319 && n < r) {
  let r = e.charCodeAt(n++);
  (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), n--);
} else
  t.push(i);
  }
  return t;
}
let d = function(e, t) {
return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
  },
  _ = function(e, t, n) {
let r = 0;
for (e = n ? s(e / 700) : e >> 1, e += s(e / t); e > 26 * a >> 1; r += 36)
  e = s(e / a);
return s(r + (a + 1) * e / (e + 38));
  },
  E = function(e) {
let t = [],
  n = e.length,
  r = 0,
  i = 128,
  a = 72,
  o = e.lastIndexOf('-');
o < 0 && (o = 0);
for (let n = 0; n < o; ++n)
  e.charCodeAt(n) >= 128 && l('not-basic'), t.push(e.charCodeAt(n));
for (let c = o > 0 ? o + 1 : 0; c < n;) {
  let o = r;
  for (let t = 1, i = 36;; i += 36) {
    var u;
    c >= n && l('invalid-input');
    let o = (u = e.charCodeAt(c++)) - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : 36;
    (o >= 36 || o > s((2147483647 - r) / t)) && l('overflow'), r += o * t;
    let d = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
    if (o < d)
      break;
    let _ = 36 - d;
    t > s(2147483647 / _) && l('overflow'), t *= _;
  }
  let d = t.length + 1;
  a = _(r - o, d, 0 == o), s(r / d) > 2147483647 - i && l('overflow'), i += s(r / d), r %= d, t.splice(r++, 0, i);
}
return String.fromCodePoint(...t);
  },
  f = function(e) {
let t = [],
  n = (e = c(e)).length,
  r = 128,
  i = 0,
  a = 72;
for (let n of e)
  n < 128 && t.push(o(n));
let u = t.length,
  E = u;
for (u && t.push('-'); E < n;) {
  let n = 2147483647;
  for (let t of e)
    t >= r && t < n && (n = t);
  let c = E + 1;
  for (let f of (n - r > s((2147483647 - i) / c) && l('overflow'), i += (n - r) * c, r = n, e))
    if (f < r && ++i > 2147483647 && l('overflow'), f == r) {
      let e = i;
      for (let n = 36;; n += 36) {
        let r = n <= a ? 1 : n >= a + 26 ? 26 : n - a;
        if (e < r)
          break;
        let i = e - r,
          l = 36 - r;
        t.push(o(d(r + i % l, 0))), e = s(i / l);
      }
      t.push(o(d(e, 0))), a = _(i, c, E == u), i = 0, ++E;
    }
    ++ i, ++r;
}
return t.join('');
  };
e.exports = {
  version: '2.1.0',
  ucs2: {
decode: c,
encode: e => String.fromCodePoint(...e)
  },
  decode: E,
  encode: f,
  toASCII: function(e) {
return u(e, function(e) {
  return n.test(e) ? 'xn--' + f(e) : e;
});
  },
  toUnicode: function(e) {
return u(e, function(e) {
  return t.test(e) ? E(e.slice(4).toLowerCase()) : e;
});
  }
};