"use strict";
n.d(t, {
  A5: function() {
    return x
  },
  B2: function() {
    return m
  },
  Bg: function() {
    return S
  },
  D5: function() {
    return _
  },
  D_: function() {
    return E
  },
  EF: function() {
    return h
  },
  G$: function() {
    return I
  },
  HW: function() {
    return R
  },
  Hp: function() {
    return O
  },
  JO: function() {
    return M
  },
  Kw: function() {
    return y
  },
  MG: function() {
    return p
  },
  OT: function() {
    return a
  },
  Qr: function() {
    return L
  },
  Ut: function() {
    return g
  },
  WM: function() {
    return f
  },
  X9: function() {
    return u
  },
  XH: function() {
    return C
  },
  _U: function() {
    return k
  },
  dJ: function() {
    return l
  },
  f_: function() {
    return v
  },
  i$: function() {
    return G
  },
  jF: function() {
    return T
  },
  ji: function() {
    return b
  },
  jp: function() {
    return U
  },
  mg: function() {
    return A
  },
  nU: function() {
    return N
  },
  wD: function() {
    return D
  },
  xd: function() {
    return B
  },
  xx: function() {
    return w
  },
  yl: function() {
    return P
  }
});
var i, r, s, o, a, l, u, _, d = n(710845),
  c = n(70956);
(i = a || (a = {}))[i.SECONDS_30 = 30 * c.Z.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = c.Z.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * c.Z.Millis.MINUTE] = "MINUTES_2", (r = l || (l = {}))[r.ALL = 0] = "ALL", r[r.FRIENDS = 1] = "FRIENDS", (s = u || (u = {})).DECOUPLED = "decoupled", s.VIEWER = "viewer", s.STREAMER = "streamer", (o = _ || (_ = {}))[o.Error = 0] = "Error", o[o.Disabled = 1] = "Disabled", o[o.Enabled = 2] = "Enabled";
let E = "alt+c",
  I = 6 * c.Z.Millis.SECOND,
  T = new d.Z("Clips"),
  h = e => "Discord_Clip_".concat(e, ".mp4"),
  S = 3,
  f = 1,
  N = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  A = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
  m = /(Apple M[12].*)/,
  O = .1,
  R = 25,
  C = 0,
  p = 200,
  g = "clips-edit",
  L = "clips-gallery",
  v = 640,
  D = 360,
  M = 100,
  P = e => "Clip - ".concat(new Date(e).toLocaleString()),
  y = 15,
  U = 3e4,
  b = 30,
  G = 10,
  w = 14 * c.Z.Millis.DAY,
  k = 5,
  B = 5,
  x = 1