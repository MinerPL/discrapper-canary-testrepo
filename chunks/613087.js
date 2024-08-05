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
  l = n(130653),
  i = n(743294);
let c = o.createContext({
registerComponent: () => {},
unregisterComponent: () => {},
animatedComponents: {},
expandedContentRef: o.createRef(),
collapsedContentRef: o.createRef(),
recalculateAnimationPositions: () => {},
animatedComponentProps: [],
expansionSpring: null
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
  expansionSpring: f
} = o.useContext(c), C = o.useRef(null), _ = o.useRef(null), h = o.useContext(l.T);
o.useEffect(() => {
  m();
}, [m]), o.useEffect(() => {
  let e = C.current;
  return null != e && x(e, d, u), () => {
    null != e && g(d, u);
  };
}, [
  d,
  u,
  x,
  g
]);
let E = o.useRef(null),
  S = null !== (n = E.current) && void 0 !== n ? n : document.getElementById(h ? 'quest-bar-v2-preview-' + d : 'quest-bar-v2-' + d);
o.useEffect(() => {
  E.current = S;
}, [
  S,
  h,
  d
]);
let T = null;
return null == S ? T = null : p && null != f ? T = (0, s.jsxs)(s.Fragment, {
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
      children: i(_)
    }), S),
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
      children: i(_)
    }), S)
  ]
}) : 'collapsed' === u && (T = (0, r.createPortal)(i(_), S)), (0, s.jsxs)('div', {
  style: {
    opacity: null == T && 'collapsed' === u ? 1 : 0
  },
  ref: t,
  children: [
    i(C),
    T
  ]
});
  }),
  u = e => {
let {
  children: t,
  expandedContentRef: n,
  collapsedContentRef: r,
  expansionSpring: a
} = e, [l, d] = o.useState({}), [u, p] = o.useState([]), m = o.useCallback((e, t, n) => {
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
  });
}, []), x = o.useCallback((e, t) => {
  d(n => {
    var s;
    let o = null !== (s = n[e]) && void 0 !== s ? s : {
      expanded: null,
      collapsed: null
    };
    return o[t] = null, {
      ...n,
      [e]: o
    };
  });
}, []), g = o.useCallback(() => {
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
    registerComponent: m,
    unregisterComponent: x,
    animatedComponents: l,
    expandedContentRef: n,
    collapsedContentRef: r,
    recalculateAnimationPositions: g,
    animatedComponentProps: u,
    expansionSpring: a
  },
  children: t
});
  };