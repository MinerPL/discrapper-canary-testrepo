n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(434650),
  o = n(393903),
  c = n(353093),
  d = n(979264),
  u = n(24823);
t.Z = a.memo(function(e) {
  let {
children: t,
isOverlay: n,
contextGuildId: l,
...h
  } = e, p = a.useRef(null), [m, _] = a.useState({
maskImage: 'none'
  }), f = a.useCallback(() => {
var e, t;
if (n) {
  _({
    maskImage: 'none'
  });
  return;
}
let i = null === (e = E.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
  a = null === (t = p.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
if (null == i || null == a) {
  _({
    maskImage: 'none'
  });
  return;
}
let l = a.right - i.right,
  s = a.width - l;
if (s > a.width) {
  _({
    maskImage: 'none'
  });
  return;
}
_({
  maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(s, 'px)')
});
  }, []), E = (0, o.y)(f), C = (0, c.p0)(h.userId, l);
  a.useEffect(() => {
if (null != E.current)
  f();
  }, [C]);
  let g = (0, r.O)(f);
  return (0, i.jsxs)('div', {
className: s()(u.container, n && u.isOverlayContainer),
ref: E,
children: [
  (0, i.jsx)('div', {
    className: u.usernameContainer,
    children: t
  }),
  (0, i.jsx)('div', {
    className: u.chipletParent,
    ref: g,
    children: (0, i.jsx)('span', {
      className: s()(u.chipletContainer, !C && n && u.noPadding),
      ref: p,
      style: m,
      children: (0, i.jsx)(d.ZP, {
        ...h,
        contextGuildId: l,
        className: s()(h.className, n && u.isOverlayTag)
      })
    })
  })
]
  });
});