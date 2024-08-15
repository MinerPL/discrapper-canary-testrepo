n.d(t, {
  n: function() {
return a;
  }
});
var s, a, r = n(735250),
  i = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(748780),
  d = n(215569),
  _ = n(607131);
(s = a || (a = {}))[s.RIGHT = -1] = 'RIGHT', s[s.LEFT = 1] = 'LEFT';
let u = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class E extends i.PureComponent {
  componentWillEnter(e) {
this._animated.setValue(-this.props.direction), c.Z.spring(this._animated, {
  toValue: 0,
  ...this.props.springSettings
}).start(e);
  }
  componentDidAppear() {
this._animated.setValue(0);
  }
  componentWillLeave(e) {
c.Z.spring(this._animated, {
  toValue: this.props.direction,
  ...this.props.springSettings
}).start(e);
  }
  getStyle() {
let e = c.Z.accelerate({
  transform: [{
    translateX: this._animated.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        '0%',
        '-100%'
      ]
    })
  }]
});
return this.props.fadeInOut && (e.opacity = this._animated.interpolate({
  inputRange: [
    -1,
    0,
    1
  ],
  outputRange: [
    0,
    1,
    0
  ]
})), e;
  }
  render() {
return (0, r.jsx)(c.Z.div, {
  style: this.getStyle(),
  className: _.item,
  children: this.props.children
});
  }
  constructor(e) {
var t, n, s;
super(e), t = this, s = void 0, (n = '_animated') in t ? Object.defineProperty(t, n, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = s, this._animated = new c.Z.Value(-1 * e.direction);
  }
}
t.Z = e => {
  let {
children: t,
step: n,
direction: s,
className: a,
springSettings: i = u,
fadeInOut: l = !1
  } = e;
  return (0, r.jsx)(d.W, {
component: 'div',
className: o()(_.animator, a),
children: (0, r.jsx)(E, {
  direction: s,
  springSettings: i,
  fadeInOut: l,
  children: t
}, n)
  });
};