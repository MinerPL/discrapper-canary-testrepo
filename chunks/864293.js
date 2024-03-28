"use strict";
n.r(t), n("47120");
var r, s = n("735250"),
  o = n("470079"),
  i = n("803997"),
  a = n.n(i),
  l = n("748780"),
  u = n("481060"),
  d = n("932660");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = {
  friction: 7,
  tension: 60
};
class f extends(r = o.Component) {
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
    t.enabled ? this.animateTo(0).start(e) : l.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
  }
  animateTo(e) {
    return l.default.spring(this.animation, {
      ...h,
      toValue: e
    })
  }
  getAnimatedStyle() {
    let {
      reducedMotion: e
    } = this.context;
    return l.default.accelerate({
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
    return (0, s.jsx)(l.default.div, {
      className: a()(e, d.slider),
      style: this.getAnimatedStyle(),
      children: t
    })
  }
  constructor(...e) {
    super(...e), c(this, "animation", new l.default.Value(0))
  }
}
c(f, "contextType", u.AccessibilityPreferencesContext), t.default = f