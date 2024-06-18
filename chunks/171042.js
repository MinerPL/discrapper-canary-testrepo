"use strict";
t(47120);
var n, i, l, a = t(735250),
  r = t(470079),
  o = t(120356),
  c = t.n(o),
  d = t(392711),
  u = t.n(d),
  E = t(82923),
  _ = t(269510);

function I(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}(l = n || (n = {}))[l.HOVERING = 0] = "HOVERING", l[l.FLYING = 1] = "FLYING";
let T = Object.freeze({
  HOVERING: {
    Y_DURATION: 1500,
    Y_VALUE: -5,
    Y_VALUE_MODIFIER: -1,
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY_FALLING: .8,
    FIRE_MAX_INTENSITY_FALLING: 1,
    FIRE_MIN_INTENSITY_RISING: 1,
    FIRE_MAX_INTENSITY_RISING: 1.2
  },
  FALLING: {
    Y_VALUE: 10,
    FIRE_COUNT: 10,
    FIRE_VALUE: .2
  },
  STAGING: {
    DURATION: 500,
    Y_VALUE: 22,
    SHAKE_COUNT: 10,
    SHAKE_INTENSITY: 2,
    FIRE_COUNT: 4,
    FIRE_MIN_INTENSITY: .6,
    FIRE_MAX_INTENSITY: 1
  },
  FLYING: {
    DURATION: 500,
    Y_VALUE: -1e3,
    Y_EASING: E.ZP.Easing.bezier(.46, .01, 1, -.3),
    X_VALUE: 200,
    X_EASING: E.ZP.Easing.bezier(.65, .05, 1, .25),
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY: 1.2,
    FIRE_MAX_INTENSITY: 1.4,
    OPACITY_VALUE: 0,
    OPACITY_DURATION_DIVIDEND: 2
  }
});

function N(e, s, t, n) {
  return E.ZP.sequence(u().times(s, i => E.ZP.timing(e, {
    toValue: n(i),
    duration: t / s
  })))
}
class m extends(i = r.Component) {
  componentDidMount() {
    this.startAnimation()
  }
  componentWillUnmount() {
    this.isUnmounted = !0
  }
  componentDidUpdate(e) {
    this.props.stage !== e.stage && this.startAnimation()
  }
  startAnimation() {
    switch (null != this.currentAnimation && this.currentAnimation.stop(), this.props.stage) {
      case 0:
        return this.startHoverAnimate();
      case 1:
        return this.flyAnimate()
    }
  }
  resetAnimation() {
    this.y.setValue(0), this.x.setValue(0), this.opacity.setValue(1), this.fireScale.setValue(1)
  }
  startHoverAnimate() {
    this.resetAnimation(), this.hoverAnimate(T.HOVERING.Y_VALUE)
  }
  createFireAnimation(e, s, t, n) {
    return N(this.fireScale, e, s, () => u().random(t, n))
  }
  async hoverAnimate(e) {
    var s;
    if (0 !== this.props.stage || this.isUnmounted) return;
    let t = e > 1,
      n = t ? T.HOVERING.FIRE_MIN_INTENSITY_FALLING : T.HOVERING.FIRE_MIN_INTENSITY_RISING,
      i = t ? T.HOVERING.FIRE_MAX_INTENSITY_FALLING : T.HOVERING.FIRE_MAX_INTENSITY_RISING,
      l = this.createFireAnimation(T.HOVERING.FIRE_COUNT, T.HOVERING.Y_DURATION, n, i),
      a = E.ZP.timing(this.y, {
        toValue: e,
        duration: T.HOVERING.Y_DURATION,
        easing: E.ZP.Easing.inOut(E.ZP.Easing.ease)
      });
    this.currentAnimation = E.ZP.parallel([a, l]), await (null === (s = this.currentAnimation) || void 0 === s ? void 0 : s.start()), this.hoverAnimate(e * T.HOVERING.Y_VALUE_MODIFIER)
  }
  createShakeAnimation(e, s, t) {
    return N(this.x, e, s, e => u().random(1, t) * (e % 2 == 0 ? 1 : -1))
  }
  async flyAnimate() {
    var e;
    let s = E.ZP.spring(this.y, {
        toValue: T.FALLING.Y_VALUE,
        overshootClamping: !0
      }),
      t = E.ZP.spring(this.fireScale, {
        toValue: T.FALLING.FIRE_VALUE,
        overshootClamping: !0
      }),
      n = E.ZP.parallel([s, t]),
      i = E.ZP.timing(this.y, {
        toValue: T.STAGING.Y_VALUE,
        duration: T.STAGING.DURATION
      }),
      l = this.createShakeAnimation(T.STAGING.SHAKE_COUNT, T.STAGING.DURATION, T.STAGING.SHAKE_INTENSITY),
      a = this.createFireAnimation(T.STAGING.FIRE_COUNT, T.STAGING.DURATION, T.STAGING.FIRE_MIN_INTENSITY, T.STAGING.FIRE_MAX_INTENSITY),
      r = E.ZP.parallel([i, l, a]),
      o = E.ZP.timing(this.y, {
        toValue: T.FLYING.Y_VALUE,
        duration: T.FLYING.DURATION,
        easing: T.FLYING.Y_EASING
      }),
      c = E.ZP.timing(this.x, {
        toValue: T.FLYING.X_VALUE,
        duration: T.FLYING.DURATION,
        easing: T.FLYING.X_EASING
      }),
      d = E.ZP.timing(this.opacity, {
        toValue: T.FLYING.OPACITY_VALUE,
        duration: T.FLYING.DURATION / T.FLYING.OPACITY_DURATION_DIVIDEND,
        delay: T.FLYING.DURATION / T.FLYING.OPACITY_DURATION_DIVIDEND
      }),
      u = this.createFireAnimation(T.FLYING.FIRE_COUNT, T.FLYING.DURATION, T.FLYING.FIRE_MIN_INTENSITY, T.FLYING.FIRE_MAX_INTENSITY),
      _ = E.ZP.parallel([o, c, d, u]);
    if (this.currentAnimation = E.ZP.sequence([n, r, _]), await (null === (e = this.currentAnimation) || void 0 === e ? void 0 : e.start()), !this.isUnmounted) {
      let {
        onFlyingComplete: e
      } = this.props;
      null != e && e()
    }
  }
  getWumpusStyle() {
    return {
      transform: [{
        translateY: this.y.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }, {
        translateX: this.x.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }],
      opacity: this.opacity
    }
  }
  getFireStyle() {
    return {
      transform: [{
        scale: this.fireScale
      }]
    }
  }
  render() {
    let {
      className: e,
      style: s
    } = this.props;
    return (0, a.jsxs)(E.ZP.div, {
      className: c()(_.animation, e),
      style: {
        ...s,
        ...this.getWumpusStyle()
      },
      children: [(0, a.jsx)("div", {
        className: _.fireTopWrapper,
        children: (0, a.jsx)(E.ZP.div, {
          className: _.fire,
          style: this.getFireStyle()
        })
      }), (0, a.jsx)("div", {
        className: _.fireBottomWrapper,
        children: (0, a.jsx)(E.ZP.div, {
          className: _.fire,
          style: this.getFireStyle()
        })
      }), (0, a.jsx)("div", {
        className: _.wumpus
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "x", new E.ZP.Value(0)), I(this, "y", new E.ZP.Value(0)), I(this, "opacity", new E.ZP.Value(1)), I(this, "fireScale", new E.ZP.Value(1)), I(this, "currentAnimation", null), I(this, "isUnmounted", !1)
  }
}
I(m, "Stages", n), s.Z = m