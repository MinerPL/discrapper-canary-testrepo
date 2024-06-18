"use strict";
n.d(t, {
  H: function() {
    return o
  },
  x: function() {
    return l
  },
  y: function() {
    return s
  }
}), n(47120);
var i = n(735250),
  r = n(470079);

function s(e) {
  let {
    component: t,
    children: n,
    forceLevel: s
  } = e, o = r.useContext(a), [l, u] = r.useState(null != t), _ = 1, d = 1;
  null != s ? null != t ? (_ = s, d = s + 1) : d = s : null != t ? (_ = o.level, d = o.level + 1) : d = o.level + (l ? 1 : 0);
  let c = r.useCallback(() => (u(!0), _), [_]),
    E = r.useCallback(() => (u(!0), d), [d]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != t ? (0, i.jsx)(a.Provider, {
      value: {
        level: _,
        getLevelAndMarkUsed: c
      },
      children: t
    }) : null, (0, i.jsx)(a.Provider, {
      value: {
        level: d,
        getLevelAndMarkUsed: E
      },
      children: n
    })]
  })
}

function o(e) {
  let t = l(),
    n = "h".concat(Math.min(t, 6));
  return (0, i.jsx)(n, {
    ...t > 6 ? {
      "data-excessive-heading-level": t
    } : {},
    ...e
  })
}
let a = r.createContext({
  getLevelAndMarkUsed: () => 2,
  level: 2
});

function l() {
  let {
    getLevelAndMarkUsed: e
  } = r.useContext(a);
  return e()
}
a.displayName = "HeadingLevelContext"