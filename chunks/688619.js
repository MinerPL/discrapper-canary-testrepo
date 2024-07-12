var e, r;
e = 0, r = function() {
  for (var t = function(t, e, r) {
  return void 0 === e && (e = 0), void 0 === r && (r = 1), t < e ? e : t > r ? r : t;
}, e = {}, r = 0, n = [
  'Boolean',
  'Number',
  'String',
  'Function',
  'Array',
  'Date',
  'RegExp',
  'Undefined',
  'Null'
]; r < n.length; r += 1) {
var _ = n[r];
e['[object ' + _ + ']'] = _.toLowerCase();
  }
  var a = function(t) {
  return e[Object.prototype.toString.call(t)] || 'object';
},
i = Math.PI,
o = {
  clip_rgb: function(e) {
    e._clipped = !1, e._unclipped = e.slice(0);
    for (var r = 0; r <= 3; r++)
      r < 3 ? ((e[r] < 0 || e[r] > 255) && (e._clipped = !0), e[r] = t(e[r], 0, 255)) : 3 === r && (e[r] = t(e[r], 0, 1));
    return e;
  },
  limit: t,
  type: a,
  unpack: function(t, e) {
    return (void 0 === e && (e = null), t.length >= 3) ? Array.prototype.slice.call(t) : 'object' == a(t[0]) && e ? e.split('').filter(function(e) {
      return void 0 !== t[0][e];
    }).map(function(e) {
      return t[0][e];
    }) : t[0];
  },
  last: function(t) {
    if (t.length < 2)
      return null;
    var e = t.length - 1;
    return 'string' == a(t[e]) ? t[e].toLowerCase() : null;
  },
  TWOPI: 2 * i,
  PITHIRD: i / 3,
  DEG2RAD: i / 180,
  RAD2DEG: 180 / i
},
E = {
  format: {},
  autodetect: []
},
s = o.last,
c = o.clip_rgb,
I = o.type,
R = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('object' === I(t[0]) && t[0].constructor && t[0].constructor === this.constructor)
    return t[0];
  var r = s(t),
    n = !1;
  if (!r) {
    n = !0, !E.sorted && (E.autodetect = E.autodetect.sort(function(t, e) {
      return e.p - t.p;
    }), E.sorted = !0);
    for (var _ = 0, a = E.autodetect; _ < a.length; _ += 1) {
      var i = a[_];
      if (r = i.test.apply(i, t))
        break;
    }
  }
  if (E.format[r]) {
    var o = E.format[r].apply(null, n ? t : t.slice(0, -1));
    this._rgb = c(o);
  } else
    throw Error('unknown format: ' + t);
  3 === this._rgb.length && this._rgb.push(1);
};
  R.prototype.toString = function() {
return 'function' == I(this.hex) ? this.hex() : '[' + this._rgb.join(',') + ']';
  };
  var T = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(T.Color, [null].concat(t)))();
  };
  T.Color = R, T.version = '2.4.2';
  var u = o.unpack,
l = Math.max,
A = o.unpack,
N = o.unpack,
d = o.type,
O = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = u(t, 'rgb'),
    n = r[0],
    _ = r[1],
    a = r[2],
    i = 1 - l(n /= 255, l(_ /= 255, a /= 255)),
    o = i < 1 ? 1 / (1 - i) : 0;
  return [
    (1 - n - i) * o,
    (1 - _ - i) * o,
    (1 - a - i) * o,
    i
  ];
};
  R.prototype.cmyk = function() {
return O(this._rgb);
  }, T.cmyk = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['cmyk'])))();
  }, E.format.cmyk = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
var r = (t = A(t, 'cmyk'))[0],
  n = t[1],
  _ = t[2],
  a = t[3],
  i = t.length > 4 ? t[4] : 1;
return 1 === a ? [
  0,
  0,
  0,
  i
] : [
  r >= 1 ? 0 : 255 * (1 - r) * (1 - a),
  n >= 1 ? 0 : 255 * (1 - n) * (1 - a),
  _ >= 1 ? 0 : 255 * (1 - _) * (1 - a),
  i
];
  }, E.autodetect.push({
p: 2,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === d(t = N(t, 'cmyk')) && 4 === t.length)
    return 'cmyk';
}
  });
  var S = o.unpack,
p = o.last,
D = function(t) {
  return Math.round(100 * t) / 100;
},
f = o.unpack,
L = function() {
  for (var t, e, r = [], n = arguments.length; n--;)
    r[n] = arguments[n];
  var _ = (r = f(r, 'rgba'))[0],
    a = r[1],
    i = r[2],
    o = Math.min(_ /= 255, a /= 255, i /= 255),
    E = Math.max(_, a, i),
    s = (E + o) / 2;
  return (E === o ? (t = 0, e = Number.NaN) : t = s < 0.5 ? (E - o) / (E + o) : (E - o) / (2 - E - o), _ == E ? e = (a - i) / (E - o) : a == E ? e = 2 + (i - _) / (E - o) : i == E && (e = 4 + (_ - a) / (E - o)), (e *= 60) < 0 && (e += 360), r.length > 3 && void 0 !== r[3]) ? [
    e,
    t,
    s,
    r[3]
  ] : [
    e,
    t,
    s
  ];
},
h = o.unpack,
C = o.last,
g = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = S(t, 'hsla'),
    n = p(t) || 'lsa';
  return r[0] = D(r[0] || 0), r[1] = D(100 * r[1]) + '%', r[2] = D(100 * r[2]) + '%', 'hsla' === n || r.length > 3 && r[3] < 1 ? (r[3] = r.length > 3 ? r[3] : 1, n = 'hsla') : r.length = 3, n + '(' + r.join(',') + ')';
},
P = Math.round,
M = o.unpack,
U = Math.round,
G = function() {
  for (var t, e, r, n, _ = [], a = arguments.length; a--;)
    _[a] = arguments[a];
  var i = (_ = M(_, 'hsl'))[0],
    o = _[1],
    E = _[2];
  if (0 === o)
    e = r = n = 255 * E;
  else {
    var s = [
        0,
        0,
        0
      ],
      c = [
        0,
        0,
        0
      ],
      I = E < 0.5 ? E * (1 + o) : E + o - E * o,
      R = 2 * E - I,
      T = i / 360;
    s[0] = T + 1 / 3, s[1] = T, s[2] = T - 1 / 3;
    for (var u = 0; u < 3; u++)
      s[u] < 0 && (s[u] += 1), s[u] > 1 && (s[u] -= 1), 6 * s[u] < 1 ? c[u] = R + (I - R) * 6 * s[u] : 2 * s[u] < 1 ? c[u] = I : 3 * s[u] < 2 ? c[u] = R + (I - R) * (2 / 3 - s[u]) * 6 : c[u] = R;
    e = (t = [
      U(255 * c[0]),
      U(255 * c[1]),
      U(255 * c[2])
    ])[0], r = t[1], n = t[2];
  }
  return _.length > 3 ? [
    e,
    r,
    n,
    _[3]
  ] : [
    e,
    r,
    n,
    1
  ];
},
m = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
y = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
b = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
v = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
B = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
w = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
H = Math.round,
Y = function(t) {
  if (t = t.toLowerCase().trim(), E.format.named)
    try {
      return E.format.named(t);
    } catch (t) {}
  if (e = t.match(m)) {
    for (var e, r = e.slice(1, 4), n = 0; n < 3; n++)
      r[n] = +r[n];
    return r[3] = 1, r;
  }
  if (e = t.match(y)) {
    for (var _ = e.slice(1, 5), a = 0; a < 4; a++)
      _[a] = +_[a];
    return _;
  }
  if (e = t.match(b)) {
    for (var i = e.slice(1, 4), o = 0; o < 3; o++)
      i[o] = H(2.55 * i[o]);
    return i[3] = 1, i;
  }
  if (e = t.match(v)) {
    for (var s = e.slice(1, 5), c = 0; c < 3; c++)
      s[c] = H(2.55 * s[c]);
    return s[3] = +s[3], s;
  }
  if (e = t.match(B)) {
    var I = e.slice(1, 4);
    I[1] *= 0.01, I[2] *= 0.01;
    var R = G(I);
    return R[3] = 1, R;
  }
  if (e = t.match(w)) {
    var T = e.slice(1, 4);
    T[1] *= 0.01, T[2] *= 0.01;
    var u = G(T);
    return u[3] = +e[4], u;
  }
};
  Y.test = function(t) {
return m.test(t) || y.test(t) || b.test(t) || v.test(t) || B.test(t) || w.test(t);
  };
  var K = o.type,
k = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = h(t, 'rgba'),
    n = C(t) || 'rgb';
  return 'hsl' == n.substr(0, 3) ? g(L(r), n) : (r[0] = P(r[0]), r[1] = P(r[1]), r[2] = P(r[2]), ('rgba' === n || r.length > 3 && r[3] < 1) && (r[3] = r.length > 3 ? r[3] : 1, n = 'rgba'), n + '(' + r.slice(0, 'rgb' === n ? 3 : 4).join(',') + ')');
};
  R.prototype.css = function(t) {
return k(this._rgb, t);
  }, T.css = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['css'])))();
  }, E.format.css = Y, E.autodetect.push({
p: 5,
test: function(t) {
  for (var e = [], r = arguments.length - 1; r-- > 0;)
    e[r] = arguments[r + 1];
  if (!e.length && 'string' === K(t) && Y.test(t))
    return 'css';
}
  });
  var V = o.unpack;
  E.format.gl = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
var r = V(t, 'rgba');
return r[0] *= 255, r[1] *= 255, r[2] *= 255, r;
  }, T.gl = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['gl'])))();
  }, R.prototype.gl = function() {
var t = this._rgb;
return [
  t[0] / 255,
  t[1] / 255,
  t[2] / 255,
  t[3]
];
  };
  var x = o.unpack,
F = o.unpack,
W = Math.floor,
X = o.unpack,
j = o.type,
z = function() {
  for (var t, e = [], r = arguments.length; r--;)
    e[r] = arguments[r];
  var n = x(e, 'rgb'),
    _ = n[0],
    a = n[1],
    i = n[2],
    o = Math.min(_, a, i),
    E = Math.max(_, a, i),
    s = E - o;
  return 0 === s ? t = Number.NaN : (_ === E && (t = (a - i) / s), a === E && (t = 2 + (i - _) / s), i === E && (t = 4 + (_ - a) / s), (t *= 60) < 0 && (t += 360)), [
    t,
    100 * s / 255,
    o / (255 - s) * 100
  ];
};
  R.prototype.hcg = function() {
return z(this._rgb);
  }, T.hcg = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['hcg'])))();
  }, E.format.hcg = function() {
for (var t, e, r, n, _, a, i, o, E, s = [], c = arguments.length; c--;)
  s[c] = arguments[c];
var I = (s = F(s, 'hcg'))[0],
  R = s[1],
  T = s[2];
T *= 255;
var u = 255 * R;
if (0 === R)
  i = o = E = T;
else {
  360 === I && (I = 0), I > 360 && (I -= 360), I < 0 && (I += 360);
  var l = W(I /= 60),
    A = I - l,
    N = T * (1 - R),
    d = N + u * (1 - A),
    O = N + u * A,
    S = N + u;
  switch (l) {
    case 0:
      i = (t = [
        S,
        O,
        N
      ])[0], o = t[1], E = t[2];
      break;
    case 1:
      i = (e = [
        d,
        S,
        N
      ])[0], o = e[1], E = e[2];
      break;
    case 2:
      i = (r = [
        N,
        S,
        O
      ])[0], o = r[1], E = r[2];
      break;
    case 3:
      i = (n = [
        N,
        d,
        S
      ])[0], o = n[1], E = n[2];
      break;
    case 4:
      i = (_ = [
        O,
        N,
        S
      ])[0], o = _[1], E = _[2];
      break;
    case 5:
      i = (a = [
        S,
        N,
        d
      ])[0], o = a[1], E = a[2];
  }
}
return [
  i,
  o,
  E,
  s.length > 3 ? s[3] : 1
];
  }, E.autodetect.push({
p: 1,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === j(t = X(t, 'hcg')) && 3 === t.length)
    return 'hcg';
}
  });
  var $ = o.unpack,
q = o.last,
Z = Math.round,
J = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = $(t, 'rgba'),
    n = r[0],
    _ = r[1],
    a = r[2],
    i = r[3],
    o = q(t) || 'auto';
  void 0 === i && (i = 1), 'auto' === o && (o = i < 1 ? 'rgba' : 'rgb'), n = Z(n), _ = Z(_);
  var E = '000000' + (n << 16 | _ << 8 | (a = Z(a))).toString(16);
  E = E.substr(E.length - 6);
  var s = '0' + Z(255 * i).toString(16);
  switch (s = s.substr(s.length - 2), o.toLowerCase()) {
    case 'rgba':
      return '#' + E + s;
    case 'argb':
      return '#' + s + E;
    default:
      return '#' + E;
  }
},
Q = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
te = function(t) {
  if (t.match(Q)) {
    (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(''))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
    var e = parseInt(t, 16);
    return [
      e >> 16,
      e >> 8 & 255,
      255 & e,
      1
    ];
  }
  if (t.match(tt)) {
    (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(''))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    var r = parseInt(t, 16),
      n = Math.round((255 & r) / 255 * 100) / 100;
    return [
      r >> 24 & 255,
      r >> 16 & 255,
      r >> 8 & 255,
      n
    ];
  }
  throw Error('unknown hex color: ' + t);
},
tr = o.type;
  R.prototype.hex = function(t) {
return J(this._rgb, t);
  }, T.hex = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['hex'])))();
  }, E.format.hex = te, E.autodetect.push({
p: 4,
test: function(t) {
  for (var e = [], r = arguments.length - 1; r-- > 0;)
    e[r] = arguments[r + 1];
  if (!e.length && 'string' === tr(t) && [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ].indexOf(t.length) >= 0)
    return 'hex';
}
  });
  var tn = o.unpack,
t_ = o.TWOPI,
ta = Math.min,
ti = Math.sqrt,
to = Math.acos,
tE = o.unpack,
ts = o.limit,
tc = o.TWOPI,
tI = o.PITHIRD,
tR = Math.cos,
tT = o.unpack,
tu = o.type,
tl = function() {
  for (var t, e = [], r = arguments.length; r--;)
    e[r] = arguments[r];
  var n = tn(e, 'rgb'),
    _ = n[0],
    a = n[1],
    i = n[2],
    o = ta(_ /= 255, a /= 255, i /= 255),
    E = (_ + a + i) / 3,
    s = E > 0 ? 1 - o / E : 0;
  return 0 === s ? t = NaN : (t = to(t = (_ - a + (_ - i)) / 2 / ti((_ - a) * (_ - a) + (_ - i) * (a - i))), i > a && (t = t_ - t), t /= t_), [
    360 * t,
    s,
    E
  ];
};
  R.prototype.hsi = function() {
return tl(this._rgb);
  }, T.hsi = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['hsi'])))();
  }, E.format.hsi = function() {
for (var t, e, r, n = [], _ = arguments.length; _--;)
  n[_] = arguments[_];
var a = (n = tE(n, 'hsi'))[0],
  i = n[1],
  o = n[2];
return isNaN(a) && (a = 0), isNaN(i) && (i = 0), a > 360 && (a -= 360), a < 0 && (a += 360), (a /= 360) < 1 / 3 ? e = 1 - ((r = (1 - i) / 3) + (t = (1 + i * tR(tc * a) / tR(tI - tc * a)) / 3)) : a < 2 / 3 ? (a -= 1 / 3, r = 1 - ((t = (1 - i) / 3) + (e = (1 + i * tR(tc * a) / tR(tI - tc * a)) / 3))) : (a -= 2 / 3, t = 1 - ((e = (1 - i) / 3) + (r = (1 + i * tR(tc * a) / tR(tI - tc * a)) / 3))), t = ts(o * t * 3), e = ts(o * e * 3), [
  255 * t,
  255 * e,
  255 * (r = ts(o * r * 3)),
  n.length > 3 ? n[3] : 1
];
  }, E.autodetect.push({
p: 2,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === tu(t = tT(t, 'hsi')) && 3 === t.length)
    return 'hsi';
}
  });
  var tA = o.unpack,
tN = o.type;
  R.prototype.hsl = function() {
return L(this._rgb);
  }, T.hsl = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['hsl'])))();
  }, E.format.hsl = G, E.autodetect.push({
p: 2,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === tN(t = tA(t, 'hsl')) && 3 === t.length)
    return 'hsl';
}
  });
  var td = o.unpack,
