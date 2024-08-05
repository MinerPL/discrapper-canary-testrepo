var l, s, a, r = t(735250),
  i = t(470079),
  o = t(120356),
  c = t.n(o),
  u = t(285952),
  d = t(115448);

function m(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
(l = s || (s = {})).WRAP = 'wrap', l.STACK = 'stack';
class E extends(a = i.PureComponent) {
  renderChildren() {
let e;
let {
  children: n,
  layout: t,
  columns: l
} = this.props;
switch (t) {
  case 'stack':
    e = '100%';
    break;
  case 'wrap':
    e = ''.concat(1 / l * 100, '%');
}
return n.map((n, t) => (0, r.jsx)(u.Z.Child, {
  className: d.tile,
  basis: e,
  grow: 0,
  children: n
}, t));
  }
  render() {
let {
  className: e
} = this.props;
return (0, r.jsx)(u.Z, {
  className: c()(e, d.grid),
  wrap: u.Z.Wrap.WRAP,
  children: this.renderChildren()
});
  }
}
m(E, 'Layout', s), m(E, 'defaultProps', {
  children: [],
  layout: 'wrap',
  columns: 4
}), n.Z = E;