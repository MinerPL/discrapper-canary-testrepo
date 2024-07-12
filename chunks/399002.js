s.d(t, {
  B9: function() {
return d;
  },
  Hm: function() {
return r;
  },
  K4: function() {
return l;
  },
  tn: function() {
return o;
  },
  un: function() {
return _;
  },
  vW: function() {
return c;
  }
}), s(47120), s(518263), s(970173), s(520712), s(268111), s(941497), s(32026), s(480839), s(744285), s(492257), s(873817), s(863942);
var n = s(250683),
  a = s(909766),
  i = s(369541);

function r(e) {
  return 8 * e.clusterSize * 1000 / e.clusterIntervalMs;
}

function o(e) {
  return e.clusterIntervalMs * e.numClusters / 1000;
}

function l(e) {
  return e.direction === i.u_.CLIENT_TO_SERVER ? 'Client -> Server' : e.direction === i.u_.SERVER_TO_CLIENT ? 'Server -> Client' : e.direction;
}

function c(e) {
  return 1000 / e.clusterIntervalMs;
}

function d(e) {
  let t = [...e];
  t.sort((e, t) => e - t);
  let s = t.length;
  return {
count: s,
min: t[0],
p50: t[Math.floor(s / 2)],
max: t[s - 1]
  };
}

function _(e, t, s) {
  let i = new DataView(Uint8Array.from(n.toByteArray(e)).buffer),
r = 16,
o = Math.ceil(t.clusterSize / 1200),
l = t.numClusters * o,
c = 0,
d = 0,
_ = 0,
E = null,
u = null,
T = null,
I = null,
S = null;
  for (let e = 0; e < i.byteLength / r; e++) {
let t = i.getUint32(4 * (4 * e + 0)),
  n = i.getUint32(4 * (4 * e + 1)),
  a = i.getUint32(4 * (4 * e + 2)),
  r = i.getUint32(4 * (4 * e + 3));
c++, d += n, _ += n + s, null == u && (u = r), T = r, null == E && (E = a), null == I && (I = t);
let o = r - (a - E);
null == S && (S = o), o < S && (S = o);
  }
  let N = new a.b(),
C = null;
  for (let e = 0; e < i.byteLength / r; e++) {
let t = i.getUint32(4 * (4 * e + 2)),
  s = (i.getUint32(4 * (4 * e + 3)) - (t - E) - S) / 1000;
N.addSample(s), null == C && (C = s), s > C && (C = s);
  }
  let m = null != u && null != T ? (T - u) / 1000 : 0,
A = 1 - c / l,
h = 8 * d / m,
g = 8 * _ / m,
O = N.getReport([
  50,
  95,
  99
]);
  return {
payloadBandwidth: h,
networkBandwidth: g,
loss: A,
iatP50: O.percentiles[50],
iatP95: O.percentiles[95],
iatP99: O.percentiles[99],
iatMax: null != C ? C : 0
  };
}