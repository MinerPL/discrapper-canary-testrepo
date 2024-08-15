n.d(t, {
  n: function() {
return a;
  }
});
var s, a, i = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(748780),
  d = n(215569),
  u = n(572599);
(s = a || (a = {}))[s.RIGHT = -1] = 'RIGHT', s[s.LEFT = 1] = 'LEFT';
let _ = {
  friction: 10,
  tension: 40,
  overshootClamping: !0
};
class I extends r.PureComponent {
  componentWillEnter(e) {
var t, n;
null === (t = (n = this.props).onAnimationStart) || void 0 === t || t.call(n), this._animated.setValue(-this.props.direction), c.Z.spring(this._animated, {
  toValue: 0,
  ..._
}).start(() => {
  var t, n;
  e(), null === (t = (n = this.props).onAnimationEnd) || void 0 === t || t.call(n);
});
  }
  componentDidAppear() {
this._animated.setValue(0);
  }
  componentWillLeave(e) {
c.Z.spring(this._animated, {
  toValue: this.props.direction,
  ..._
}).start(e);
  }
  getStyle() {
return c.Z.accelerate({
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
  }
  render() {
return (0, i.jsx)(c.Z.div, {
  style: this.getStyle(),
  className: u.item,
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
onAnimationStart: r,
onAnimationEnd: l
  } = e;
  return (0, i.jsx)(d.W, {
component: 'div',
className: o()(u.animator, a),
children: (0, i.jsx)(I, {
  direction: s,
  onAnimationStart: r,
  onAnimationEnd: l,
  children: t
}, n)
  });
};