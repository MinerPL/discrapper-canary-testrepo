"use strict";
n.r(t), n("47120");
var s, i = n("735250"),
  a = n("470079"),
  l = n("846519");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends(s = a.Component) {
  static getDerivedStateFromProps(e) {
    return e.disable ? {
      hovered: !1
    } : null
  }
  componentDidMount() {
    let {
      pauseOnHover: e,
      disable: t
    } = this.props, n = this.state.hovered && e;
    !t && !n && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let n, s, i, a, {
      props: l
    } = this;
    let r = (n = l, s = this.state, !n.disable && !(s.hovered && n.pauseOnHover));
    let u = (i = e, a = t, !i.disable && !(a.hovered && i.pauseOnHover));
    r && !u || e.interval !== l.interval ? this.startTimer() : !r && u && this.stopTimer()
  }
  startTimer() {
    let {
      interval: e,
      onInterval: t,
      disable: n
    } = this.props;
    !n && this.timer.start(e, () => {
      t()
    })
  }
  stopTimer() {
    this.timer.stop()
  }
  render() {
    let {
      children: e,
      className: t,
      disable: n
    } = this.props, s = n ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, i.jsx)("div", {
      ...s,
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), r(this, "timer", new l.Interval), r(this, "state", {
      hovered: !1
    }), r(this, "handlePause", () => {
      !this.state.hovered && this.setState({
        hovered: !0
      })
    }), r(this, "handleResume", () => {
      this.setState({
        hovered: !1
      })
    })
  }
}
r(u, "defaultProps", {
  disable: !1,
  pauseOnHover: !1
}), t.default = u