"use strict";
n.d(t, {
  ZP: function() {
    return l
  },
  h9: function() {
    return a
  },
  nM: function() {
    return o
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(846519);
let o = r.createContext({
    onPreventIdle: () => null,
    onAllowIdle: () => null,
    onForceIdle: () => null,
    onActive: () => null
  }),
  a = r.createContext(!1);

function l(e) {
  let {
    children: t,
    timeout: n
  } = e, [l, u] = r.useState(!1), _ = r.useRef(new Set), d = r.useRef(null);
  r.useEffect(() => (d.current = new s.sW(n, () => u(!0)), d.current.delay(), () => {
    var e;
    null === (e = d.current) || void 0 === e || e.cancel(), d.current = null
  }), [n]);
  let c = r.useCallback(e => {
      var t;
      u(!1), _.current.add(e), null === (t = d.current) || void 0 === t || t.cancel()
    }, [_, d, u]),
    E = r.useCallback(e => {
      if (_.current.delete(e), 0 === _.current.size) {
        var t;
        null === (t = d.current) || void 0 === t || t.delay()
      }
    }, [_, d]),
    I = r.useCallback(() => {
      if (u(!1), 0 === _.current.size) {
        var e;
        null === (e = d.current) || void 0 === e || e.delay()
      }
    }, [_, d, u]),
    T = r.useCallback(() => {
      var e;
      if (!(_.current.size > 0)) null === (e = d.current) || void 0 === e || e.cancel(), u(!0)
    }, [d, u]),
    h = r.useMemo(() => ({
      onAllowIdle: E,
      onPreventIdle: c,
      onActive: I,
      onForceIdle: T
    }), [E, c, I, T]);
  return (0, i.jsx)(a.Provider, {
    value: l,
    children: (0, i.jsx)(o.Provider, {
      value: h,
      children: t({
        idle: l,
        ...h
      })
    })
  })
}