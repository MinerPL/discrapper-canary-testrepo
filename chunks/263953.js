"use strict";
n.d(t, {
  q: function() {
    return N
  }
}), n(47120);
var i, r, s, o, a, l, u = n(735250),
  _ = n(470079),
  d = n(120356),
  c = n.n(d),
  E = n(748780),
  I = n(215569),
  T = n(186325),
  h = n(470475);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = i || (i = {}))[a.ENTERING = 0] = "ENTERING", a[a.LEAVING = 1] = "LEAVING", a[a.APPEARING = 2] = "APPEARING", a[a.STATIC = 3] = "STATIC", (l = r || (r = {})).SLIDE = "slide", l.LIFT = "lift";
class f extends(s = _.PureComponent) {
  componentDidMount() {
    if (null != this._measureRef.current) {
      let {
        height: e
      } = this._measureRef.current.getBoundingClientRect();
      this.setState({
        targetHeight: e,
        baseHeight: this.props.getBaseHeight()
      })
    }
  }
  componentDidUpdate(e, t) {
    t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight)
  }
  componentWillAppear(e) {
    this.setState({
      animationState: 2
    }), e()
  }
  componentDidAppear() {
    let {
      animationProgress: e,
      targetHeight: t
    } = this.state;
    e.setValue(2), this.setState({
      animationState: 3,
      baseHeight: t
    })
  }
  componentWillEnter(e) {
    let {
      duration: t
    } = this.props, {
      animationProgress: n
    } = this.state;
    this.setState({
      animationState: 0
    }), this.props.setHeight(this.state.targetHeight), E.Z.timing(n, {
      toValue: 2,
      duration: t,
      delay: t / 2
    }).start(e)
  }
  componentDidEnter() {
    this.setState({
      animationState: 3
    })
  }
  componentWillLeave(e) {
    let {
      animationProgress: t
    } = this.state, {
      duration: n,
      getDirection: i
    } = this.props;
    this.direction = i(), this.setState({
      animationState: 1
    }), E.Z.timing(t, {
      toValue: 0,
      duration: n
    }).start(e)
  }
  componentDidLeave() {
    this.setState({
      animationState: 3
    })
  }
  getMotionAnimation() {
    let {
      reducedMotion: e
    } = this.context;
    if (e.enabled) return null;
    let {
      animationMotionType: t
    } = this.props, {
      animationProgress: n,
      animationState: i
    } = this.state, r = (1 === i ? -1 : 1) * this.direction;
    switch (t) {
      case "slide":
        return {
          transform: [{
            translateX: n.interpolate({
              inputRange: [0, 2],
              outputRange: ["".concat(150 * r, "%"), "0%"],
              extrapolate: "clamp",
              easing: E.Z.Easing.inOut(E.Z.Easing.ease)
            })
          }]
        };
      case "lift":
        return {
          transform: [{
            translateY: n.interpolate({
              inputRange: [0, 2],
              outputRange: ["".concat(10 * r, "%"), "0%"],
              extrapolate: "clamp",
              easing: E.Z.Easing.inOut(E.Z.Easing.ease)
            })
          }]
        };
      default:
        return null
    }
  }
  getAnimatedStyle() {
    var e, t;
    let {
      fillParent: n
    } = this.props, {
      animationProgress: i,
      animationState: r,
      baseHeight: s,
      targetHeight: o
    } = this.state, a = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0, l = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0, u = 1 === r, _ = 0 === r;
    return {
      overflow: _ || u ? "hidden" : "visible",
      position: u ? "absolute" : void 0,
      top: u ? l : void 0,
      left: u ? a : void 0,
      right: u ? a : void 0,
      bottom: u ? l : void 0,
      ...this.getMotionAnimation(),
      opacity: i.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1],
        extrapolate: "clamp",
        easing: E.Z.Easing.inOut(E.Z.Easing.ease)
      }),
      height: _ ? i.interpolate({
        inputRange: [0, 1],
        outputRange: [s, o],
        extrapolate: "clamp",
        easing: E.Z.Easing.inOut(E.Z.Easing.ease)
      }) : n ? "100%" : "auto"
    }
  }
  render() {
    let {
      fillParent: e,
      className: t,
      animatedNodeClassName: n,
      staticClassName: i
    } = this.props, {
      animationState: r
    } = this.state;
    return e ? (0, u.jsx)("div", {
      ref: this._measureRef,
      className: c()(h.measurementFill, t, {
        [c()(h.measurementFillStatic, i)]: 3 === r
      }),
      children: (0, u.jsx)(E.Z.div, {
        className: c()(h.animatedNode, n),
        style: this.getAnimatedStyle(),
        children: this.props.children
      })
    }) : (0, u.jsx)("div", {
      ref: this._measureRef,
      className: c()(h.measurement, t),
      children: (0, u.jsx)(E.Z.div, {
        className: c()(h.animatedNode, n),
        style: this.getAnimatedStyle(),
        children: this.props.children
      })
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      animationProgress: new E.Z.Value(0),
      targetHeight: 0,
      baseHeight: 0,
      animationState: null
    }), S(this, "direction", this.props.getDirection()), S(this, "_measureRef", _.createRef())
  }
}
S(f, "contextType", T.S), S(f, "defaultProps", {
  duration: 300
});
class N extends(o = _.Component) {
  componentDidMount() {
    this.setPrevSteps()
  }
  componentDidUpdate() {
    this.setPrevSteps()
  }
  setPrevSteps() {
    let {
      step: e,
      steps: t
    } = this.props;
    this.prevStep = e, this.prevSteps = t
  }
  render() {
    let {
      step: e,
      className: t,
      innerClassName: n,
      animatedNodeClassName: i,
      staticClassName: r,
      sideMargin: s,
      verticalMargin: o,
      children: a,
      fillParent: l,
      animationMotionType: _
    } = this.props;
    return (0, u.jsx)(I.W, {
      component: "div",
      className: c()(h.transitionGroup, t),
      children: (0, u.jsx)(f, {
        fillParent: l,
        sideMargin: s,
        animationMotionType: null != _ ? _ : "slide",
        verticalMargin: o,
        getDirection: this.getDirection,
        getBaseHeight: this.getBaseHeight,
        className: n,
        animatedNodeClassName: i,
        staticClassName: r,
        setHeight: this.setHeight,
        children: a
      }, "".concat(e))
    })
  }
  constructor(...e) {
    super(...e), S(this, "stepHeights", {}), S(this, "prevStep", null), S(this, "prevSteps", []), S(this, "getBaseHeight", () => null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0), S(this, "getDirection", () => {
      let {
        steps: e,
        step: t
      } = this.props, n = null != this.prevStep ? e.indexOf(this.prevStep) : -1, i = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
      return Math.max(n, i) > e.indexOf(t) ? -1 : 1
    }), S(this, "setHeight", e => {
      let {
        step: t
      } = this.props;
      this.stepHeights[t] = e
    })
  }
}
S(N, "defaultProps", {
  fillParent: !1,
  animationMotionType: "slide"
})