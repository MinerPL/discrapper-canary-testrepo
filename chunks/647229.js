var r, i, a, s, o, l = {
  cipher: {},
  hash: {},
  keyexchange: {},
  mode: {},
  misc: {},
  codec: {},
  exception: {
corrupt: function(e) {
  this.toString = function() {
    return 'CORRUPT: ' + this.message;
  }, this.message = e;
},
invalid: function(e) {
  this.toString = function() {
    return 'INVALID: ' + this.message;
  }, this.message = e;
},
bug: function(e) {
  this.toString = function() {
    return 'BUG: ' + this.message;
  }, this.message = e;
},
notReady: function(e) {
  this.toString = function() {
    return 'NOT READY: ' + this.message;
  }, this.message = e;
}
  }
};

function u(e, t, n) {
  if (4 !== t.length)
throw new l.exception.invalid('invalid aes block size');
  var r = e.b[n],
i = t[0] ^ r[0],
a = t[n ? 3 : 1] ^ r[1],
s = t[2] ^ r[2];
  t = t[n ? 1 : 3] ^ r[3];
  var o, u, c, d, _ = r.length / 4 - 2,
E = 4,
f = [
  0,
  0,
  0,
  0
];
  e = (o = e.s[n])[0];
  var h = o[1],
p = o[2],
m = o[3],
I = o[4];
  for (d = 0; d < _; d++)
o = e[i >>> 24] ^ h[a >> 16 & 255] ^ p[s >> 8 & 255] ^ m[255 & t] ^ r[E], u = e[a >>> 24] ^ h[s >> 16 & 255] ^ p[t >> 8 & 255] ^ m[255 & i] ^ r[E + 1], c = e[s >>> 24] ^ h[t >> 16 & 255] ^ p[i >> 8 & 255] ^ m[255 & a] ^ r[E + 2], t = e[t >>> 24] ^ h[i >> 16 & 255] ^ p[a >> 8 & 255] ^ m[255 & s] ^ r[E + 3], E += 4, i = o, a = u, s = c;
  for (d = 0; 4 > d; d++)
f[n ? 3 & -d : d] = I[i >>> 24] << 24 ^ I[a >> 16 & 255] << 16 ^ I[s >> 8 & 255] << 8 ^ I[255 & t] ^ r[E++], o = i, i = a, a = s, s = t, t = o;
  return f;
}

function c(e, t) {
  var n, r, i, a = e.F,
s = e.b,
o = a[0],
l = a[1],
u = a[2],
c = a[3],
d = a[4],
_ = a[5],
E = a[6],
f = a[7];
  for (n = 0; 64 > n; n++)
16 > n ? r = t[n] : (r = t[n + 1 & 15], i = t[n + 14 & 15], r = t[15 & n] = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (i >>> 17 ^ i >>> 19 ^ i >>> 10 ^ i << 15 ^ i << 13) + t[15 & n] + t[n + 9 & 15] | 0), r = r + f + (d >>> 6 ^ d >>> 11 ^ d >>> 25 ^ d << 26 ^ d << 21 ^ d << 7) + (E ^ d & (_ ^ E)) + s[n], f = E, E = _, _ = d, d = c + r | 0, c = u, u = l, o = r + ((l = o) & u ^ c & (l ^ u)) + (l >>> 2 ^ l >>> 13 ^ l >>> 22 ^ l << 30 ^ l << 19 ^ l << 10) | 0;
  a[0] = a[0] + o | 0, a[1] = a[1] + l | 0, a[2] = a[2] + u | 0, a[3] = a[3] + c | 0, a[4] = a[4] + d | 0, a[5] = a[5] + _ | 0, a[6] = a[6] + E | 0, a[7] = a[7] + f | 0;
}

function d(e, t) {
  var n, r = l.random.K[e],
i = [];
  for (n in r)
r.hasOwnProperty(n) && i.push(r[n]);
  for (n = 0; n < i.length; n++)
i[n](t);
}

function _(e, t) {
  'undefined' != typeof window && window.performance && 'function' == typeof window.performance.now ? e.addEntropy(window.performance.now(), t, 'loadtime') : e.addEntropy(new Date().valueOf(), t, 'loadtime');
}

function E(e) {
  e.b = f(e).concat(f(e)), e.L = new l.cipher.aes(e.b);
}

function f(e) {
  for (var t = 0; 4 > t && (e.h[t] = e.h[t] + 1 | 0, !e.h[t]); t++);
  return e.L.encrypt(e.h);
}

