n(411104);
var r, i = n(735250),
  a = n(470079),
  o = n(120356),
  s = n.n(o),
  l = n(223088);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let c = e => new Promise((t, n) => {
  null == e && n(Error('No image src passed'));
  let r = new Image();
  r.src = e, r.onload = () => t(r), r.onerror = e => n(e);
});
class d extends(r = a.PureComponent) {
  componentDidUpdate(e) {
e.src !== this.props.src && this.setState({
  loaded: !1
}, () => this.initialize());
  }
  initialize() {
c(this.props.src).then(() => {
  !this.unmounting && this.setState({
    loaded: !0
  });
});
  }
  componentWillUnmount() {
this.unmounting = !0;
  }
  render() {
let {
  className: e,
  src: t,
  alt: n,
  width: r,
  height: a,
  onLoad: o,
  style: u,
  imageClassName: c
} = this.props, {
  loaded: d
} = this.state;
return (0, i.jsx)('div', {
  className: e,
  style: {
    ...u,
    width: r,
    height: a
  },
  children: (0, i.jsx)('img', {
    className: s()(l.image, c, {
      [l.loaded]: d
    }),
    width: r,
    height: a,
    src: t,
    alt: n,
    onLoad: o
  })
});
  }
  constructor(e) {
super(e), u(this, 'unmounting', !1), u(this, 'state', {
  loaded: !1
}), this.initialize();
  }
}
u(d, 'defaultProps', {
  width: 0,
  height: 0,
  alt: ''
}), t.Z = d;