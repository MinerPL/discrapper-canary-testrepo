"use strict";
t.d(s, {
  n: function() {
    return i
  }
});
var n, i, l = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(748780),
  d = t(215569),
  u = t(328207);
(n = i || (i = {}))[n.RIGHT = -1] = "RIGHT", n[n.LEFT = 1] = "LEFT";
let E = {
  friction: 10,
  tension: 40,
  overshootClamping: !0
};
class _ extends a.PureComponent {
  componentWillEnter(e) {
    var s, t;
    null === (s = (t = this.props).onAnimationStart) || void 0 === s || s.call(t), this._animated.setValue(-this.props.direction), c.Z.spring(this._animated, {
      toValue: 0,
      ...E
    }).start(() => {
      var s, t;
      e(), null === (s = (t = this.props).onAnimationEnd) || void 0 === s || s.call(t)
    })
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    c.Z.spring(this._animated, {
      toValue: this.props.direction,
      ...E
    }).start(e)
  }
  getStyle() {
    return c.Z.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    })
  }
  render() {
    return (0, l.jsx)(c.Z.div, {
      style: this.getStyle(),
      className: u.item,
      children: this.props.children
    })
  }
  constructor(e) {
    var s, t, n;
    super(e), s = this, n = void 0, (t = "_animated") in s ? Object.defineProperty(s, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : s[t] = n, this._animated = new c.Z.Value(-1 * e.direction)
  }
}
s.Z = e => {
  let {
    children: s,
    step: t,
    direction: n,
    className: i,
    onAnimationStart: a,
    onAnimationEnd: r
  } = e;
  return (0, l.jsx)(d.W, {
    component: "div",
    className: o()(u.animator, i),
    children: (0, l.jsx)(_, {
      direction: n,
      onAnimationStart: a,
      onAnimationEnd: r,
      children: s
    }, t)
  })
}