function h(e, t) {
  return function() {
t.apply(e, arguments);
  };
}
l.cipher.aes = function(e) {
  this.s[0][0][0] || this.O();
  var t, n, r, i, a = this.s[0][4],
s = this.s[1];
  t = e.length;
  var o = 1;
  if (4 !== t && 6 !== t && 8 !== t)
throw new l.exception.invalid('invalid aes key size');
  for (this.b = [
  r = e.slice(0),
  i = []
], e = t; e < 4 * t + 28; e++)
n = r[e - 1], (0 == e % t || 8 === t && 4 == e % t) && (n = a[n >>> 24] << 24 ^ a[n >> 16 & 255] << 16 ^ a[n >> 8 & 255] << 8 ^ a[255 & n], 0 == e % t && (n = n << 8 ^ n >>> 24 ^ o << 24, o = o << 1 ^ 283 * (o >> 7))), r[e] = r[e - t] ^ n;
  for (t = 0; e; t++, e--)
n = r[3 & t ? e : e - 4], i[t] = 4 >= e || 4 > t ? n : s[0][a[n >>> 24]] ^ s[1][a[n >> 16 & 255]] ^ s[2][a[n >> 8 & 255]] ^ s[3][a[255 & n]];
}, l.cipher.aes.prototype = {
  encrypt: function(e) {
return u(this, e, 0);
  },
  decrypt: function(e) {
return u(this, e, 1);
  },
  s: [
[
  [],
  [],
  [],
  [],
  []
],
[
  [],
  [],
  [],
  [],
  []
]
  ],
  O: function() {
var e, t, n, r, i, a, s, o = this.s[0],
  l = this.s[1],
  u = o[4],
  c = l[4],
  d = [],
  _ = [];
for (e = 0; 256 > e; e++)
  _[(d[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
for (t = n = 0; !u[t]; t ^= r || 1, n = _[n] || 1)
  for (a = (a = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & a ^ 99, u[t] = a, c[a] = t, s = 16843009 * (i = d[e = d[r = d[t]]]) ^ 65537 * e ^ 257 * r ^ 16843008 * t, i = 257 * d[a] ^ 16843008 * a, e = 0; 4 > e; e++)
    o[e][t] = i = i << 24 ^ i >>> 8, l[e][a] = s = s << 24 ^ s >>> 8;
for (e = 0; 5 > e; e++)
  o[e] = o[e].slice(0), l[e] = l[e].slice(0);
  }
}, l.bitArray = {
  bitSlice: function(e, t, n) {
return e = l.bitArray.$(e.slice(t / 32), 32 - (31 & t)).slice(1), void 0 === n ? e : l.bitArray.clamp(e, n - t);
  },
  extract: function(e, t, n) {
var r = Math.floor(-t - n & 31);
return ((t + n - 1 ^ t) & -32 ? e[t / 32 | 0] << 32 - r ^ e[t / 32 + 1 | 0] >>> r : e[t / 32 | 0] >>> r) & (1 << n) - 1;
  },
  concat: function(e, t) {
if (0 === e.length || 0 === t.length)
  return e.concat(t);
var n = e[e.length - 1],
  r = l.bitArray.getPartial(n);
return 32 === r ? e.concat(t) : l.bitArray.$(t, r, 0 | n, e.slice(0, e.length - 1));
  },
  bitLength: function(e) {
var t = e.length;
return 0 === t ? 0 : 32 * (t - 1) + l.bitArray.getPartial(e[t - 1]);
  },
  clamp: function(e, t) {
if (32 * e.length < t)
  return e;
var n = (e = e.slice(0, Math.ceil(t / 32))).length;
return t &= 31, 0 < n && t && (e[n - 1] = l.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e;
  },
  partial: function(e, t, n) {
return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e;
  },
  getPartial: function(e) {
return Math.round(e / 1099511627776) || 32;
  },
  equal: function(e, t) {
if (l.bitArray.bitLength(e) !== l.bitArray.bitLength(t))
  return !1;
var n, r = 0;
for (n = 0; n < e.length; n++)
  r |= e[n] ^ t[n];
return 0 === r;
  },
  $: function(e, t, n, r) {
var i;
for (i = 0, void 0 === r && (r = []); 32 <= t; t -= 32)
  r.push(n), n = 0;
if (0 === t)
  return r.concat(e);
for (i = 0; i < e.length; i++)
  r.push(n | e[i] >>> t), n = e[i] << 32 - t;
return i = e.length ? e[e.length - 1] : 0, e = l.bitArray.getPartial(i), r.push(l.bitArray.partial(t + e & 31, 32 < t + e ? n : r.pop(), 1)), r;
  },
  i: function(e, t) {
return [
  e[0] ^ t[0],
  e[1] ^ t[1],
  e[2] ^ t[2],
  e[3] ^ t[3]
];
  },
  byteswapM: function(e) {
var t, n;
for (t = 0; t < e.length; ++t)
  n = e[t], e[t] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
return e;
  }
}, l.codec.utf8String = {
  fromBits: function(e) {
var t, n, r = '',
  i = l.bitArray.bitLength(e);
for (t = 0; t < i / 8; t++)
  0 == (3 & t) && (n = e[t / 4]), r += String.fromCharCode(n >>> 8 >>> 8 >>> 8), n <<= 8;
return decodeURIComponent(escape(r));
  },
  toBits: function(e) {
e = unescape(encodeURIComponent(e));
var t, n = [],
  r = 0;
for (t = 0; t < e.length; t++)
  r = r << 8 | e.charCodeAt(t), 3 == (3 & t) && (n.push(r), r = 0);
return 3 & t && n.push(l.bitArray.partial(8 * (3 & t), r)), n;
  }
}, l.codec.hex = {
  fromBits: function(e) {
var t, n = '';
for (t = 0; t < e.length; t++)
  n += ((0 | e[t]) + 263882790666240).toString(16).substr(4);
return n.substr(0, l.bitArray.bitLength(e) / 4);
  },
  toBits: function(e) {
var t, n, r = [];
for (n = (e = e.replace(/\s|0x/g, '')).length, e += '00000000', t = 0; t < e.length; t += 8)
  r.push(0 ^ parseInt(e.substr(t, 8), 16));
return l.bitArray.clamp(r, 4 * n);
  }
}, l.codec.base32 = {
  B: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  X: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  BITS: 32,
  BASE: 5,
  REMAINING: 27,
  fromBits: function(e, t, n) {
var r = l.codec.base32.BASE,
  i = l.codec.base32.REMAINING,
  a = '',
  s = 0,
  o = l.codec.base32.B,
  u = 0,
  c = l.bitArray.bitLength(e);
for (n && (o = l.codec.base32.X), n = 0; a.length * r < c;)
  a += o.charAt((u ^ e[n] >>> s) >>> i), s < r ? (u = e[n] << r - s, s += i, n++) : (u <<= r, s -= r);
for (; 7 & a.length && !t;)
  a += '=';
return a;
  },
  toBits: function(e, t) {
e = e.replace(/\s|=/g, '').toUpperCase();
var n, r, i = l.codec.base32.BITS,
  a = l.codec.base32.BASE,
  s = l.codec.base32.REMAINING,
  o = [],
  u = 0,
  c = l.codec.base32.B,
  d = 0,
  _ = 'base32';
for (t && (c = l.codec.base32.X, _ = 'base32hex'), n = 0; n < e.length; n++) {
  if (0 > (r = c.indexOf(e.charAt(n)))) {
    if (!t)
      try {
        return l.codec.base32hex.toBits(e);
      } catch (e) {}
    throw new l.exception.invalid('this isn\'t ' + _ + '!');
  }
  u > s ? (u -= s, o.push(d ^ r >>> u), d = r << i - u) : (u += a, d ^= r << i - u);
}
return 56 & u && o.push(l.bitArray.partial(56 & u, d, 1)), o;
  }
}, l.codec.base32hex = {
  fromBits: function(e, t) {
return l.codec.base32.fromBits(e, t, 1);
  },
  toBits: function(e) {
return l.codec.base32.toBits(e, 1);
  }
}, l.codec.base64 = {
  B: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  fromBits: function(e, t, n) {
var r = '',
  i = 0,
  a = l.codec.base64.B,
  s = 0,
  o = l.bitArray.bitLength(e);
for (n && (a = a.substr(0, 62) + '-_'), n = 0; 6 * r.length < o;)
  r += a.charAt((s ^ e[n] >>> i) >>> 26), 6 > i ? (s = e[n] << 6 - i, i += 26, n++) : (s <<= 6, i -= 6);
for (; 3 & r.length && !t;)
  r += '=';
return r;
  },
  toBits: function(e, t) {
e = e.replace(/\s|=/g, '');
var n, r, i = [],
  a = 0,
  s = l.codec.base64.B,
  o = 0;
for (t && (s = s.substr(0, 62) + '-_'), n = 0; n < e.length; n++) {
  if (0 > (r = s.indexOf(e.charAt(n))))
    throw new l.exception.invalid('this isn\'t base64!');
  26 < a ? (a -= 26, i.push(o ^ r >>> a), o = r << 32 - a) : (a += 6, o ^= r << 32 - a);
}
return 56 & a && i.push(l.bitArray.partial(56 & a, o, 1)), i;
  }
}, l.codec.base64url = {
  fromBits: function(e) {
return l.codec.base64.fromBits(e, 1, 1);
  },
  toBits: function(e) {
return l.codec.base64.toBits(e, 1);
  }
}, l.hash.sha256 = function(e) {
  this.b[0] || this.O(), e ? (this.F = e.F.slice(0), this.A = e.A.slice(0), this.l = e.l) : this.reset();
}, l.hash.sha256.hash = function(e) {
  return new l.hash.sha256().update(e).finalize();
}, l.hash.sha256.prototype = {
  blockSize: 512,
  reset: function() {
return this.F = this.Y.slice(0), this.A = [], this.l = 0, this;
  },
  update: function(e) {
'string' == typeof e && (e = l.codec.utf8String.toBits(e));
var t, n = this.A = l.bitArray.concat(this.A, e);
if (t = this.l, 9007199254740991 < (e = this.l = t + l.bitArray.bitLength(e)))
  throw new l.exception.invalid('Cannot hash more than 2^53 - 1 bits');
if ('undefined' != typeof Uint32Array) {
  var r = new Uint32Array(n),
    i = 0;
  for (t = 512 + t - (512 + t & 511); t <= e; t += 512)
    c(this, r.subarray(16 * i, 16 * (i + 1))), i += 1;
  n.splice(0, 16 * i);
} else
  for (t = 512 + t - (512 + t & 511); t <= e; t += 512)
    c(this, n.splice(0, 16));
return this;
  },
  finalize: function() {
var e, t = this.A,
  n = this.F,
  t = l.bitArray.concat(t, [l.bitArray.partial(1, 1)]);
for (e = t.length + 2; 15 & e; e++)
  t.push(0);
for (t.push(Math.floor(this.l / 4294967296)), t.push(0 | this.l); t.length;)
  c(this, t.splice(0, 16));
return this.reset(), n;
  },
  Y: [],
  b: [],
  O: function() {
function e(e) {
  return 4294967296 * (e - Math.floor(e)) | 0;
}
for (var t, n, r = 0, i = 2; 64 > r; i++) {
  for (t = 2, n = !0; t * t <= i; t++)
    if (0 == i % t) {
      n = !1;
      break;
    }
  n && (8 > r && (this.Y[r] = e(Math.pow(i, 0.5))), this.b[r] = e(Math.pow(i, 1 / 3)), r++);
}
  }
}, l.mode.ccm = {
  name: 'ccm',
  G: [],
  listenProgress: function(e) {
l.mode.ccm.G.push(e);
  },
  unListenProgress: function(e) {
-1 < (e = l.mode.ccm.G.indexOf(e)) && l.mode.ccm.G.splice(e, 1);
  },
  fa: function(e) {
var t, n = l.mode.ccm.G.slice();
for (t = 0; t < n.length; t += 1)
  n[t](e);
  },
  encrypt: function(e, t, n, r, i) {
var a, s = t.slice(0),
  o = l.bitArray,
  u = o.bitLength(n) / 8,
  c = o.bitLength(s) / 8;
if (i = i || 64, r = r || [], 7 > u)
  throw new l.exception.invalid('ccm: iv must be at least 7 bytes');
for (a = 2; 4 > a && c >>> 8 * a; a++);
return a < 15 - u && (a = 15 - u), n = o.clamp(n, 8 * (15 - a)), t = l.mode.ccm.V(e, t, n, r, i, a), s = l.mode.ccm.C(e, s, n, t, i, a), o.concat(s.data, s.tag);
  },
  decrypt: function(e, t, n, r, i) {
i = i || 64, r = r || [];
var a = l.bitArray,
  s = a.bitLength(n) / 8,
  o = a.bitLength(t),
  u = a.clamp(t, o - i),
  c = a.bitSlice(t, o - i),
  o = (o - i) / 8;
if (7 > s)
  throw new l.exception.invalid('ccm: iv must be at least 7 bytes');
for (t = 2; 4 > t && o >>> 8 * t; t++);
if (t < 15 - s && (t = 15 - s), n = a.clamp(n, 8 * (15 - t)), u = l.mode.ccm.C(e, u, n, c, i, t), e = l.mode.ccm.V(e, u.data, n, r, i, t), !a.equal(u.tag, e))
  throw new l.exception.corrupt('ccm: tag doesn\'t match');
return u.data;
  },
  na: function(e, t, n, r, i, a) {
var s = [],
  o = l.bitArray,
  u = o.i;
if (r = [o.partial(8, (t.length ? 64 : 0) | r - 2 << 2 | a - 1)], r = o.concat(r, n), r[3] |= i, r = e.encrypt(r), t.length)
  for (65279 >= (n = o.bitLength(t) / 8) ? s = [o.partial(16, n)] : 4294967295 >= n && (s = o.concat([o.partial(16, 65534)], [n])), s = o.concat(s, t), t = 0; t < s.length; t += 4)
    r = e.encrypt(u(r, s.slice(t, t + 4).concat([
      0,
      0,
      0
    ])));
return r;
  },
  V: function(e, t, n, r, i, a) {
var s = l.bitArray,
  o = s.i;
if ((i /= 8) % 2 || 4 > i || 16 < i)
  throw new l.exception.invalid('ccm: invalid tag length');
if (4294967295 < r.length || 4294967295 < t.length)
  throw new l.exception.bug('ccm: can\'t deal with 4GiB or more data');
for (n = l.mode.ccm.na(e, r, n, i, s.bitLength(t) / 8, a), r = 0; r < t.length; r += 4)
  n = e.encrypt(o(n, t.slice(r, r + 4).concat([
    0,
    0,
    0
  ])));
return s.clamp(n, 8 * i);
  },
  C: function(e, t, n, r, i, a) {
var s, o = l.bitArray;
s = o.i;
var u = t.length,
  c = o.bitLength(t),
  d = u / 50,
  _ = d;
if (n = o.concat([o.partial(8, a - 1)], n).concat([
    0,
    0,
    0
  ]).slice(0, 4), r = o.bitSlice(s(r, e.encrypt(n)), 0, i), !u)
  return {
    tag: r,
    data: []
  };
for (s = 0; s < u; s += 4)
  s > d && (l.mode.ccm.fa(s / u), d += _), n[3]++, i = e.encrypt(n), t[s] ^= i[0], t[s + 1] ^= i[1], t[s + 2] ^= i[2], t[s + 3] ^= i[3];
return {
  tag: r,
  data: o.clamp(t, c)
};
  }
}, l.mode.ocb2 = {
  name: 'ocb2',
  encrypt: function(e, t, n, r, i, a) {
if (128 !== l.bitArray.bitLength(n))
  throw new l.exception.invalid('ocb iv must be 128 bits');
var s, o = l.mode.ocb2.S,
  u = l.bitArray,
  c = u.i,
  d = [
    0,
    0,
    0,
    0
  ];
n = o(e.encrypt(n));
var _, E = [];
for (s = 0, r = r || [], i = i || 64; s + 4 < t.length; s += 4)
  d = c(d, _ = t.slice(s, s + 4)), E = E.concat(c(n, e.encrypt(c(n, _)))), n = o(n);
return _ = t.slice(s), t = u.bitLength(_), s = e.encrypt(c(n, [
  0,
  0,
  0,
  t
])), _ = u.clamp(c(_.concat([
  0,
  0,
  0
]), s), t), d = c(d, c(_.concat([
  0,
  0,
  0
]), s)), d = e.encrypt(c(d, c(n, o(n)))), r.length && (d = c(d, a ? r : l.mode.ocb2.pmac(e, r))), E.concat(u.concat(_, u.clamp(d, i)));
  },
  decrypt: function(e, t, n, r, i, a) {
if (128 !== l.bitArray.bitLength(n))
  throw new l.exception.invalid('ocb iv must be 128 bits');
i = i || 64;
var s, o, u = l.mode.ocb2.S,
  c = l.bitArray,
  d = c.i,
  _ = [
    0,
    0,
    0,
    0
  ],
  E = u(e.encrypt(n)),
  f = l.bitArray.bitLength(t) - i,
  h = [];
for (n = 0, r = r || []; n + 4 < f / 32; n += 4)
  s = d(E, e.decrypt(d(E, t.slice(n, n + 4)))), _ = d(_, s), h = h.concat(s), E = u(E);
if (o = f - 32 * n, s = e.encrypt(d(E, [
    0,
    0,
    0,
    o
  ])), s = d(s, c.clamp(t.slice(n), o).concat([
    0,
    0,
    0
  ])), _ = d(_, s), _ = e.encrypt(d(_, d(E, u(E)))), r.length && (_ = d(_, a ? r : l.mode.ocb2.pmac(e, r))), !c.equal(c.clamp(_, i), c.bitSlice(t, f)))
  throw new l.exception.corrupt('ocb: tag doesn\'t match');
return h.concat(c.clamp(s, o));
  },
  pmac: function(e, t) {
var n, r = l.mode.ocb2.S,
  i = l.bitArray,
  a = i.i,
  s = [
    0,
    0,
    0,
    0
  ],
  o = e.encrypt([
    0,
    0,
    0,
    0
  ]),
  o = a(o, r(r(o)));
for (n = 0; n + 4 < t.length; n += 4)
  o = r(o), s = a(s, e.encrypt(a(o, t.slice(n, n + 4))));
return n = t.slice(n), 128 > i.bitLength(n) && (o = a(o, r(o)), n = i.concat(n, [
  -2147483648,
  0,
  0,
  0
])), s = a(s, n), e.encrypt(a(r(a(o, r(o))), s));
  },
  S: function(e) {
return [
  e[0] << 1 ^ e[1] >>> 31,
  e[1] << 1 ^ e[2] >>> 31,
  e[2] << 1 ^ e[3] >>> 31,
  e[3] << 1 ^ 135 * (e[0] >>> 31)
];
  }
}, l.mode.gcm = {
  name: 'gcm',
  encrypt: function(e, t, n, r, i) {
var a = t.slice(0);
return t = l.bitArray, r = r || [], e = l.mode.gcm.C(!0, e, a, r, n, i || 128), t.concat(e.data, e.tag);
  },
  decrypt: function(e, t, n, r, i) {
var a = t.slice(0),
  s = l.bitArray,
  o = s.bitLength(a);
if (r = r || [], (i = i || 128) <= o ? (t = s.bitSlice(a, o - i), a = s.bitSlice(a, 0, o - i)) : (t = a, a = []), e = l.mode.gcm.C(!1, e, a, r, n, i), !s.equal(e.tag, t))
  throw new l.exception.corrupt('gcm: tag doesn\'t match');
return e.data;
  },
  ka: function(e, t) {
var n, r, i, a, s, o = l.bitArray.i;
for (n = 0, i = [
    0,
    0,
    0,
    0
  ], a = t.slice(0); 128 > n; n++) {
  for ((r = 0 != (e[Math.floor(n / 32)] & 1 << 31 - n % 32)) && (i = o(i, a)), s = 0 != (1 & a[3]), r = 3; 0 < r; r--)
    a[r] = a[r] >>> 1 | (1 & a[r - 1]) << 31;
  a[0] >>>= 1, s && (a[0] ^= -520093696);
}
return i;
  },
  j: function(e, t, n) {
var r, i = n.length;
for (r = 0, t = t.slice(0); r < i; r += 4)
  t[0] ^= 4294967295 & n[r], t[1] ^= 4294967295 & n[r + 1], t[2] ^= 4294967295 & n[r + 2], t[3] ^= 4294967295 & n[r + 3], t = l.mode.gcm.ka(t, e);
return t;
  },
  C: function(e, t, n, r, i, a) {
var s, o, u, c, d, _, E, f, h = l.bitArray;
for (_ = n.length, E = h.bitLength(n), f = h.bitLength(r), o = h.bitLength(i), s = t.encrypt([
    0,
    0,
    0,
    0
  ]), 96 === o ? (i = i.slice(0), i = h.concat(i, [1])) : (i = l.mode.gcm.j(s, [
    0,
    0,
    0,
    0
  ], i), i = l.mode.gcm.j(s, i, [
    0,
    0,
    Math.floor(o / 4294967296),
    4294967295 & o
  ])), o = l.mode.gcm.j(s, [
    0,
    0,
    0,
    0
  ], r), d = i.slice(0), r = o.slice(0), e || (r = l.mode.gcm.j(s, o, n)), c = 0; c < _; c += 4)
  d[3]++, u = t.encrypt(d), n[c] ^= u[0], n[c + 1] ^= u[1], n[c + 2] ^= u[2], n[c + 3] ^= u[3];
return n = h.clamp(n, E), e && (r = l.mode.gcm.j(s, o, n)), e = [
  Math.floor(f / 4294967296),
  4294967295 & f,
  Math.floor(E / 4294967296),
  4294967295 & E
], r = l.mode.gcm.j(s, r, e), u = t.encrypt(i), r[0] ^= u[0], r[1] ^= u[1], r[2] ^= u[2], r[3] ^= u[3], {
  tag: h.bitSlice(r, 0, a),
  data: n
};
  }
}, l.misc.hmac = function(e, t) {
  this.W = t = t || l.hash.sha256;
  var n, r = [
  [],
  []
],
i = t.prototype.blockSize / 32;
  for (this.w = [
  new t(),
  new t()
], e.length > i && (e = t.hash(e)), n = 0; n < i; n++)
r[0][n] = 909522486 ^ e[n], r[1][n] = 1549556828 ^ e[n];
  this.w[0].update(r[0]), this.w[1].update(r[1]), this.R = new t(this.w[0]);
}, l.misc.hmac.prototype.encrypt = l.misc.hmac.prototype.mac = function(e) {
  if (this.aa)
throw new l.exception.invalid('encrypt on already updated hmac called!');
  return this.update(e), this.digest(e);
}, l.misc.hmac.prototype.reset = function() {
  this.R = new this.W(this.w[0]), this.aa = !1;
}, l.misc.hmac.prototype.update = function(e) {
  this.aa = !0, this.R.update(e);
}, l.misc.hmac.prototype.digest = function() {
  var e = this.R.finalize(),
e = new this.W(this.w[1]).update(e).finalize();
  return this.reset(), e;
}, l.misc.pbkdf2 = function(e, t, n, r, i) {
  if (n = n || 10000, 0 > r || 0 > n)
throw new l.exception.invalid('invalid params to pbkdf2');
  'string' == typeof e && (e = l.codec.utf8String.toBits(e)), 'string' == typeof t && (t = l.codec.utf8String.toBits(t)), e = new(i = i || l.misc.hmac)(e);
  var a, s, o, u, c = [],
d = l.bitArray;
  for (u = 1; 32 * c.length < (r || 1); u++) {
for (s = 1, i = a = e.encrypt(d.concat(t, [u])); s < n; s++)
  for (a = e.encrypt(a), o = 0; o < a.length; o++)
    i[o] ^= a[o];
c = c.concat(i);
  }
  return r && (c = d.clamp(c, r)), c;
}, l.prng = function(e) {
  this.c = [new l.hash.sha256()], this.m = [0], this.P = 0, this.H = {}, this.N = 0, this.U = {}, this.Z = this.f = this.o = this.ha = 0, this.b = [
0,
0,
0,
0,
0,
0,
0,
0
  ], this.h = [
0,
0,
0,
0
  ], this.L = void 0, this.M = e, this.D = !1, this.K = {
progress: {},
seeded: {}
  }, this.u = this.ga = 0, this.I = 1, this.J = 2, this.ca = 65536, this.T = [
0,
48,
64,
96,
128,
192,
256,
384,
512,
768,
1024
  ], this.da = 30000, this.ba = 80;
}, l.prng.prototype = {
  randomWords: function(e, t) {
var n, r = [];
if ((n = this.isReady(t)) === this.u)
  throw new l.exception.notReady('generator isn\'t seeded');
if (n & this.J) {
  n = !(n & this.I), i = [];
  var i, a, s = 0;
  for (a = 0, this.Z = i[0] = new Date().valueOf() + this.da; 16 > a; a++)
    i.push(4294967296 * Math.random() | 0);
  for (a = 0; a < this.c.length && (i = i.concat(this.c[a].finalize()), s += this.m[a], this.m[a] = 0, n || !(this.P & 1 << a)); a++);
  for (this.P >= 1 << this.c.length && (this.c.push(new l.hash.sha256()), this.m.push(0)), this.f -= s, s > this.o && (this.o = s), this.P++, this.b = l.hash.sha256.hash(this.b.concat(i)), this.L = new l.cipher.aes(this.b), n = 0; 4 > n && (this.h[n] = this.h[n] + 1 | 0, !this.h[n]); n++);
}
for (n = 0; n < e; n += 4)
  0 == (n + 1) % this.ca && E(this), r.push((i = f(this))[0], i[1], i[2], i[3]);
return E(this), r.slice(0, e);
  },
  setDefaultParanoia: function(e, t) {
if (0 === e && 'Setting paranoia=0 will ruin your security; use it only for testing' !== t)
  throw new l.exception.invalid('Setting paranoia=0 will ruin your security; use it only for testing');
this.M = e;
  },
  addEntropy: function(e, t, n) {
n = n || 'user';
var r, i, a = new Date().valueOf(),
  s = this.H[n],
  o = this.isReady(),
  u = 0;
switch (void 0 === (r = this.U[n]) && (r = this.U[n] = this.ha++), void 0 === s && (s = this.H[n] = 0), this.H[n] = (this.H[n] + 1) % this.c.length, typeof e) {
  case 'number':
    void 0 === t && (t = 1), this.c[s].update([
      r,
      this.N++,
      1,
      t,
      a,
      1,
      0 | e
    ]);
    break;
  case 'object':
    if ('[object Uint32Array]' === (n = Object.prototype.toString.call(e))) {
      for (n = 0, i = []; n < e.length; n++)
        i.push(e[n]);
      e = i;
    } else
      for ('[object Array]' !== n && (u = 1), n = 0; n < e.length && !u; n++)
        'number' != typeof e[n] && (u = 1);
    if (!u) {
      if (void 0 === t)
        for (n = t = 0; n < e.length; n++)
          for (i = e[n]; 0 < i;)
            t++, i >>>= 1;
      this.c[s].update([
        r,
        this.N++,
        2,
        t,
        a,
        e.length
      ].concat(e));
    }
    break;
  case 'string':
    void 0 === t && (t = e.length), this.c[s].update([
      r,
      this.N++,
      3,
      t,
      a,
      e.length
    ]), this.c[s].update(e);
    break;
  default:
    u = 1;
}
if (u)
  throw new l.exception.bug('random: addEntropy only supports number, array of numbers or string');
this.m[s] += t, this.f += t, o === this.u && (this.isReady() !== this.u && d('seeded', Math.max(this.o, this.f)), d('progress', this.getProgress()));
  },
  isReady: function(e) {
return e = this.T[void 0 !== e ? e : this.M], this.o && this.o >= e ? this.m[0] > this.ba && new Date().valueOf() > this.Z ? this.J | this.I : this.I : this.f >= e ? this.J | this.u : this.u;
  },
  getProgress: function(e) {
return e = this.T[e || this.M], this.o >= e ? 1 : this.f > e ? 1 : this.f / e;
  },
  startCollectors: function() {
if (!this.D) {
  if (this.a = {
      loadTimeCollector: h(this, this.ma),
      mouseCollector: h(this, this.oa),
      keyboardCollector: h(this, this.la),
      accelerometerCollector: h(this, this.ea),
      touchCollector: h(this, this.qa)
    }, window.addEventListener)
    window.addEventListener('load', this.a.loadTimeCollector, !1), window.addEventListener('mousemove', this.a.mouseCollector, !1), window.addEventListener('keypress', this.a.keyboardCollector, !1), window.addEventListener('devicemotion', this.a.accelerometerCollector, !1), window.addEventListener('touchmove', this.a.touchCollector, !1);
  else if (document.attachEvent)
    document.attachEvent('onload', this.a.loadTimeCollector), document.attachEvent('onmousemove', this.a.mouseCollector), document.attachEvent('keypress', this.a.keyboardCollector);
  else
    throw new l.exception.bug('can\'t attach event');
  this.D = !0;
}
  },
  stopCollectors: function() {
this.D && (window.removeEventListener ? (window.removeEventListener('load', this.a.loadTimeCollector, !1), window.removeEventListener('mousemove', this.a.mouseCollector, !1), window.removeEventListener('keypress', this.a.keyboardCollector, !1), window.removeEventListener('devicemotion', this.a.accelerometerCollector, !1), window.removeEventListener('touchmove', this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent('onload', this.a.loadTimeCollector), document.detachEvent('onmousemove', this.a.mouseCollector), document.detachEvent('keypress', this.a.keyboardCollector)), this.D = !1);
  },
  addEventListener: function(e, t) {
this.K[e][this.ga++] = t;
  },
  removeEventListener: function(e, t) {
var n, r, i = this.K[e],
  a = [];
for (r in i)
  i.hasOwnProperty(r) && i[r] === t && a.push(r);
for (n = 0; n < a.length; n++)
  r = a[n], delete i[r];
  },
  la: function() {
_(this, 1);
  },
  oa: function(e) {
var t, n;
try {
  t = e.x || e.clientX || e.offsetX || 0, n = e.y || e.clientY || e.offsetY || 0;
} catch (e) {
  n = t = 0;
}
0 != t && 0 != n && this.addEntropy([
  t,
  n
], 2, 'mouse'), _(this, 0);
  },
  qa: function(e) {
e = e.touches[0] || e.changedTouches[0], this.addEntropy([
  e.pageX || e.clientX,
  e.pageY || e.clientY
], 1, 'touch'), _(this, 0);
  },
  ma: function() {
_(this, 2);
  },
  ea: function(e) {
if (e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z, window.orientation) {
  var t = window.orientation;
  'number' == typeof t && this.addEntropy(t, 1, 'accelerometer');
}
e && this.addEntropy(e, 2, 'accelerometer'), _(this, 0);
  }
}, l.random = new l.prng(6);
i:
  try {
if (s = e.exports) {
  try {
    o = n(444982);
  } catch (e) {
    o = null;
  }
  s = i = o;
}
if (s && i.randomBytes)
  r = i.randomBytes(128), r = new Uint32Array(new Uint8Array(r).buffer), l.random.addEntropy(r, 1024, 'crypto[\'randomBytes\']');
else if ('undefined' != typeof window && 'undefined' != typeof Uint32Array) {
  if (a = new Uint32Array(32), window.crypto && window.crypto.getRandomValues)
    window.crypto.getRandomValues(a);
  else if (window.msCrypto && window.msCrypto.getRandomValues)
    window.msCrypto.getRandomValues(a);
  else
    break i;
  l.random.addEntropy(a, 1024, 'crypto[\'getRandomValues\']');
}
  } catch (e) {
'undefined' != typeof window && window.console && (console.log('There was an error collecting entropy from the browser:'), console.log(e));
  }
l.json = {
  defaults: {
v: 1,
iter: 10000,
ks: 128,
ts: 64,
mode: 'ccm',
adata: '',
cipher: 'aes'
  },
  ja: function(e, t, n, r) {
n = n || {}, r = r || {};
var i, a = l.json,
  s = a.g({
    iv: l.random.randomWords(4, 0)
  }, a.defaults);
if (a.g(s, n), n = s.adata, 'string' == typeof s.salt && (s.salt = l.codec.base64.toBits(s.salt)), 'string' == typeof s.iv && (s.iv = l.codec.base64.toBits(s.iv)), !l.mode[s.mode] || !l.cipher[s.cipher] || 'string' == typeof e && 100 >= s.iter || 64 !== s.ts && 96 !== s.ts && 128 !== s.ts || 128 !== s.ks && 192 !== s.ks && 256 !== s.ks || 2 > s.iv.length || 4 < s.iv.length)
  throw new l.exception.invalid('json encrypt: invalid parameters');
return 'string' == typeof e ? (e = (i = l.misc.cachedPbkdf2(e, s)).key.slice(0, s.ks / 32), s.salt = i.salt) : l.ecc && e instanceof l.ecc.elGamal.publicKey && (i = e.kem(), s.kemtag = i.tag, e = i.key.slice(0, s.ks / 32)), 'string' == typeof t && (t = l.codec.utf8String.toBits(t)), 'string' == typeof n && (s.adata = n = l.codec.utf8String.toBits(n)), i = new l.cipher[s.cipher](e), a.g(r, s), r.key = e, s.ct = 'ccm' === s.mode && l.arrayBuffer && l.arrayBuffer.ccm && t instanceof ArrayBuffer ? l.arrayBuffer.ccm.encrypt(i, t, s.iv, n, s.ts) : l.mode[s.mode].encrypt(i, t, s.iv, n, s.ts), s;
  },
  encrypt: function(e, t, n, r) {
var i = l.json,
  a = i.ja.apply(i, arguments);
return i.encode(a);
  },
  ia: function(e, t, n, r) {
n = n || {}, r = r || {};
var i, a, s = l.json;
if (i = (t = s.g(s.g(s.g({}, s.defaults), t), n, !0)).adata, 'string' == typeof t.salt && (t.salt = l.codec.base64.toBits(t.salt)), 'string' == typeof t.iv && (t.iv = l.codec.base64.toBits(t.iv)), !l.mode[t.mode] || !l.cipher[t.cipher] || 'string' == typeof e && 100 >= t.iter || 64 !== t.ts && 96 !== t.ts && 128 !== t.ts || 128 !== t.ks && 192 !== t.ks && 256 !== t.ks || !t.iv || 2 > t.iv.length || 4 < t.iv.length)
  throw new l.exception.invalid('json decrypt: invalid parameters');
return 'string' == typeof e ? (e = (a = l.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32), t.salt = a.salt) : l.ecc && e instanceof l.ecc.elGamal.secretKey && (e = e.unkem(l.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)), 'string' == typeof i && (i = l.codec.utf8String.toBits(i)), a = new l.cipher[t.cipher](e), i = 'ccm' === t.mode && l.arrayBuffer && l.arrayBuffer.ccm && t.ct instanceof ArrayBuffer ? l.arrayBuffer.ccm.decrypt(a, t.ct, t.iv, t.tag, i, t.ts) : l.mode[t.mode].decrypt(a, t.ct, t.iv, i, t.ts), s.g(r, t), r.key = e, 1 === n.raw ? i : l.codec.utf8String.fromBits(i);
  },
  decrypt: function(e, t, n, r) {
var i = l.json;
return i.ia(e, i.decode(t), n, r);
  },
  encode: function(e) {
var t, n = '{',
  r = '';
for (t in e)
  if (e.hasOwnProperty(t)) {
    if (!t.match(/^[a-z0-9]+$/i))
      throw new l.exception.invalid('json encode: invalid property name');
    switch (n += r + '"' + t + '":', r = ',', typeof e[t]) {
      case 'number':
      case 'boolean':
        n += e[t];
        break;
      case 'string':
        n += '"' + escape(e[t]) + '"';
        break;
      case 'object':
        n += '"' + l.codec.base64.fromBits(e[t], 0) + '"';
        break;
      default:
        throw new l.exception.bug('json encode: unsupported type');
    }
  }
return n + '}';
  },
  decode: function(e) {
if (!(e = e.replace(/\s/g, '')).match(/^\{.*\}$/))
  throw new l.exception.invalid('json decode: this isn\'t json!');
e = e.replace(/^\{|\}$/g, '').split(/,/);
var t, n, r = {};
for (t = 0; t < e.length; t++) {
  if (!(n = e[t].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)))
    throw new l.exception.invalid('json decode: this isn\'t json!');
  null != n[3] ? r[n[2]] = parseInt(n[3], 10) : null != n[4] ? r[n[2]] = n[2].match(/^(ct|adata|salt|iv)$/) ? l.codec.base64.toBits(n[4]) : unescape(n[4]) : null != n[5] && (r[n[2]] = 'true' === n[5]);
}
return r;
  },
  g: function(e, t, n) {
if (void 0 === e && (e = {}), void 0 === t)
  return e;
for (var r in t)
  if (t.hasOwnProperty(r)) {
    if (n && void 0 !== e[r] && e[r] !== t[r])
      throw new l.exception.invalid('required parameter overridden');
    e[r] = t[r];
  }
return e;
  },
  sa: function(e, t) {
var n, r = {};
for (n in e)
  e.hasOwnProperty(n) && e[n] !== t[n] && (r[n] = e[n]);
return r;
  },
  ra: function(e, t) {
var n, r = {};
for (n = 0; n < t.length; n++)
  void 0 !== e[t[n]] && (r[t[n]] = e[t[n]]);
return r;
  }
}, l.encrypt = l.json.encrypt, l.decrypt = l.json.decrypt, l.misc.pa = {}, l.misc.cachedPbkdf2 = function(e, t) {
  var n, r = l.misc.pa;
  return n = (t = t || {}).iter || 1000, n = (r = r[e] = r[e] || {})[n] = r[n] || {
firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : l.random.randomWords(2, 0)
  }, r = void 0 === t.salt ? n.firstSalt : t.salt, n[r] = n[r] || l.misc.pbkdf2(e, r, t.iter), {
key: n[r].slice(0),
salt: r.slice(0)
  };
}, e.exports && (e.exports = l), 'function' == typeof define && define([], function() {
  return l;
});