tO = Math.min,
tS = Math.max,
tp = o.unpack,
tD = Math.floor,
tf = o.unpack,
tL = o.type,
th = function() {
  for (var t, e, r, n = [], _ = arguments.length; _--;)
    n[_] = arguments[_];
  var a = (n = td(n, 'rgb'))[0],
    i = n[1],
    o = n[2],
    E = tO(a, i, o),
    s = tS(a, i, o),
    c = s - E;
  return r = s / 255, 0 === s ? (t = Number.NaN, e = 0) : (e = c / s, a === s && (t = (i - o) / c), i === s && (t = 2 + (o - a) / c), o === s && (t = 4 + (a - i) / c), (t *= 60) < 0 && (t += 360)), [
    t,
    e,
    r
  ];
};
  R.prototype.hsv = function() {
return th(this._rgb);
  }, T.hsv = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['hsv'])))();
  }, E.format.hsv = function() {
for (var t, e, r, n, _, a, i, o, E, s = [], c = arguments.length; c--;)
  s[c] = arguments[c];
var I = (s = tp(s, 'hsv'))[0],
  R = s[1],
  T = s[2];
if (T *= 255, 0 === R)
  i = o = E = T;
else {
  360 === I && (I = 0), I > 360 && (I -= 360), I < 0 && (I += 360);
  var u = tD(I /= 60),
    l = I - u,
    A = T * (1 - R),
    N = T * (1 - R * l),
    d = T * (1 - R * (1 - l));
  switch (u) {
    case 0:
      i = (t = [
        T,
        d,
        A
      ])[0], o = t[1], E = t[2];
      break;
    case 1:
      i = (e = [
        N,
        T,
        A
      ])[0], o = e[1], E = e[2];
      break;
    case 2:
      i = (r = [
        A,
        T,
        d
      ])[0], o = r[1], E = r[2];
      break;
    case 3:
      i = (n = [
        A,
        N,
        T
      ])[0], o = n[1], E = n[2];
      break;
    case 4:
      i = (_ = [
        d,
        A,
        T
      ])[0], o = _[1], E = _[2];
      break;
    case 5:
      i = (a = [
        T,
        A,
        N
      ])[0], o = a[1], E = a[2];
  }
}
return [
  i,
  o,
  E,
  s.length > 3 ? s[3] : 1
];
  }, E.autodetect.push({
p: 2,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === tL(t = tf(t, 'hsv')) && 3 === t.length)
    return 'hsv';
}
  });
  var tC = {
  Kn: 18,
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  t0: 0.137931034,
  t1: 0.206896552,
  t2: 0.12841855,
  t3: 0.008856452
},
tg = o.unpack,
tP = Math.pow,
tM = function(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : tP((t + 0.055) / 1.055, 2.4);
},
tU = function(t) {
  return t > tC.t3 ? tP(t, 1 / 3) : t / tC.t2 + tC.t0;
},
tG = function(t, e, r) {
  return t = tM(t), e = tM(e), [
    tU((0.4124564 * t + 0.3575761 * e + 0.1804375 * (r = tM(r))) / tC.Xn),
    tU((0.2126729 * t + 0.7151522 * e + 0.072175 * r) / tC.Yn),
    tU((0.0193339 * t + 0.119192 * e + 0.9503041 * r) / tC.Zn)
  ];
},
tm = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = tg(t, 'rgb'),
    n = tG(r[0], r[1], r[2]),
    _ = n[0],
    a = n[1],
    i = n[2],
    o = 116 * a - 16;
  return [
    o < 0 ? 0 : o,
    500 * (_ - a),
    200 * (a - i)
  ];
},
ty = o.unpack,
tb = Math.pow,
tv = function(t) {
  return 255 * (t <= 0.00304 ? 12.92 * t : 1.055 * tb(t, 1 / 2.4) - 0.055);
},
tB = function(t) {
  return t > tC.t1 ? t * t * t : tC.t2 * (t - tC.t0);
},
tw = function() {
  for (var t, e, r, n, _, a = [], i = arguments.length; i--;)
    a[i] = arguments[i];
  var o = (a = ty(a, 'lab'))[0],
    E = a[1],
    s = a[2];
  return e = (o + 16) / 116, t = isNaN(E) ? e : e + E / 500, r = isNaN(s) ? e : e - s / 200, e = tC.Yn * tB(e), t = tC.Xn * tB(t), n = tv(3.2404542 * t - 1.5371385 * e - 0.4985314 * (r = tC.Zn * tB(r))), _ = tv(-0.969266 * t + 1.8760108 * e + 0.041556 * r), [
    n,
    _,
    tv(0.0556434 * t - 0.2040259 * e + 1.0572252 * r),
    a.length > 3 ? a[3] : 1
  ];
},
tH = o.unpack,
tY = o.type;
  R.prototype.lab = function() {
return tm(this._rgb);
  }, T.lab = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['lab'])))();
  }, E.format.lab = tw, E.autodetect.push({
p: 2,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === tY(t = tH(t, 'lab')) && 3 === t.length)
    return 'lab';
}
  });
  var tK = o.unpack,
tk = o.RAD2DEG,
tV = Math.sqrt,
tx = Math.atan2,
tF = Math.round,
tW = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = tK(t, 'lab'),
    n = r[0],
    _ = r[1],
    a = r[2],
    i = tV(_ * _ + a * a),
    o = (tx(a, _) * tk + 360) % 360;
  return 0 === tF(10000 * i) && (o = Number.NaN), [
    n,
    i,
    o
  ];
},
tX = o.unpack,
tj = o.unpack,
tz = o.DEG2RAD,
t$ = Math.sin,
tq = Math.cos,
tZ = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = tj(t, 'lch'),
    n = r[0],
    _ = r[1],
    a = r[2];
  return isNaN(a) && (a = 0), [
    n,
    tq(a *= tz) * _,
    t$(a) * _
  ];
},
tJ = o.unpack,
tQ = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = tZ((t = tJ(t, 'lch'))[0], t[1], t[2]),
    n = tw(r[0], r[1], r[2]);
  return [
    n[0],
    n[1],
    n[2],
    t.length > 3 ? t[3] : 1
  ];
},
t0 = o.unpack,
t1 = o.unpack,
t2 = o.type,
t3 = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = tX(t, 'rgb'),
    n = tm(r[0], r[1], r[2]);
  return tW(n[0], n[1], n[2]);
};
  R.prototype.lch = function() {
return t3(this._rgb);
  }, R.prototype.hcl = function() {
return t3(this._rgb).reverse();
  }, T.lch = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['lch'])))();
  }, T.hcl = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['hcl'])))();
  }, E.format.lch = tQ, E.format.hcl = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
var r = t0(t, 'hcl').reverse();
return tQ.apply(void 0, r);
  }, [
'lch',
'hcl'
  ].forEach(function(t) {
return E.autodetect.push({
  p: 2,
  test: function() {
    for (var e = [], r = arguments.length; r--;)
      e[r] = arguments[r];
    if ('array' === t2(e = t1(e, t)) && 3 === e.length)
      return t;
  }
});
  });
  var t6 = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflower: '#6495ed',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  laserlemon: '#ffff54',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrod: '#fafad2',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  maroon2: '#7f0000',
  maroon3: '#b03060',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  purple2: '#7f007f',
  purple3: '#a020f0',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
},
t5 = o.type;
  R.prototype.name = function() {
for (var t = J(this._rgb, 'rgb'), e = 0, r = Object.keys(t6); e < r.length; e += 1) {
  var n = r[e];
  if (t6[n] === t)
    return n.toLowerCase();
}
return t;
  }, E.format.named = function(t) {
if (t6[t = t.toLowerCase()])
  return te(t6[t]);
throw Error('unknown color name: ' + t);
  }, E.autodetect.push({
p: 5,
test: function(t) {
  for (var e = [], r = arguments.length - 1; r-- > 0;)
    e[r] = arguments[r + 1];
  if (!e.length && 'string' === t5(t) && t6[t.toLowerCase()])
    return 'named';
}
  });
  var t4 = o.unpack,
t8 = o.type,
t7 = o.type,
t9 = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = t4(t, 'rgb');
  return (r[0] << 16) + (r[1] << 8) + r[2];
};
  R.prototype.num = function() {
return t9(this._rgb);
  }, T.num = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['num'])))();
  }, E.format.num = function(t) {
if ('number' == t8(t) && t >= 0 && t <= 16777215)
  return [
    t >> 16,
    t >> 8 & 255,
    255 & t,
    1
  ];
throw Error('unknown num color: ' + t);
  }, E.autodetect.push({
p: 5,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if (1 === t.length && 'number' === t7(t[0]) && t[0] >= 0 && t[0] <= 16777215)
    return 'num';
}
  });
  var et = o.unpack,
ee = o.type,
er = Math.round;
  R.prototype.rgb = function(t) {
return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(er);
  }, R.prototype.rgba = function(t) {
return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function(e, r) {
  return r < 3 ? !1 === t ? e : er(e) : e;
});
  }, T.rgb = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['rgb'])))();
  }, E.format.rgb = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
var r = et(t, 'rgba');
return void 0 === r[3] && (r[3] = 1), r;
  }, E.autodetect.push({
p: 3,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === ee(t = et(t, 'rgba')) && (3 === t.length || 4 === t.length && 'number' == ee(t[3]) && t[3] >= 0 && t[3] <= 1))
    return 'rgb';
}
  });
  var en = Math.log,
