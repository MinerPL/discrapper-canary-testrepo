"use strict";
n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(748780),
  u = n(481060),
  _ = n(981631),
  d = n(265835);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends(i = s.Component) {
  componentDidMount() {
    this.props.show && this.animate(1)
  }
  componentDidUpdate(e) {
    e.show !== this.props.show && this.animate(this.props.show ? 1 : 0)
  }
  getAnimatedStyle() {
    let {
      anim: e
    } = this, {
      reducedMotion: t
    } = this.context;
    return {
      opacity: e,
      transform: t.enabled ? void 0 : [{
        translateY: e.interpolate({
          inputRange: [0, 1],
          outputRange: ["-100px", "0px"]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  render() {
    return (0, r.jsx)(l.Z.a, {
      href: _.Z5c.INDEX,
      target: "_blank",
      rel: "noopener",
      className: a()(d.logo, this.props.className),
      style: this.getAnimatedStyle()
    })
  }
  constructor(...e) {
    super(...e), c(this, "anim", new l.Z.Value(0)), c(this, "animate", e => {
      l.Z.spring(this.anim, {
        toValue: e,
        friction: 10,
        tension: 100
      }).start()
    })
  }
}
c(E, "contextType", u.AccessibilityPreferencesContext)