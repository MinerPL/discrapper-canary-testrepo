var a, o, r, i, s = n(735250),
  l = n(470079),
  c = n(120356),
  u = n.n(c),
  d = n(481060),
  p = n(780516);
let h = {
UP: 'up',
RIGHT: 'right',
DOWN: 'down',
LEFT: 'left'
  },
  g = {
[h.UP]: p.up,
[h.RIGHT]: p.right,
[h.DOWN]: p.down,
[h.LEFT]: p.left
  };
class f extends(i = l.PureComponent) {
  render() {
let {
  direction: t,
  className: e
} = this.props;
return (0, s.jsx)(d.ArrowSmallUpIcon, {
  size: 'md',
  color: 'currentColor',
  className: u()(p.__invalid_arrow, e, {
    [g[t]]: !0
  })
});
  }
}
a = f, o = 'Directions', r = h, o in a ? Object.defineProperty(a, o, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[o] = r, e.Z = f;