e_ = function(t) {
  var e, r, n, _ = t / 100;
  return _ < 66 ? (e = 255, r = _ < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = _ - 2) + 104.49216199393888 * en(r), n = _ < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (n = _ - 10) + 115.67994401066147 * en(n)) : (e = 351.97690566805693 + 0.114206453784165 * (e = _ - 55) - 40.25366309332127 * en(e), r = 325.4494125711974 + 0.07943456536662342 * (r = _ - 50) - 28.0852963507957 * en(r), n = 255), [
    e,
    r,
    n,
    1
  ];
},
ea = o.unpack,
ei = Math.round,
eo = function() {
  for (var t, e = [], r = arguments.length; r--;)
    e[r] = arguments[r];
  for (var n = ea(e, 'rgb'), _ = n[0], a = n[2], i = 1000, o = 40000; o - i > 0.4;) {
    var E = e_(t = (o + i) * 0.5);
    E[2] / E[0] >= a / _ ? o = t : i = t;
  }
  return ei(t);
};
  R.prototype.temp = R.prototype.kelvin = R.prototype.temperature = function() {
return eo(this._rgb);
  }, T.temp = T.kelvin = T.temperature = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['temp'])))();
  }, E.format.temp = E.format.kelvin = E.format.temperature = e_;
  var eE = o.unpack,
es = Math.cbrt,
ec = Math.pow,
eI = Math.sign,
eR = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = eE(t, 'rgb'),
    n = r[0],
    _ = r[1],
    a = r[2],
    i = [
      eT(n / 255),
      eT(_ / 255),
      eT(a / 255)
    ],
    o = i[0],
    E = i[1],
    s = i[2],
    c = es(0.4122214708 * o + 0.5363325363 * E + 0.0514459929 * s),
    I = es(0.2119034982 * o + 0.6806995451 * E + 0.1073969566 * s),
    R = es(0.0883024619 * o + 0.2817188376 * E + 0.6299787005 * s);
  return [
    0.2104542553 * c + 0.793617785 * I - 0.0040720468 * R,
    1.9779984951 * c - 2.428592205 * I + 0.4505937099 * R,
    0.0259040371 * c + 0.7827717662 * I - 0.808675766 * R
  ];
};

  function eT(t) {
var e = Math.abs(t);
return e < 0.04045 ? t / 12.92 : (eI(t) || 1) * ec((e + 0.055) / 1.055, 2.4);
  }
  var eu = o.unpack,
el = Math.pow,
eA = Math.sign,
eN = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = (t = eu(t, 'lab'))[0],
    n = t[1],
    _ = t[2],
    a = el(r + 0.3963377774 * n + 0.2158037573 * _, 3),
    i = el(r - 0.1055613458 * n - 0.0638541728 * _, 3),
    o = el(r - 0.0894841775 * n - 1.291485548 * _, 3);
  return [
    255 * ed(4.0767416621 * a - 3.3077115913 * i + 0.2309699292 * o),
    255 * ed(-1.2684380046 * a + 2.6097574011 * i - 0.3413193965 * o),
    255 * ed(-0.0041960863 * a - 0.7034186147 * i + 1.707614701 * o),
    t.length > 3 ? t[3] : 1
  ];
};

  function ed(t) {
var e = Math.abs(t);
return e > 0.0031308 ? (eA(t) || 1) * (1.055 * el(e, 1 / 2.4) - 0.055) : 12.92 * t;
  }
  var eO = o.unpack,
eS = o.type;
  R.prototype.oklab = function() {
return eR(this._rgb);
  }, T.oklab = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['oklab'])))();
  }, E.format.oklab = eN, E.autodetect.push({
p: 3,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === eS(t = eO(t, 'oklab')) && 3 === t.length)
    return 'oklab';
}
  });
  var ep = o.unpack,
eD = o.unpack,
ef = o.unpack,
eL = o.type,
eh = function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  var r = ep(t, 'rgb'),
    n = eR(r[0], r[1], r[2]);
  return tW(n[0], n[1], n[2]);
};
  R.prototype.oklch = function() {
return eh(this._rgb);
  }, T.oklch = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
return new(Function.prototype.bind.apply(R, [null].concat(t, ['oklch'])))();
  }, E.format.oklch = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
var r = tZ((t = eD(t, 'lch'))[0], t[1], t[2]),
  n = eN(r[0], r[1], r[2]);
return [
  n[0],
  n[1],
  n[2],
  t.length > 3 ? t[3] : 1
];
  }, E.autodetect.push({
p: 3,
test: function() {
  for (var t = [], e = arguments.length; e--;)
    t[e] = arguments[e];
  if ('array' === eL(t = ef(t, 'oklch')) && 3 === t.length)
    return 'oklch';
}
  });
  var eC = o.type;
  R.prototype.alpha = function(t, e) {
if (void 0 === e && (e = !1), void 0 !== t && 'number' === eC(t))
  return e ? (this._rgb[3] = t, this) : new R([
    this._rgb[0],
    this._rgb[1],
    this._rgb[2],
    t
  ], 'rgb');
return this._rgb[3];
  };
  R.prototype.clipped = function() {
return this._rgb._clipped || !1;
  };
  R.prototype.darken = function(t) {
void 0 === t && (t = 1);
var e = this.lab();
return e[0] -= tC.Kn * t, new R(e, 'lab').alpha(this.alpha(), !0);
  }, R.prototype.brighten = function(t) {
return void 0 === t && (t = 1), this.darken(-t);
  }, R.prototype.darker = R.prototype.darken, R.prototype.brighter = R.prototype.brighten;
  R.prototype.get = function(t) {
var e = t.split('.'),
  r = e[0],
  n = e[1],
  _ = this[r]();
if (!n)
  return _;
var a = r.indexOf(n) - ('ok' === r.substr(0, 2) ? 2 : 0);
if (a > -1)
  return _[a];
throw Error('unknown channel ' + n + ' in mode ' + r);
  };
  var eg = o.type,
eP = Math.pow;
  R.prototype.luminance = function(t) {
if (void 0 !== t && 'number' === eg(t)) {
  if (0 === t)
    return new R([
      0,
      0,
      0,
      this._rgb[3]
    ], 'rgb');
  if (1 === t)
    return new R([
      255,
      255,
      255,
      this._rgb[3]
    ], 'rgb');
  var e = this.luminance(),
    r = 20,
    n = function(e, _) {
      var a = e.interpolate(_, 0.5, 'rgb'),
        i = a.luminance();
      return !(1e-7 > Math.abs(t - i)) && r-- ? i > t ? n(e, a) : n(a, _) : a;
    },
    _ = (e > t ? n(new R([
      0,
      0,
      0
    ]), this) : n(this, new R([
      255,
      255,
      255
    ]))).rgb();
  return new R(_.concat([this._rgb[3]]));
}
return eM.apply(void 0, this._rgb.slice(0, 3));
  };
  var eM = function(t, e, r) {
  return t = eU(t), e = eU(e), 0.2126 * t + 0.7152 * e + 0.0722 * (r = eU(r));
},
eU = function(t) {
  return (t /= 255) <= 0.03928 ? t / 12.92 : eP((t + 0.055) / 1.055, 2.4);
},
eG = {},
em = o.type,
ey = function(t, e, r) {
  void 0 === r && (r = 0.5);
  for (var n = [], _ = arguments.length - 3; _-- > 0;)
    n[_] = arguments[_ + 3];
  var a = n[0] || 'lrgb';
  if (!eG[a] && !n.length && (a = Object.keys(eG)[0]), !eG[a])
    throw Error('interpolation mode ' + a + ' is not defined');
  return 'object' !== em(t) && (t = new R(t)), 'object' !== em(e) && (e = new R(e)), eG[a](t, e, r).alpha(t.alpha() + r * (e.alpha() - t.alpha()));
};
  R.prototype.mix = R.prototype.interpolate = function(t, e) {
void 0 === e && (e = 0.5);
for (var r = [], n = arguments.length - 2; n-- > 0;)
  r[n] = arguments[n + 2];
return ey.apply(void 0, [
  this,
  t,
  e
].concat(r));
  };
  R.prototype.premultiply = function(t) {
void 0 === t && (t = !1);
var e = this._rgb,
  r = e[3];
return t ? (this._rgb = [
  e[0] * r,
  e[1] * r,
  e[2] * r,
  r
], this) : new R([
  e[0] * r,
  e[1] * r,
  e[2] * r,
  r
], 'rgb');
  };
  R.prototype.saturate = function(t) {
void 0 === t && (t = 1);
var e = this.lch();
return e[1] += tC.Kn * t, e[1] < 0 && (e[1] = 0), new R(e, 'lch').alpha(this.alpha(), !0);
  }, R.prototype.desaturate = function(t) {
return void 0 === t && (t = 1), this.saturate(-t);
  };
  var eb = o.type;
  R.prototype.set = function(t, e, r) {
void 0 === r && (r = !1);
var n = t.split('.'),
  _ = n[0],
  a = n[1],
  i = this[_]();
if (!a)
  return i;
var o = _.indexOf(a) - ('ok' === _.substr(0, 2) ? 2 : 0);
if (o > -1) {
  if ('string' == eb(e))
    switch (e.charAt(0)) {
      case '+':
      case '-':
        i[o] += +e;
        break;
      case '*':
        i[o] *= +e.substr(1);
        break;
      case '/':
        i[o] /= +e.substr(1);
        break;
      default:
        i[o] = +e;
    }
  else if ('number' === eb(e))
    i[o] = e;
  else
    throw Error('unsupported value for Color.set');
  var E = new R(i, _);
  return r ? (this._rgb = E._rgb, this) : E;
}
throw Error('unknown channel ' + a + ' in mode ' + _);
  };
  eG.rgb = function(t, e, r) {
var n = t._rgb,
  _ = e._rgb;
return new R(n[0] + r * (_[0] - n[0]), n[1] + r * (_[1] - n[1]), n[2] + r * (_[2] - n[2]), 'rgb');
  };
  var ev = Math.sqrt,
