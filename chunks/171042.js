"use strict";
s.r(t), s("47120");
var a, l, n, i = s("735250"),
  r = s("470079"),
  o = s("803997"),
  d = s.n(o),
  u = s("392711"),
  c = s.n(u),
  E = s("82923"),
  _ = s("616067");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = a || (a = {}))[n.HOVERING = 0] = "HOVERING", n[n.FLYING = 1] = "FLYING";
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
    Y_EASING: E.default.Easing.bezier(.46, .01, 1, -.3),
    X_VALUE: 200,
    X_EASING: E.default.Easing.bezier(.65, .05, 1, .25),
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY: 1.2,
    FIRE_MAX_INTENSITY: 1.4,
    OPACITY_VALUE: 0,
    OPACITY_DURATION_DIVIDEND: 2
  }
});

function S(e, t, s, a) {
  return E.default.sequence(c().times(t, l => E.default.timing(e, {
    toValue: a(l),
    duration: s / t
  })))
}
class f extends(l = r.Component) {
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
  createFireAnimation(e, t, s, a) {
    return S(this.fireScale, e, t, () => c().random(s, a))
  }
  async hoverAnimate(e) {
    if (0 !== this.props.stage || this.isUnmounted) return;
    let t = e > 1,
      s = t ? T.HOVERING.FIRE_MIN_INTENSITY_FALLING : T.HOVERING.FIRE_MIN_INTENSITY_RISING,
      a = t ? T.HOVERING.FIRE_MAX_INTENSITY_FALLING : T.HOVERING.FIRE_MAX_INTENSITY_RISING,
      l = this.createFireAnimation(T.HOVERING.FIRE_COUNT, T.HOVERING.Y_DURATION, s, a),
      n = E.default.timing(this.y, {
        toValue: e,
        duration: T.HOVERING.Y_DURATION,
        easing: E.default.Easing.inOut(E.default.Easing.ease)
      });
    this.currentAnimation = E.default.parallel([n, l]), await this.currentAnimation.start(), this.hoverAnimate(e * T.HOVERING.Y_VALUE_MODIFIER)
  }
  createShakeAnimation(e, t, s) {
    return S(this.x, e, t, e => c().random(1, s) * (e % 2 == 0 ? 1 : -1))
  }
  async flyAnimate() {
    let e = E.default.spring(this.y, {
        toValue: T.FALLING.Y_VALUE,
        overshootClamping: !0
      }),
      t = E.default.spring(this.fireScale, {
        toValue: T.FALLING.FIRE_VALUE,
        overshootClamping: !0
      }),
      s = E.default.parallel([e, t]),
      a = E.default.timing(this.y, {
        toValue: T.STAGING.Y_VALUE,
        duration: T.STAGING.DURATION
      }),
      l = this.createShakeAnimation(T.STAGING.SHAKE_COUNT, T.STAGING.DURATION, T.STAGING.SHAKE_INTENSITY),
      n = this.createFireAnimation(T.STAGING.FIRE_COUNT, T.STAGING.DURATION, T.STAGING.FIRE_MIN_INTENSITY, T.STAGING.FIRE_MAX_INTENSITY),
      i = E.default.parallel([a, l, n]),
      r = E.default.timing(this.y, {
        toValue: T.FLYING.Y_VALUE,
        duration: T.FLYING.DURATION,
        easing: T.FLYING.Y_EASING
      }),
      o = E.default.timing(this.x, {
        toValue: T.FLYING.X_VALUE,
        duration: T.FLYING.DURATION,
        easing: T.FLYING.X_EASING
      }),
      d = E.default.timing(this.opacity, {
        toValue: T.FLYING.OPACITY_VALUE,
        duration: T.FLYING.DURATION / T.FLYING.OPACITY_DURATION_DIVIDEND,
        delay: T.FLYING.DURATION / T.FLYING.OPACITY_DURATION_DIVIDEND
      }),
      u = this.createFireAnimation(T.FLYING.FIRE_COUNT, T.FLYING.DURATION, T.FLYING.FIRE_MIN_INTENSITY, T.FLYING.FIRE_MAX_INTENSITY),
      c = E.default.parallel([r, o, d, u]);
    if (this.currentAnimation = E.default.sequence([s, i, c]), await this.currentAnimation.start(), !this.isUnmounted) {
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
      style: t
    } = this.props;
    return (0, i.jsxs)(E.default.div, {
      className: d()(_.animation, e),
      style: {
        ...t,
        ...this.getWumpusStyle()
      },
      children: [(0, i.jsx)("div", {
        className: _.fireTopWrapper,
        children: (0, i.jsx)(E.default.div, {
          className: _.fire,
          style: this.getFireStyle()
        })
      }), (0, i.jsx)("div", {
        className: _.fireBottomWrapper,
        children: (0, i.jsx)(E.default.div, {
          className: _.fire,
          style: this.getFireStyle()
        })
      }), (0, i.jsx)("div", {
        className: _.wumpus
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "x", new E.default.Value(0)), I(this, "y", new E.default.Value(0)), I(this, "opacity", new E.default.Value(1)), I(this, "fireScale", new E.default.Value(1)), I(this, "currentAnimation", null), I(this, "isUnmounted", !1)
  }
}
I(f, "Stages", a), t.default = f