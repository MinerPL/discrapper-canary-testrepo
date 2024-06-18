"use strict";
n.d(t, {
  Gt: function() {
    return _
  },
  ZP: function() {
    return c
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(348327),
  o = n.n(s),
  a = n(392711),
  l = n.n(a);
let u = r.createContext([]);

function _(e) {
  let {
    children: t,
    value: n
  } = e;
  return (0, i.jsx)(u.Provider, {
    value: n,
    children: t
  })
}

function d(e, t) {
  return 0 === t.length ? e : [...e, ...l().flatten(t)]
}

function c() {
  for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
  let [s, a] = r.useState(n), l = r.useContext(u), _ = r.useMemo(() => d(l, s), [s, l]), c = r.useMemo(() => d(l, s.slice(0, s.length - 1)), [s, l]);
  return r.useEffect(() => {
    !o()(n, s) && a(n)
  }, [n]), {
    analyticsLocations: _,
    sourceAnalyticsLocations: c,
    newestAnalyticsLocation: null !== (e = _[_.length - 1]) && void 0 !== e ? e : null
  }
}