"use strict";
n.d(t, {
  $I: function() {
    return C
  },
  Fc: function() {
    return D
  },
  Ku: function() {
    return R
  },
  VF: function() {
    return M
  },
  WX: function() {
    return r
  },
  X_: function() {
    return l
  },
  _U: function() {
    return g
  },
  fL: function() {
    return a
  },
  gG: function() {
    return m
  },
  gv: function() {
    return u
  },
  j8: function() {
    return o
  },
  nz: function() {
    return p
  },
  p: function() {
    return N
  },
  p1: function() {
    return i
  },
  pg: function() {
    return L
  },
  rC: function() {
    return v
  },
  sy: function() {
    return s
  },
  wm: function() {
    return A
  },
  zV: function() {
    return P
  },
  zw: function() {
    return O
  }
}), n(47120);
var i, r, s, o, a, l, u, _, d, c, E, I, T, h, S = n(70956),
  f = n(981631);
let N = 100,
  A = 1e3,
  m = 100,
  O = "Guild Events Modal",
  R = "-1";
(_ = i || (i = {}))[_.SCHEDULED = 1] = "SCHEDULED", _[_.ACTIVE = 2] = "ACTIVE", _[_.COMPLETED = 3] = "COMPLETED", _[_.CANCELED = 4] = "CANCELED";
let C = new Set([3, 4]);
(d = r || (r = {}))[d.NONE = 0] = "NONE", d[d.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", d[d.VOICE = 2] = "VOICE", d[d.EXTERNAL = 3] = "EXTERNAL", d[d.PRIME_TIME = 4] = "PRIME_TIME", (c = s || (s = {}))[c.EVENT_START = 1] = "EVENT_START", (E = o || (o = {}))[E.PUBLIC = 1] = "PUBLIC", E[E.GUILD_ONLY = 2] = "GUILD_ONLY";
let p = {
    1: f.d4z.GUILD_STAGE_VOICE,
    2: f.d4z.GUILD_VOICE
  },
  g = new Set([3]),
  L = new Set([1, 2]);
(I = a || (a = {}))[I.EVENT_INFO = 0] = "EVENT_INFO", I[I.RSVP_LIST = 1] = "RSVP_LIST";
let v = 100,
  D = 2 * S.Z.Millis.DAY,
  M = 12 * S.Z.Millis.HOUR,
  P = 4;
(T = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", T.EVENT_STARTING_SOON = "Event Starting Soon Notice", (h = u || (u = {}))[h.UNINTERESTED = 0] = "UNINTERESTED", h[h.INTERESTED = 1] = "INTERESTED"