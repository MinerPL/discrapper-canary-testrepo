"use strict";
n.r(t), n.d(t, {
  SlideDirection: function() {
    return a
  }
});
var s, a, i = n("735250"),
  r = n("470079"),
  l = n("120356"),
  o = n.n(l),
  d = n("748780"),
  u = n("215569"),
  h = n("424509");
(s = a || (a = {}))[s.RIGHT = -1] = "RIGHT", s[s.LEFT = 1] = "LEFT";
let c = {
  friction: 7,
  tension: 40,
  overshootClamping: !0
};
class p extends r.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), d.default.spring(this._animated, {
      toValue: 0,
      ...c
    }).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    d.default.spring(this._animated, {
      toValue: this.props.direction,
      ...c
    }).start(e)
  }
  getStyle() {
    return d.default.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    })
  }
  render() {
    return (0, i.jsx)(d.default.div, {
      style: this.getStyle(),
      className: h.item,
      children: this.props.children
    })
  }
  constructor(e) {
    var t, n, s;
    super(e), t = this, s = void 0, (n = "_animated") in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this._animated = new d.default.Value(-1 * e.direction)
  }
}
t.default = e => {
  let {
    children: t,
    step: n,
    direction: s,
    className: a
  } = e;
  return (0, i.jsx)(u.TransitionGroup, {
    component: "div",
    className: o()(h.animator, a),
    children: (0, i.jsx)(p, {
      direction: s,
      children: t
    }, n)
  })
}