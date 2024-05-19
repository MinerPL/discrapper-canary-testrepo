"use strict";
i.r(t), i.d(t, {
  SlideDirection: function() {
    return a
  }
});
var n, a, l = i("735250"),
  s = i("470079"),
  r = i("120356"),
  o = i.n(r),
  c = i("748780"),
  d = i("215569"),
  u = i("721034");
(n = a || (a = {}))[n.RIGHT = -1] = "RIGHT", n[n.LEFT = 1] = "LEFT";
let h = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class p extends s.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), c.default.spring(this._animated, {
      toValue: 0,
      ...this.props.springSettings
    }).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    c.default.spring(this._animated, {
      toValue: this.props.direction,
      ...this.props.springSettings
    }).start(e)
  }
  getStyle() {
    let e = c.default.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    });
    return this.props.fadeInOut && (e.opacity = this._animated.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0]
    })), e
  }
  render() {
    return (0, l.jsx)(c.default.div, {
      style: this.getStyle(),
      className: u.item,
      children: this.props.children
    })
  }
  constructor(e) {
    var t, i, n;
    super(e), t = this, n = void 0, (i = "_animated") in t ? Object.defineProperty(t, i, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[i] = n, this._animated = new c.default.Value(-1 * e.direction)
  }
}
t.default = e => {
  let {
    children: t,
    step: i,
    direction: n,
    className: a,
    springSettings: s = h,
    fadeInOut: r = !1
  } = e;
  return (0, l.jsx)(d.TransitionGroup, {
    component: "div",
    className: o()(u.animator, a),
    children: (0, l.jsx)(p, {
      direction: n,
      springSettings: s,
      fadeInOut: r,
      children: t
    }, i)
  })
}