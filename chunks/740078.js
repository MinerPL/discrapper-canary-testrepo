"use strict";
n.d(t, {
  BL: function() {
    return c
  },
  Ct: function() {
    return g
  },
  F2: function() {
    return a
  },
  I: function() {
    return i
  },
  Pj: function() {
    return f
  },
  YP: function() {
    return h
  },
  bw: function() {
    return m
  },
  d7: function() {
    return s
  },
  k5: function() {
    return p
  },
  mv: function() {
    return u
  },
  t$: function() {
    return o
  },
  ut: function() {
    return l
  },
  we: function() {
    return r
  },
  xs: function() {
    return _
  },
  zV: function() {
    return d
  }
});
var r = "top",
  i = "bottom",
  a = "right",
  o = "left",
  s = "auto",
  u = [r, i, a, o],
  c = "start",
  l = "end",
  d = "clippingParents",
  f = "viewport",
  p = "popper",
  h = "reference",
  m = u.reduce(function(e, t) {
    return e.concat([t + "-" + c, t + "-" + l])
  }, []),
  g = [].concat(u, [s]).reduce(function(e, t) {
    return e.concat([t, t + "-" + c, t + "-" + l])
  }, []),
  _ = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]