eB = Math.pow;
  eG.lrgb = function(t, e, r) {
var n = t._rgb,
  _ = n[0],
  a = n[1],
  i = n[2],
  o = e._rgb,
  E = o[0],
  s = o[1],
  c = o[2];
return new R(ev(eB(_, 2) * (1 - r) + eB(E, 2) * r), ev(eB(a, 2) * (1 - r) + eB(s, 2) * r), ev(eB(i, 2) * (1 - r) + eB(c, 2) * r), 'rgb');
  };
  eG.lab = function(t, e, r) {
var n = t.lab(),
  _ = e.lab();
return new R(n[0] + r * (_[0] - n[0]), n[1] + r * (_[1] - n[1]), n[2] + r * (_[2] - n[2]), 'lab');
  };
  var ew = function(t, e, r, n) {
  var _, a, i, o, E, s, c, I, T, u, l, A, N, d;
  return 'hsl' === n ? (i = t.hsl(), o = e.hsl()) : 'hsv' === n ? (i = t.hsv(), o = e.hsv()) : 'hcg' === n ? (i = t.hcg(), o = e.hcg()) : 'hsi' === n ? (i = t.hsi(), o = e.hsi()) : 'lch' === n || 'hcl' === n ? (n = 'hcl', i = t.hcl(), o = e.hcl()) : 'oklch' === n && (i = t.oklch().reverse(), o = e.oklch().reverse()), ('h' === n.substr(0, 1) || 'oklch' === n) && (E = (_ = i)[0], c = _[1], T = _[2], s = (a = o)[0], I = a[1], u = a[2]), isNaN(E) || isNaN(s) ? isNaN(E) ? isNaN(s) ? A = Number.NaN : (A = s, (1 == T || 0 == T) && 'hsv' != n && (l = I)) : (A = E, (1 == u || 0 == u) && 'hsv' != n && (l = c)) : (d = s > E && s - E > 180 ? s - (E + 360) : s < E && E - s > 180 ? s + 360 - E : s - E, A = E + r * d), void 0 === l && (l = c + r * (I - c)), N = T + r * (u - T), 'oklch' === n ? new R([
    N,
    l,
    A
  ], n) : new R([
    A,
    l,
    N
  ], n);
},
eH = function(t, e, r) {
  return ew(t, e, r, 'lch');
};
  eG.lch = eH, eG.hcl = eH;
  eG.num = function(t, e, r) {
var n = t.num();
return new R(n + r * (e.num() - n), 'num');
  };
  eG.hcg = function(t, e, r) {
return ew(t, e, r, 'hcg');
  };
  eG.hsi = function(t, e, r) {
return ew(t, e, r, 'hsi');
  };
  eG.hsl = function(t, e, r) {
return ew(t, e, r, 'hsl');
  };
  eG.hsv = function(t, e, r) {
return ew(t, e, r, 'hsv');
  };
  eG.oklab = function(t, e, r) {
var n = t.oklab(),
  _ = e.oklab();
return new R(n[0] + r * (_[0] - n[0]), n[1] + r * (_[1] - n[1]), n[2] + r * (_[2] - n[2]), 'oklab');
  };
  eG.oklch = function(t, e, r) {
return ew(t, e, r, 'oklch');
  };
  var eY = o.clip_rgb,
