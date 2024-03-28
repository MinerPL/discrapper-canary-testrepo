"use strict";
s.r(t), s.d(t, {
  SlideDirection: function() {
    return l
  }
});
var a, l, n = s("735250"),
  i = s("470079"),
  r = s("803997"),
  o = s.n(r),
  d = s("748780"),
  u = s("215569"),
  c = s("756334");
(a = l || (l = {}))[a.RIGHT = -1] = "RIGHT", a[a.LEFT = 1] = "LEFT";
let E = {
  friction: 10,
  tension: 40,
  overshootClamping: !0
};
class _ extends i.PureComponent {
  componentWillEnter(e) {
    var t, s;
    null === (t = (s = this.props).onAnimationStart) || void 0 === t || t.call(s), this._animated.setValue(-this.props.direction), d.default.spring(this._animated, {
      toValue: 0,
      ...E
    }).start(() => {
      var t, s;
      e(), null === (t = (s = this.props).onAnimationEnd) || void 0 === t || t.call(s)
    })
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    d.default.spring(this._animated, {
      toValue: this.props.direction,
      ...E
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
    return (0, n.jsx)(d.default.div, {
      style: this.getStyle(),
      className: c.item,
      children: this.props.children
    })
  }
  constructor(e) {
    var t, s, a;
    super(e), t = this, a = void 0, (s = "_animated") in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a, this._animated = new d.default.Value(-1 * e.direction)
  }
}
t.default = e => {
  let {
    children: t,
    step: s,
    direction: a,
    className: l,
    onAnimationStart: i,
    onAnimationEnd: r
  } = e;
  return (0, n.jsx)(u.TransitionGroup, {
    component: "div",
    className: o()(c.animator, l),
    children: (0, n.jsx)(_, {
      direction: a,
      onAnimationStart: i,
      onAnimationEnd: r,
      children: t
    }, s)
  })
}