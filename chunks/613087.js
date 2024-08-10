n.d(t, {
  B$: function() {
return c;
  },
  l7: function() {
return d;
  },
  p: function() {
return u;
  }
}), n(47120), n(653041);
var s = n(735250),
  o = n(470079),
  r = n(699581),
  a = n(338545),
  l = n(393238),
  i = n(743294);
let c = o.createContext({
registerComponent: () => {},
unregisterComponent: () => {},
animatedComponents: {},
expandedContentRef: o.createRef(),
collapsedContentRef: o.createRef(),
recalculateAnimationPositions: () => {},
animatedComponentProps: [],
expansionSpring: null,
mountPoints: new Map()
  }),
  d = o.forwardRef(function(e, t) {
var n;
let {
  children: i,
  id: d,
  inState: u,
  isTextTransition: p = !1
} = e, {
  recalculateAnimationPositions: m,
  registerComponent: x,
  unregisterComponent: g,
  expansionSpring: f,
  mountPoints: C
} = o.useContext(c), _ = o.useRef(null), E = o.useRef(null), h = o.useRef();
o.useEffect(() => {
  m();
}, [m]), o.useLayoutEffect(() => {
  let e = _.current;
  return null != e && x(e, d, u), () => {
    null != e && g(d, u);
  };
}, [
  d,
  u,
  x,
  g
]);
let S = o.useCallback(e => {
  let {
    height: t
  } = e;
  h.current !== t && (m(), h.current = t);
}, [m]);
(0, l.P)(_, S);
let T = null === (n = C.get(d)) || void 0 === n ? void 0 : n.current,
  N = null;
return null == T ? N = null : p && null != f ? N = (0, s.jsxs)(s.Fragment, {
  children: [
    'collapsed' === u && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
      style: {
        position: 'absolute',
        opacity: f.to({
          range: [
            0,
            1
          ],
          output: [
            1,
            0
          ]
        })
      },
      children: i(E)
    }), T),
    'expanded' === u && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
      style: {
        position: 'absolute',
        opacity: f.to({
          range: [
            0,
            1
          ],
          output: [
            0,
            1
          ]
        })
      },
      children: i(E)
    }), T)
  ]
}) : 'collapsed' === u && (N = (0, r.createPortal)(i(E), T)), (0, s.jsxs)('div', {
  style: {
    opacity: null == N && 'collapsed' === u || null == T ? 1 : 0
  },
  ref: t,
  children: [
    i(_),
    N
  ]
});
  }),
  u = e => {
let {
  children: t,
  expandedContentRef: n,
  collapsedContentRef: r,
  expansionSpring: a
} = e, [l, d] = o.useState({}), [u, p] = o.useState([]), [m, x] = o.useState(() => new Map()), g = o.useCallback((e, t, n) => {
  d(s => {
    var o;
    let r = null !== (o = s[t]) && void 0 !== o ? o : {
      expanded: null,
      collapsed: null
    };
    return {
      ...s,
      [t]: {
        ...r,
        [n]: e
      }
    };
  }), x(e => {
    let n = new Map(e);
    return n.set(t, o.createRef()), n;
  });
}, []), f = o.useCallback((e, t) => {
  let n = !1;
  d(s => {
    var o;
    let r = null !== (o = s[e]) && void 0 !== o ? o : {
      expanded: null,
      collapsed: null
    };
    return r[t] = null, n = null == r.expanded && null == r.collapsed, {
      ...s,
      [e]: r
    };
  }), n && x(t => {
    let n = new Map(t);
    return n.delete(e), n;
  });
}, []), C = o.useCallback(() => {
  let e = [];
  for (let t in l) {
    if (null == l[t] || null == n.current || null == r.current)
      continue;
    let s = l[t].collapsed,
      o = l[t].expanded;
    if (null == s || null == o)
      continue;
    let a = o.getBoundingClientRect(),
      c = n.current.getBoundingClientRect(),
      d = s.getBoundingClientRect(),
      u = r.current.getBoundingClientRect(),
      p = a.top - c.top + i.Li,
      m = d.top - u.top,
      x = a.left - c.left + i.Li,
      g = d.left - u.left,
      f = -a.right + c.right + i.Li,
      C = -d.right + u.right;
    e.push({
      id: t,
      collapsedLeft: g,
      expandedLeft: x,
      collapsedRight: C,
      expandedRight: f,
      collapsedTop: m,
      expandedTop: p,
      width: a.width
    });
  }
  p(e);
}, [
  l,
  n,
  r,
  p
]);
return (0, s.jsx)(c.Provider, {
  value: {
    registerComponent: g,
    unregisterComponent: f,
    animatedComponents: l,
    expandedContentRef: n,
    collapsedContentRef: r,
    recalculateAnimationPositions: C,
    animatedComponentProps: u,
    expansionSpring: a,
    mountPoints: m
  },
  children: t
});
  };