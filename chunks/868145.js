let n;
r.d(e, {
  Z1: function() {
return R;
  },
  ph: function() {
return I;
  },
  yW: function() {
return c;
  }
});
var _ = r(635602),
  a = r(24716);
t = r.hmd(t);
let i = (0, a.Rf)(),
  o = {
nowSeconds: () => Date.now() / 1000
  },
  E = (0, _.KV)() ? function() {
try {
  return (0, _.l$)(t, 'perf_hooks').performance;
} catch (t) {
  return;
}
  }() : function() {
let {
  performance: t
} = i;
if (!!t && !!t.now)
  return {
    now: () => t.now(),
    timeOrigin: Date.now() - t.now()
  };
  }(),
  s = void 0 === E ? o : {
nowSeconds: () => (E.timeOrigin + E.now()) / 1000
  },
  c = o.nowSeconds.bind(o),
  I = s.nowSeconds.bind(s),
  R = (() => {
let {
  performance: t
} = i;
if (!t || !t.now)
  return;
let e = t.now(),
  r = Date.now(),
  n = t.timeOrigin ? Math.abs(t.timeOrigin + e - r) : 3600000,
  _ = t.timing && t.timing.navigationStart,
  a = 'number' == typeof _ ? Math.abs(_ + e - r) : 3600000;
if (n < 3600000 || a < 3600000)
  return n <= a ? t.timeOrigin : _;
return r;
  })();