eK = Math.pow,
ek = Math.sqrt,
eV = Math.PI,
ex = Math.cos,
eF = Math.sin,
eW = Math.atan2,
eX = function(t, e) {
  for (var r = t.length, n = [
      0,
      0,
      0,
      0
    ], _ = 0; _ < t.length; _++) {
    var a = t[_],
      i = e[_] / r,
      o = a._rgb;
    n[0] += eK(o[0], 2) * i, n[1] += eK(o[1], 2) * i, n[2] += eK(o[2], 2) * i, n[3] += o[3] * i;
  }
  return n[0] = ek(n[0]), n[1] = ek(n[1]), n[2] = ek(n[2]), n[3] > 0.9999999 && (n[3] = 1), new R(eY(n));
},
ej = o.type,
ez = Math.pow,
e$ = function(t) {
  var e = 'rgb',
    r = T('#ccc'),
    n = 0,
    _ = [
      0,
      1
    ],
    a = [],
    i = [
      0,
      0
    ],
    o = !1,
    E = [],
    s = !1,
    c = 0,
    I = 1,
    R = !1,
    u = {},
    l = !0,
    A = 1,
    N = function(t) {
      if (t = t || [
          '#fff',
          '#000'
        ], 'string' === ej(t) && T.brewer && T.brewer[t.toLowerCase()] && (t = T.brewer[t.toLowerCase()]), 'array' === ej(t)) {
        1 === t.length && (t = [
          t[0],
          t[0]
        ]), t = t.slice(0);
        for (var e = 0; e < t.length; e++)
          t[e] = T(t[e]);
        a.length = 0;
        for (var r = 0; r < t.length; r++)
          a.push(r / (t.length - 1));
      }
      return D(), E = t;
    },
    d = function(t) {
      if (null != o) {
        for (var e = o.length - 1, r = 0; r < e && t >= o[r];)
          r++;
        return r - 1;
      }
      return 0;
    },
    O = function(t) {
      return t;
    },
    S = function(t) {
      return t;
    },
    p = function(t, n) {
      if (null == n && (n = !1), isNaN(t) || null === t)
        return r;
      if (n)
        s = t;
      else if (o && o.length > 2) {
        var _, s;
        s = d(t) / (o.length - 2);
      } else
        s = I !== c ? (t - c) / (I - c) : 1;
      s = S(s), !n && (s = O(s)), 1 !== A && (s = ez(s, A));
      var R = Math.floor(10000 * (s = Math.min(1, Math.max(0, s = i[0] + s * (1 - i[0] - i[1])))));
      if (l && u[R])
        _ = u[R];
      else {
        if ('array' === ej(E))
          for (var N = 0; N < a.length; N++) {
            var p = a[N];
            if (s <= p || s >= p && N === a.length - 1) {
              _ = E[N];
              break;
            }
            if (s > p && s < a[N + 1]) {
              s = (s - p) / (a[N + 1] - p), _ = T.interpolate(E[N], E[N + 1], s, e);
              break;
            }
          }
        else
          'function' === ej(E) && (_ = E(s));
        l && (u[R] = _);
      }
      return _;
    },
    D = function() {
      return u = {};
    };
  N(t);
  var f = function(t) {
    var e = T(p(t));
    return s && e[s] ? e[s]() : e;
  };
  return f.classes = function(t) {
    if (null != t) {
      if ('array' === ej(t))
        o = t, _ = [
          t[0],
          t[t.length - 1]
        ];
      else {
        var e = T.analyze(_);
        o = 0 === t ? [
          e.min,
          e.max
        ] : T.limits(e, 'e', t);
      }
      return f;
    }
    return o;
  }, f.domain = function(t) {
    if (!arguments.length)
      return _;
    c = t[0], I = t[t.length - 1], a = [];
    var e = E.length;
    if (t.length === e && c !== I)
      for (var r = 0, n = Array.from(t); r < n.length; r += 1) {
        var i = n[r];
        a.push((i - c) / (I - c));
      }
    else {
      for (var o = 0; o < e; o++)
        a.push(o / (e - 1));
      if (t.length > 2) {
        var s = t.map(function(e, r) {
            return r / (t.length - 1);
          }),
          R = t.map(function(t) {
            return (t - c) / (I - c);
          });
        !R.every(function(t, e) {
          return s[e] === t;
        }) && (S = function(t) {
          if (t <= 0 || t >= 1)
            return t;
          for (var e = 0; t >= R[e + 1];)
            e++;
          var r = (t - R[e]) / (R[e + 1] - R[e]);
          return s[e] + r * (s[e + 1] - s[e]);
        });
      }
    }
    return _ = [
      c,
      I
    ], f;
  }, f.mode = function(t) {
    return arguments.length ? (e = t, D(), f) : e;
  }, f.range = function(t, e) {
    return N(t), f;
  }, f.out = function(t) {
    return s = t, f;
  }, f.spread = function(t) {
    return arguments.length ? (n = t, f) : n;
  }, f.correctLightness = function(t) {
    return null == t && (t = !0), R = t, D(), O = R ? function(t) {
      for (var e = p(0, !0).lab()[0], r = p(1, !0).lab()[0], n = e > r, _ = p(t, !0).lab()[0], a = e + (r - e) * t, i = _ - a, o = 0, E = 1, s = 20; Math.abs(i) > 0.01 && s-- > 0;)
        n && (i *= -1), i < 0 ? (o = t, t += (E - t) * 0.5) : (E = t, t += (o - t) * 0.5), i = (_ = p(t, !0).lab()[0]) - a;
      return t;
    } : function(t) {
      return t;
    }, f;
  }, f.padding = function(t) {
    return null != t ? ('number' === ej(t) && (t = [
      t,
      t
    ]), i = t, f) : i;
  }, f.colors = function(e, r) {
    arguments.length < 2 && (r = 'hex');
    var n = [];
    if (0 == arguments.length)
      n = E.slice(0);
    else if (1 === e)
      n = [f(0.5)];
    else if (e > 1) {
      var a = _[0],
        i = _[1] - a;
      n = function(t, e, r) {
        for (var n = [], _ = t < e, a = r ? _ ? e + 1 : e - 1 : e, i = t; _ ? i < a : i > a; _ ? i++ : i--)
          n.push(i);
        return n;
      }(0, e, !1).map(function(t) {
        return f(a + t / (e - 1) * i);
      });
    } else {
      t = [];
      var s = [];
      if (o && o.length > 2)
        for (var c = 1, I = o.length, R = 1 <= I; R ? c < I : c > I; R ? c++ : c--)
          s.push((o[c - 1] + o[c]) * 0.5);
      else
        s = _;
      n = s.map(function(t) {
        return f(t);
      });
    }
    return T[r] && (n = n.map(function(t) {
      return t[r]();
    })), n;
  }, f.cache = function(t) {
    return null != t ? (l = t, f) : l;
  }, f.gamma = function(t) {
    return null != t ? (A = t, f) : A;
  }, f.nodata = function(t) {
    return null != t ? (r = T(t), f) : r;
  }, f;
},
eq = function(t) {
  for (var e = [
      1,
      1
    ], r = 1; r < t; r++) {
    for (var n = [1], _ = 1; _ <= e.length; _++)
      n[_] = (e[_] || 0) + e[_ - 1];
    e = n;
  }
  return e;
},
eZ = function(t) {
  var e, r, n, _, a, i, o, E, s, c, I;
  if (2 === (t = t.map(function(t) {
      return new R(t);
    })).length)
    a = (e = t.map(function(t) {
      return t.lab();
    }))[0], i = e[1], _ = function(t) {
      return new R([
        0,
        1,
        2
      ].map(function(e) {
        return a[e] + t * (i[e] - a[e]);
      }), 'lab');
    };
  else if (3 === t.length)
    a = (r = t.map(function(t) {
      return t.lab();
    }))[0], i = r[1], o = r[2], _ = function(t) {
      return new R([
        0,
        1,
        2
      ].map(function(e) {
        return (1 - t) * (1 - t) * a[e] + 2 * (1 - t) * t * i[e] + t * t * o[e];
      }), 'lab');
    };
  else if (4 === t.length)
    a = (n = t.map(function(t) {
      return t.lab();
    }))[0], i = n[1], o = n[2], E = n[3], _ = function(t) {
      return new R([
        0,
        1,
        2
      ].map(function(e) {
        return (1 - t) * (1 - t) * (1 - t) * a[e] + 3 * (1 - t) * (1 - t) * t * i[e] + 3 * (1 - t) * t * t * o[e] + t * t * t * E[e];
      }), 'lab');
    };
  else if (t.length >= 5)
    s = t.map(function(t) {
      return t.lab();
    }), c = eq(I = t.length - 1), _ = function(t) {
      var e = 1 - t;
      return new R([
        0,
        1,
        2
      ].map(function(r) {
        return s.reduce(function(n, _, a) {
          return n + c[a] * Math.pow(e, I - a) * Math.pow(t, a) * _[r];
        }, 0);
      }), 'lab');
    };
  else
    throw RangeError('No point in running bezier with only one color.');
  return _;
},
eJ = function(t, e, r) {
  if (!eJ[r])
    throw Error('unknown blend mode ' + r);
  return eJ[r](t, e);
},
eQ = function(t) {
  return function(e, r) {
    var n = T(r).rgb(),
      _ = T(e).rgb();
    return T.rgb(t(n, _));
  };
},
e0 = function(t) {
  return function(e, r) {
    var n = [];
    return n[0] = t(e[0], r[0]), n[1] = t(e[1], r[1]), n[2] = t(e[2], r[2]), n;
  };
};
  eJ.normal = eQ(e0(function(t) {
return t;
  })), eJ.multiply = eQ(e0(function(t, e) {
return t * e / 255;
  })), eJ.screen = eQ(e0(function(t, e) {
return 255 * (1 - (1 - t / 255) * (1 - e / 255));
  })), eJ.overlay = eQ(e0(function(t, e) {
return e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255));
  })), eJ.darken = eQ(e0(function(t, e) {
return t > e ? e : t;
  })), eJ.lighten = eQ(e0(function(t, e) {
return t > e ? t : e;
  })), eJ.dodge = eQ(e0(function(t, e) {
return 255 === t ? 255 : (t = e / 255 * 255 / (1 - t / 255)) > 255 ? 255 : t;
  })), eJ.burn = eQ(e0(function(t, e) {
return 255 * (1 - (1 - e / 255) / (t / 255));
  }));
  for (var e1 = o.type, e2 = o.clip_rgb, e3 = o.TWOPI, e6 = Math.pow, e5 = Math.sin, e4 = Math.cos, e8 = Math.floor, e7 = Math.random, e9 = Math.log, rt = Math.pow, re = Math.floor, rr = Math.abs, rn = function(t, e) {
  void 0 === e && (e = null);
  var r = {
    min: Number.MAX_VALUE,
    max: -1 * Number.MAX_VALUE,
    sum: 0,
    values: [],
    count: 0
  };
  return 'object' === a(t) && (t = Object.values(t)), t.forEach(function(t) {
    e && 'object' === a(t) && (t = t[e]), null != t && !isNaN(t) && (r.values.push(t), r.sum += t, t < r.min && (r.min = t), t > r.max && (r.max = t), r.count += 1);
  }), r.domain = [
    r.min,
    r.max
  ], r.limits = function(t, e) {
    return r_(r, t, e);
  }, r;
}, r_ = function(t, e, r) {
  void 0 === e && (e = 'equal'), void 0 === r && (r = 7), 'array' == a(t) && (t = rn(t));
  var n = t.min,
    _ = t.max,
    i = t.values.sort(function(t, e) {
      return t - e;
    });
  if (1 === r)
    return [
      n,
      _
    ];
  var o = [];
  if ('c' === e.substr(0, 1) && (o.push(n), o.push(_)), 'e' === e.substr(0, 1)) {
    o.push(n);
    for (var E = 1; E < r; E++)
      o.push(n + E / r * (_ - n));
    o.push(_);
  } else if ('l' === e.substr(0, 1)) {
    if (n <= 0)
      throw Error('Logarithmic scales are only possible for values > 0');
    var s = Math.LOG10E * e9(n),
      c = Math.LOG10E * e9(_);
    o.push(n);
    for (var I = 1; I < r; I++)
      o.push(rt(10, s + I / r * (c - s)));
    o.push(_);
  } else if ('q' === e.substr(0, 1)) {
    o.push(n);
    for (var R = 1; R < r; R++) {
      var T = (i.length - 1) * R / r,
        u = re(T);
      if (u === T)
        o.push(i[u]);
      else {
        var l = T - u;
        o.push(i[u] * (1 - l) + i[u + 1] * l);
      }
    }
    o.push(_);
  } else if ('k' === e.substr(0, 1)) {
    var A, N = i.length,
      d = Array(N),
      O = Array(r),
      S = !0,
      p = 0,
      D = null;
    (D = []).push(n);
    for (var f = 1; f < r; f++)
      D.push(n + f / r * (_ - n));
    for (D.push(_); S;) {
      for (var L = 0; L < r; L++)
        O[L] = 0;
      for (var h = 0; h < N; h++) {
        for (var C = i[h], g = Number.MAX_VALUE, P = void 0, M = 0; M < r; M++) {
          var U = rr(D[M] - C);
          U < g && (g = U, P = M), O[P]++, d[h] = P;
        }
      }
      for (var G = Array(r), m = 0; m < r; m++)
        G[m] = null;
      for (var y = 0; y < N; y++)
        null === G[A = d[y]] ? G[A] = i[y] : G[A] += i[y];
      for (var b = 0; b < r; b++)
        G[b] *= 1 / O[b];
      S = !1;
      for (var v = 0; v < r; v++)
        if (G[v] !== D[v]) {
          S = !0;
          break;
        }
      D = G, ++p > 200 && (S = !1);
    }
    for (var B = {}, w = 0; w < r; w++)
      B[w] = [];
    for (var H = 0; H < N; H++)
      B[A = d[H]].push(i[H]);
    for (var Y = [], K = 0; K < r; K++)
      Y.push(B[K][0]), Y.push(B[K][B[K].length - 1]);
    Y = Y.sort(function(t, e) {
      return t - e;
    }), o.push(Y[0]);
    for (var k = 1; k < Y.length; k += 2) {
      var V = Y[k];
      !isNaN(V) && -1 === o.indexOf(V) && o.push(V);
    }
  }
  return o;
}, ra = rn, ri = r_, ro = Math.sqrt, rE = Math.pow, rs = Math.min, rc = Math.max, rI = Math.atan2, rR = Math.abs, rT = Math.cos, ru = Math.sin, rl = Math.exp, rA = Math.PI, rN = {
  OrRd: [
    '#fff7ec',
    '#fee8c8',
    '#fdd49e',
    '#fdbb84',
    '#fc8d59',
    '#ef6548',
    '#d7301f',
    '#b30000',
    '#7f0000'
  ],
  PuBu: [
    '#fff7fb',
    '#ece7f2',
    '#d0d1e6',
    '#a6bddb',
    '#74a9cf',
    '#3690c0',
    '#0570b0',
    '#045a8d',
    '#023858'
  ],
  BuPu: [
    '#f7fcfd',
    '#e0ecf4',
    '#bfd3e6',
    '#9ebcda',
    '#8c96c6',
    '#8c6bb1',
    '#88419d',
    '#810f7c',
    '#4d004b'
  ],
  Oranges: [
    '#fff5eb',
    '#fee6ce',
    '#fdd0a2',
    '#fdae6b',
    '#fd8d3c',
    '#f16913',
    '#d94801',
    '#a63603',
    '#7f2704'
  ],
  BuGn: [
    '#f7fcfd',
    '#e5f5f9',
    '#ccece6',
    '#99d8c9',
    '#66c2a4',
    '#41ae76',
    '#238b45',
    '#006d2c',
    '#00441b'
  ],
  YlOrBr: [
    '#ffffe5',
    '#fff7bc',
    '#fee391',
    '#fec44f',
    '#fe9929',
    '#ec7014',
    '#cc4c02',
    '#993404',
    '#662506'
  ],
  YlGn: [
    '#ffffe5',
    '#f7fcb9',
    '#d9f0a3',
    '#addd8e',
    '#78c679',
    '#41ab5d',
    '#238443',
    '#006837',
    '#004529'
  ],
  Reds: [
    '#fff5f0',
    '#fee0d2',
    '#fcbba1',
    '#fc9272',
    '#fb6a4a',
    '#ef3b2c',
    '#cb181d',
    '#a50f15',
    '#67000d'
  ],
  RdPu: [
    '#fff7f3',
    '#fde0dd',
    '#fcc5c0',
    '#fa9fb5',
    '#f768a1',
    '#dd3497',
    '#ae017e',
    '#7a0177',
    '#49006a'
  ],
  Greens: [
    '#f7fcf5',
    '#e5f5e0',
    '#c7e9c0',
    '#a1d99b',
    '#74c476',
    '#41ab5d',
    '#238b45',
    '#006d2c',
    '#00441b'
  ],
  YlGnBu: [
    '#ffffd9',
    '#edf8b1',
    '#c7e9b4',
    '#7fcdbb',
    '#41b6c4',
    '#1d91c0',
    '#225ea8',
    '#253494',
    '#081d58'
  ],
  Purples: [
    '#fcfbfd',
    '#efedf5',
    '#dadaeb',
    '#bcbddc',
    '#9e9ac8',
    '#807dba',
    '#6a51a3',
    '#54278f',
    '#3f007d'
  ],
  GnBu: [
    '#f7fcf0',
    '#e0f3db',
    '#ccebc5',
    '#a8ddb5',
    '#7bccc4',
    '#4eb3d3',
    '#2b8cbe',
    '#0868ac',
    '#084081'
  ],
  Greys: [
    '#ffffff',
    '#f0f0f0',
    '#d9d9d9',
    '#bdbdbd',
    '#969696',
    '#737373',
    '#525252',
    '#252525',
    '#000000'
  ],
  YlOrRd: [
    '#ffffcc',
    '#ffeda0',
    '#fed976',
    '#feb24c',
    '#fd8d3c',
    '#fc4e2a',
    '#e31a1c',
    '#bd0026',
    '#800026'
  ],
  PuRd: [
    '#f7f4f9',
    '#e7e1ef',
    '#d4b9da',
    '#c994c7',
    '#df65b0',
    '#e7298a',
    '#ce1256',
    '#980043',
    '#67001f'
  ],
  Blues: [
    '#f7fbff',
    '#deebf7',
    '#c6dbef',
    '#9ecae1',
    '#6baed6',
    '#4292c6',
    '#2171b5',
    '#08519c',
    '#08306b'
  ],
  PuBuGn: [
    '#fff7fb',
    '#ece2f0',
    '#d0d1e6',
    '#a6bddb',
    '#67a9cf',
    '#3690c0',
    '#02818a',
    '#016c59',
    '#014636'
  ],
  Viridis: [
    '#440154',
    '#482777',
    '#3f4a8a',
    '#31678e',
    '#26838f',
    '#1f9d8a',
    '#6cce5a',
    '#b6de2b',
    '#fee825'
  ],
  Spectral: [
    '#9e0142',
    '#d53e4f',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#ffffbf',
    '#e6f598',
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2'
  ],
  RdYlGn: [
    '#a50026',
    '#d73027',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#ffffbf',
    '#d9ef8b',
    '#a6d96a',
    '#66bd63',
    '#1a9850',
    '#006837'
  ],
  RdBu: [
    '#67001f',
    '#b2182b',
    '#d6604d',
    '#f4a582',
    '#fddbc7',
    '#f7f7f7',
    '#d1e5f0',
    '#92c5de',
    '#4393c3',
    '#2166ac',
    '#053061'
  ],
  PiYG: [
    '#8e0152',
    '#c51b7d',
    '#de77ae',
    '#f1b6da',
    '#fde0ef',
    '#f7f7f7',
    '#e6f5d0',
    '#b8e186',
    '#7fbc41',
    '#4d9221',
    '#276419'
  ],
  PRGn: [
    '#40004b',
    '#762a83',
    '#9970ab',
    '#c2a5cf',
    '#e7d4e8',
    '#f7f7f7',
    '#d9f0d3',
    '#a6dba0',
    '#5aae61',
    '#1b7837',
    '#00441b'
  ],
  RdYlBu: [
    '#a50026',
    '#d73027',
    '#f46d43',
    '#fdae61',
    '#fee090',
    '#ffffbf',
    '#e0f3f8',
    '#abd9e9',
    '#74add1',
    '#4575b4',
    '#313695'
  ],
  BrBG: [
    '#543005',
    '#8c510a',
    '#bf812d',
    '#dfc27d',
    '#f6e8c3',
    '#f5f5f5',
    '#c7eae5',
    '#80cdc1',
    '#35978f',
    '#01665e',
    '#003c30'
  ],
  RdGy: [
    '#67001f',
    '#b2182b',
    '#d6604d',
    '#f4a582',
    '#fddbc7',
    '#ffffff',
    '#e0e0e0',
    '#bababa',
    '#878787',
    '#4d4d4d',
    '#1a1a1a'
  ],
  PuOr: [
    '#7f3b08',
    '#b35806',
    '#e08214',
    '#fdb863',
    '#fee0b6',
    '#f7f7f7',
    '#d8daeb',
    '#b2abd2',
    '#8073ac',
    '#542788',
    '#2d004b'
  ],
  Set2: [
    '#66c2a5',
    '#fc8d62',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f',
    '#e5c494',
    '#b3b3b3'
  ],
  Accent: [
    '#7fc97f',
    '#beaed4',
    '#fdc086',
    '#ffff99',
    '#386cb0',
    '#f0027f',
    '#bf5b17',
    '#666666'
  ],
  Set1: [
    '#e41a1c',
    '#377eb8',
    '#4daf4a',
    '#984ea3',
    '#ff7f00',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#999999'
  ],
  Set3: [
    '#8dd3c7',
    '#ffffb3',
    '#bebada',
    '#fb8072',
    '#80b1d3',
    '#fdb462',
    '#b3de69',
    '#fccde5',
    '#d9d9d9',
    '#bc80bd',
    '#ccebc5',
    '#ffed6f'
  ],
  Dark2: [
    '#1b9e77',
    '#d95f02',
    '#7570b3',
    '#e7298a',
    '#66a61e',
    '#e6ab02',
    '#a6761d',
    '#666666'
  ],
  Paired: [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a',
    '#ffff99',
    '#b15928'
  ],
  Pastel2: [
    '#b3e2cd',
    '#fdcdac',
    '#cbd5e8',
    '#f4cae4',
    '#e6f5c9',
    '#fff2ae',
    '#f1e2cc',
    '#cccccc'
  ],
  Pastel1: [
    '#fbb4ae',
    '#b3cde3',
    '#ccebc5',
    '#decbe4',
    '#fed9a6',
    '#ffffcc',
    '#e5d8bd',
    '#fddaec',
    '#f2f2f2'
  ]
}, rd = 0, rO = Object.keys(rN); rd < rO.length; rd += 1) {
var rS = rO[rd];
rN[rS.toLowerCase()] = rN[rS];
  }
  return T.average = function(t, e, r) {
void 0 === e && (e = 'lrgb'), void 0 === r && (r = null);
var n = t.length;
!r && (r = Array.from(Array(n)).map(function() {
  return 1;
}));
var _ = n / r.reduce(function(t, e) {
  return t + e;
});
if (r.forEach(function(t, e) {
    r[e] *= _;
  }), t = t.map(function(t) {
    return new R(t);
  }), 'lrgb' === e)
  return eX(t, r);
for (var a = t.shift(), i = a.get(e), o = [], E = 0, s = 0, c = 0; c < i.length; c++)
  if (i[c] = (i[c] || 0) * r[0], o.push(isNaN(i[c]) ? 0 : r[0]), 'h' === e.charAt(c) && !isNaN(i[c])) {
    var I = i[c] / 180 * eV;
    E += ex(I) * r[0], s += eF(I) * r[0];
  }
var T = a.alpha() * r[0];
t.forEach(function(t, n) {
  var _ = t.get(e);
  T += t.alpha() * r[n + 1];
  for (var a = 0; a < i.length; a++)
    if (!isNaN(_[a])) {
      if (o[a] += r[n + 1], 'h' === e.charAt(a)) {
        var c = _[a] / 180 * eV;
        E += ex(c) * r[n + 1], s += eF(c) * r[n + 1];
      } else
        i[a] += _[a] * r[n + 1];
    }
});
for (var u = 0; u < i.length; u++)
  if ('h' === e.charAt(u)) {
    for (var l = eW(s / o[u], E / o[u]) / eV * 180; l < 0;)
      l += 360;
    for (; l >= 360;)
      l -= 360;
    i[u] = l;
  } else
    i[u] = i[u] / o[u];
return T /= n, new R(i, e).alpha(T > 0.99999 ? 1 : T, !0);
  }, T.bezier = function(t) {
var e = eZ(t);
return e.scale = function() {
  return e$(e);
}, e;
  }, T.blend = eJ, T.cubehelix = function(t, e, r, n, _) {
void 0 === t && (t = 300), void 0 === e && (e = -1.5), void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === _ && (_ = [
  0,
  1
]);
var a, i = 0;
'array' === e1(_) ? a = _[1] - _[0] : (a = 0, _ = [
  _,
  _
]);
var o = function(o) {
  var E = e3 * ((t + 120) / 360 + e * o),
    s = e6(_[0] + a * o, n),
    c = (0 !== i ? r[0] + o * i : r) * s * (1 - s) / 2,
    I = e4(E),
    R = e5(E);
  return T(e2([
    255 * (s + c * (-0.14861 * I + 1.78277 * R)),
    255 * (s + c * (-0.29227 * I - 0.90649 * R)),
    255 * (s + 1.97294 * I * c),
    1
  ]));
};
return o.start = function(e) {
  return null == e ? t : (t = e, o);
}, o.rotations = function(t) {
  return null == t ? e : (e = t, o);
}, o.gamma = function(t) {
  return null == t ? n : (n = t, o);
}, o.hue = function(t) {
  return null == t ? r : ('array' === e1(r = t) ? 0 == (i = r[1] - r[0]) && (r = r[1]) : i = 0, o);
}, o.lightness = function(t) {
  return null == t ? _ : ('array' === e1(t) ? (_ = t, a = t[1] - t[0]) : (_ = [
    t,
    t
  ], a = 0), o);
}, o.scale = function() {
  return T.scale(o);
}, o.hue(r), o;
  }, T.mix = T.interpolate = ey, T.random = function() {
for (var t = '#', e = 0; e < 6; e++)
  t += '0123456789abcdef'.charAt(e8(16 * e7()));
return new R(t, 'hex');
  }, T.scale = e$, T.analyze = ra, T.contrast = function(t, e) {
t = new R(t), e = new R(e);
var r = t.luminance(),
  n = e.luminance();
return r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05);
  }, T.deltaE = function(t, e, r, n, _) {
void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === _ && (_ = 1);
var a = function(t) {
    return 360 * t / (2 * rA);
  },
  i = function(t) {
    return 2 * rA * t / 360;
  };
t = new R(t), e = new R(e);
var o = Array.from(t.lab()),
  E = o[0],
  s = o[1],
  c = o[2],
  I = Array.from(e.lab()),
  T = I[0],
  u = I[1],
  l = I[2],
  A = (E + T) / 2,
  N = (ro(rE(s, 2) + rE(c, 2)) + ro(rE(u, 2) + rE(l, 2))) / 2,
  d = 0.5 * (1 - ro(rE(N, 7) / (rE(N, 7) + rE(25, 7)))),
  O = s * (1 + d),
  S = u * (1 + d),
  p = ro(rE(O, 2) + rE(c, 2)),
  D = ro(rE(S, 2) + rE(l, 2)),
  f = (p + D) / 2,
  L = a(rI(c, O)),
  h = a(rI(l, S)),
  C = L >= 0 ? L : L + 360,
  g = h >= 0 ? h : h + 360,
  P = rR(C - g) > 180 ? (C + g + 360) / 2 : (C + g) / 2,
  M = 1 - 0.17 * rT(i(P - 30)) + 0.24 * rT(i(2 * P)) + 0.32 * rT(i(3 * P + 6)) - 0.2 * rT(i(4 * P - 63)),
  U = g - C;
U = 180 >= rR(U) ? U : g <= C ? U + 360 : U - 360, U = 2 * ro(p * D) * ru(i(U) / 2);
var G = D - p,
  m = 1 + 0.015 * rE(A - 50, 2) / ro(20 + rE(A - 50, 2)),
  y = 1 + 0.045 * f,
  b = 1 + 0.015 * f * M,
  v = 30 * rl(-rE((P - 275) / 25, 2)),
  B = -(2 * ro(rE(f, 7) / (rE(f, 7) + rE(25, 7)))) * ru(2 * i(v));
return rc(0, rs(100, ro(rE((T - E) / (r * m), 2) + rE(G / (n * y), 2) + rE(U / (_ * b), 2) + G / (n * y) * B * (U / (_ * b)))));
  }, T.distance = function(t, e, r) {
void 0 === r && (r = 'lab'), t = new R(t), e = new R(e);
var n = t.get(r),
  _ = e.get(r),
  a = 0;
for (var i in n) {
  var o = (n[i] || 0) - (_[i] || 0);
  a += o * o;
}
return Math.sqrt(a);
  }, T.limits = ri, T.valid = function() {
for (var t = [], e = arguments.length; e--;)
  t[e] = arguments[e];
try {
  return new(Function.prototype.bind.apply(R, [null].concat(t)))(), !0;
} catch (t) {
  return !1;
}
  }, T.scales = {
cool: function() {
  return e$([
    T.hsl(180, 1, 0.9),
    T.hsl(250, 0.7, 0.4)
  ]);
},
hot: function() {
  return e$([
    '#000',
    '#f00',
    '#ff0',
    '#fff'
  ]).mode('rgb');
}
  }, T.colors = t6, T.brewer = rN, T;
}, t.exports = r();