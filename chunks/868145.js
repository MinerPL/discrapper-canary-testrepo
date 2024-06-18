"use strict";
let r;
n.d(e, {
  Z1: function() {
    return h
  },
  ph: function() {
    return d
  },
  yW: function() {
    return c
  }
});
var i = n(635602),
  s = n(24716);
t = n.hmd(t);
let a = (0, s.Rf)(),
  o = {
    nowSeconds: () => Date.now() / 1e3
  },
  u = (0, i.KV)() ? function() {
    try {
      return (0, i.l$)(t, "perf_hooks").performance
    } catch (t) {
      return
    }
  }() : function() {
    let {
      performance: t
    } = a;
    if (!!t && !!t.now) return {
      now: () => t.now(),
      timeOrigin: Date.now() - t.now()
    }
  }(),
  l = void 0 === u ? o : {
    nowSeconds: () => (u.timeOrigin + u.now()) / 1e3
  },
  c = o.nowSeconds.bind(o),
  d = l.nowSeconds.bind(l),
  h = (() => {
    let {
      performance: t
    } = a;
    if (!t || !t.now) return;
    let e = t.now(),
      n = Date.now(),
      r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
      i = t.timing && t.timing.navigationStart,
      s = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
    if (r < 36e5 || s < 36e5) return r <= s ? t.timeOrigin : i;
    return n
  })()