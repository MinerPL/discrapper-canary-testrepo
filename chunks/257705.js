n.d(t, {
  z: function() {
return u;
  }
}), n(411104);
var r = n(735250),
  i = n(470079),
  a = n(803997),
  s = n.n(a),
  o = n(789978),
  l = n(780900);

function u(e, t) {
  let n = (0, l.G6)(e);
  return i.forwardRef(function(a, u) {
let {
  children: c,
  className: d,
  dir: _ = 'ltr',
  orientation: E = 'vertical',
  paddingFix: f = !0,
  fade: h = !1,
  onScroll: p,
  style: m,
  ...I
} = a, T = i.useRef(null), g = (0, l.tT)({
  paddingFix: f,
  orientation: E,
  dir: _,
  className: d,
  scrollerRef: T,
  specs: n
});
return (0, r.jsx)('div', {
  ref: e => {
    'function' == typeof u ? u(e) : null != u && (u.current = e), T.current = e;
  },
  className: s()(d, {
    [e]: !0,
    [t]: h
  }),
  style: (0, l.uT)(m, E),
  dir: _,
  ...I,
  children: (0, r.jsxs)(o.Jc, {
    containerRef: T,
    children: [
      c,
      g
    ]
  })
});
  });
}