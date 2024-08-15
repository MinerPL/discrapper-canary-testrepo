var n, a = t(735250),
  i = t(470079),
  r = t(120356),
  o = t.n(r),
  l = t(600164),
  c = t(400778);

function d(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
class _ extends(n = i.PureComponent) {
  render() {
let {
  children: e,
  className: s,
  onMouseEnter: t,
  onMouseLeave: n
} = this.props;
return (0, a.jsx)('div', {
  className: o()(c.card, s),
  onMouseEnter: t,
  onMouseLeave: n,
  children: e
});
  }
}
d(_, 'Header', e => {
  let {
children: s,
className: t,
splashArtURL: n
  } = e;
  return (0, a.jsxs)(l.Z, {
className: o()(c.header, t),
align: l.Z.Align.CENTER,
children: [
  (0, a.jsx)('div', {
    className: c.splashArt,
    style: null != n ? {
      backgroundImage: 'url('.concat(n, ')')
    } : void 0
  }),
  s
]
  });
}), d(_, 'Body', e => {
  let {
children: s,
className: t
  } = e;
  return (0, a.jsx)('div', {
className: o()(c.body, t),
children: s
  });
}), s.Z = _;