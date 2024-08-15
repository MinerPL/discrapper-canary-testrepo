var r, i, a, s, o = n(735250),
  l = n(470079),
  u = n(120356),
  c = n.n(u),
  d = n(481060),
  _ = n(36169);
let E = {
UP: 'up',
RIGHT: 'right',
DOWN: 'down',
LEFT: 'left'
  },
  f = {
[E.UP]: _.up,
[E.RIGHT]: _.right,
[E.DOWN]: _.down,
[E.LEFT]: _.left
  };
class h extends(s = l.PureComponent) {
  render() {
let {
  direction: e,
  className: t
} = this.props;
return (0, o.jsx)(d.ArrowSmallUpIcon, {
  size: 'md',
  color: 'currentColor',
  className: c()(_.__invalid_arrow, t, {
    [f[e]]: !0
  })
});
  }
}
r = h, i = 'Directions', a = E, i in r ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = h;