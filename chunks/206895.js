i.d(t, {
  n: function() {
return a;
  }
});
var n, a, r = i(735250),
  o = i(470079),
  s = i(120356),
  l = i.n(s),
  c = i(748780),
  d = i(215569),
  u = i(390837);
(n = a || (a = {}))[n.RIGHT = -1] = 'RIGHT', n[n.LEFT = 1] = 'LEFT';
let h = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class _ extends o.PureComponent {
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
  className: u.item,
  children: this.props.children
});
  }
  constructor(e) {
var t, i, n;
super(e), t = this, n = void 0, (i = '_animated') in t ? Object.defineProperty(t, i, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[i] = n, this._animated = new c.Z.Value(-1 * e.direction);
  }
}
t.Z = e => {
  let {
children: t,
step: i,
direction: n,
className: a,
springSettings: o = h,
fadeInOut: s = !1
  } = e;
  return (0, r.jsx)(d.W, {
component: 'div',
className: l()(u.animator, a),
children: (0, r.jsx)(_, {
  direction: n,
  springSettings: o,
  fadeInOut: s,
  children: t
}, i)
  });
};