n.d(t, {
  H: function() {
return o;
  },
  x: function() {
return l;
  },
  y: function() {
return a;
  }
}), n(47120);
var r = n(735250),
  i = n(470079);

function a(e) {
  let {
component: t,
children: n,
forceLevel: a
  } = e, o = i.useContext(s), [l, u] = i.useState(null != t), c = 1, d = 1;
  null != a ? null != t ? (c = a, d = a + 1) : d = a : null != t ? (c = o.level, d = o.level + 1) : d = o.level + (l ? 1 : 0);
  let _ = i.useCallback(() => (u(!0), c), [c]),
E = i.useCallback(() => (u(!0), d), [d]);
  return (0, r.jsxs)(r.Fragment, {
children: [
  null != t ? (0, r.jsx)(s.Provider, {
    value: {
      level: c,
      getLevelAndMarkUsed: _
    },
    children: t
  }) : null,
  (0, r.jsx)(s.Provider, {
    value: {
      level: d,
      getLevelAndMarkUsed: E
    },
    children: n
  })
]
  });
}

function o(e) {
  let t = l(),
n = 'h'.concat(Math.min(t, 6));
  return (0, r.jsx)(n, {
...t > 6 ? {
  'data-excessive-heading-level': t
} : {},
...e
  });
}
let s = i.createContext({
  getLevelAndMarkUsed: () => 2,
  level: 2
});

function l() {
  let {
getLevelAndMarkUsed: e
  } = i.useContext(s);
  return e();
}
s.displayName = 'HeadingLevelContext';