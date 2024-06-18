"use strict";
n.d(t, {
  Ie: function() {
    return c
  },
  JA: function() {
    return d
  },
  OP: function() {
    return T
  },
  SJ: function() {
    return S
  },
  bG: function() {
    return f
  },
  eg: function() {
    return I
  },
  l2: function() {
    return h
  },
  mh: function() {
    return E
  },
  qB: function() {
    return _
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(25441),
  o = n(536895),
  a = n(260866);
let l = {
    id: "NO_LIST",
    onKeyDown() {},
    orientation: o.hy.VERTICAL,
    ref: r.createRef(),
    tabIndex: -1
  },
  u = r.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  _ = r.createContext(l);

function d(e) {
  let [t, n] = r.useState(-1), {
    id: i,
    setFocus: o
  } = r.useContext(u), l = r.useCallback(() => o(e), [e, o]);
  return r.useLayoutEffect(() => (0, s.N)(i, (t, i) => {
    n(i && t === e ? 0 : -1)
  }), [e, i]), {
    role: "listitem",
    [a.ie]: (0, a.jb)(i, e),
    tabIndex: t,
    onFocus: l
  }
}

function c(e) {
  return {
    ...d(e),
    role: "treeitem"
  }
}

function E(e) {
  let {
    children: t,
    id: n
  } = e;
  return t(d(n))
}

function I() {
  return r.useContext(_).ref
}

function T() {
  let {
    id: e,
    onKeyDown: t,
    ref: n,
    tabIndex: i
  } = r.useContext(_);
  return {
    role: "list",
    tabIndex: i,
    [a.kn]: e,
    onKeyDown: t,
    ref: n
  }
}

function h(e) {
  let {
    id: t,
    containerProps: {
      onKeyDown: n,
      ref: i,
      tabIndex: r
    },
    orientation: s
  } = e;
  return {
    role: "list",
    onKeyDown: n,
    ref: i,
    [a.kn]: t,
    tabIndex: r
  }
}

function S(e) {
  let {
    children: t
  } = e;
  return t(T())
}

function f(e) {
  let {
    children: t,
    navigator: n
  } = e, {
    id: s,
    setFocus: o,
    containerProps: {
      onKeyDown: a,
      ref: l,
      tabIndex: d
    },
    orientation: c
  } = n, E = r.useMemo(() => ({
    id: s,
    setFocus: o
  }), [s, o]), I = r.useMemo(() => ({
    onKeyDown: a,
    orientation: c,
    ref: l,
    id: s,
    tabIndex: d
  }), [a, c, l, s, d]);
  return (0, i.jsxs)(_.Provider, {
    value: I,
    children: [(0, i.jsx)(u.Provider, {
      value: E,
      children: t
    }), " "]
  })
}