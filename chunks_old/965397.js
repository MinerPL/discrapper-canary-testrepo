"use strict";
A.r(t), A.d(t, {
  default: function() {
    return c
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("458960"),
  i = A("77078"),
  o = A("899284");
let d = {
  friction: 7,
  tension: 60
};
class u extends l.Component {
  componentWillAppear(e) {
    this.animateTo(1).start(e)
  }
  componentWillEnter(e) {
    this.animateTo(1).start(e)
  }
  componentWillLeave(e) {
    let {
      reducedMotion: t
    } = this.context;
    t.enabled ? this.animateTo(0).start(e) : s.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
  }
  animateTo(e) {
    return s.default.spring(this.animation, {
      ...d,
      toValue: e
    })
  }
  getAnimatedStyle() {
    let {
      reducedMotion: e
    } = this.context;
    return s.default.accelerate({
      opacity: this.animation,
      transform: e.enabled ? void 0 : [{
        translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["150%", "0%"]
        })
      }]
    })
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, a.jsx)(s.default.div, {
      className: r(e, o.slider),
      style: this.getAnimatedStyle(),
      children: t
    })
  }
  constructor(...e) {
    super(...e), this.animation = new s.default.Value(0)
  }
}
u.contextType = i.AccessibilityPreferencesContext;
var c = u