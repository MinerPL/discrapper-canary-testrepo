"use strict";
i.r(t), i.d(t, {
  getMinCounterWidth: function() {
    return f
  },
  default: function() {
    return o
  }
});
var n, a, l, o, s = i("37983"),
  r = i("884691"),
  u = i("917351"),
  c = i.n(u),
  d = i("458960"),
  h = i("471671");

function m(e, t) {
  return {
    toValue: e,
    duration: null != t ? t : 300,
    easing: d.default.Easing.inOut(d.default.Easing.back())
  }
}

function f(e, t, i) {
  if (null != t) {
    let n = Math.ceil(Math.log10(e + 1));
    return null != i && i > 0 ? Math.min(n, i) * t : n * t
  }
}(n = l || (l = {}))[n.ABOVE = 0] = "ABOVE", n[n.VISIBLE = 1] = "VISIBLE", n[n.BELOW = 2] = "BELOW", (a = class extends r.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      prevValue: i,
      currValue: n,
      nextValue: a
    } = t;
    return null == i && n !== e.value ? {
      prevValue: h.default.isFocused() ? n : null,
      currValue: e.value
    } : null != a && a !== e.value ? {
      nextValue: e.value
    } : null
  }
  componentDidUpdate(e, t) {
    let {
      prevValue: i,
      currValue: n
    } = this.state;
    i !== t.prevValue && null != i && this.animateBetween(i, n)
  }
  animateBetween(e, t) {
    let i;
    let {
      forcePosition: n,
      animationSpeed: a
    } = this.props;
    this.prevAnimate.setValue(1), null != n ? 0 === n ? (this.currAnimate.setValue(0), i = 2) : 2 === n && (this.currAnimate.setValue(2), i = 0) : e > t ? (this.currAnimate.setValue(0), i = 2) : (this.currAnimate.setValue(2), i = 0), d.default.parallel([d.default.timing(this.prevAnimate, m(i, a)), d.default.timing(this.currAnimate, m(1, a))]).start(this.animateNext)
  }
  getAnimatedStyle(e) {
    let {
      animationColor: t
    } = this.props;
    return {
      transform: [{
        translateY: e.interpolate({
          inputRange: [0, 1, 2],
          outputRange: ["-100%", "0%", "100%"]
        })
      }],
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      ...null != t && {
        color: t
      }
    }
  }
  getMinWidth(e) {
    let {
      digitWidth: t,
      padStartLength: i
    } = this.props;
    return f(e, t, i)
  }
  padValue(e) {
    let {
      padStartLength: t
    } = this.props;
    return null != t ? String(e).padStart(t, "0") : e
  }
  render() {
    let {
      prevValue: e,
      currValue: t
    } = this.state, {
      color: i,
      formatString: n
    } = this.props, a = c.omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
    if (null == e) return (0, s.jsx)("div", {
      ...a,
      style: {
        color: i,
        minWidth: this.getMinWidth(t)
      },
      children: null != n ? n(this.padValue(t)) : this.padValue(t)
    });
    let l = Math.max(e, t);
    return (0, s.jsxs)("div", {
      ...a,
      style: {
        color: i,
        position: "relative",
        overflow: "hidden"
      },
      children: [(0, s.jsx)("div", {
        style: {
          visibility: "hidden",
          minWidth: this.getMinWidth(l)
        },
        children: this.padValue(l)
      }), (0, s.jsx)(d.default.div, {
        style: {
          color: i,
          ...this.getAnimatedStyle(this.prevAnimate)
        },
        children: null != n ? n(this.padValue(e)) : this.padValue(e)
      }), (0, s.jsx)(d.default.div, {
        style: {
          color: i,
          ...this.getAnimatedStyle(this.currAnimate)
        },
        children: null != n ? n(this.padValue(t)) : this.padValue(t)
      })]
    })
  }
  constructor(e) {
    super(e), this.animateNext = () => {
      let {
        currValue: e,
        nextValue: t
      } = this.state;
      null != t ? this.setState({
        prevValue: h.default.isFocused() ? e : null,
        currValue: t,
        nextValue: null
      }) : this.setState({
        prevValue: null
      })
    }, this.state = {
      prevValue: null,
      currValue: e.value,
      nextValue: null
    }, this.prevAnimate = new d.default.Value(0), this.currAnimate = new d.default.Value(1)
  }
}).Positions = l, o = a