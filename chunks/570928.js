var t, r, i, a, l = s(735250),
  c = s(470079),
  o = s(120356),
  d = s.n(o),
  u = s(55967);
class h extends(a = c.PureComponent) {
  render() {
let {
  tag: e,
  children: n,
  hoverText: s,
  className: t,
  forceHover: r,
  ...i
} = this.props;
return (0, l.jsxs)('div', {
  ...i,
  className: d()(t, u.hoverRoll, {
    [u.disabled]: null == s,
    [u.forceHover]: r
  }),
  children: [
    (0, l.jsx)(e, {
      className: u.hovered,
      children: s
    }),
    (0, l.jsx)(e, {
      className: u.default,
      children: n
    })
  ]
});
  }
}
i = {
  tag: 'div',
  forceHover: !1
}, (r = 'defaultProps') in(t = h) ? Object.defineProperty(t, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[r] = i, n.Z = h;