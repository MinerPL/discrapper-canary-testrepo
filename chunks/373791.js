"use strict";
a.r(t), a("47120");
var l, s = a("735250"),
  n = a("470079"),
  i = a("392711"),
  o = a.n(i),
  r = a("55935"),
  u = a("689938");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let c = () => [u.default.Messages.COUNTDOWN_UNITS_SECONDS, u.default.Messages.COUNTDOWN_UNITS_MINUTES, u.default.Messages.COUNTDOWN_UNITS_HOURS, u.default.Messages.COUNTDOWN_UNITS_DAYS];
class f extends(l = n.PureComponent) {
  componentDidMount() {
    let {
      intervalDuration: e,
      onInterval: t
    } = this.props;
    this._interval = setInterval(() => {
      this.forceUpdate(), null == t || t()
    }, e)
  }
  componentWillUnmount() {
    null != this._interval && clearInterval(this._interval)
  }
  defaultRender(e) {
    let {
      showDays: t,
      showUnits: a,
      className: l
    } = this.props, n = [e.days, e.hours, e.minutes, e.seconds], i = c();
    if (0 === e.days) n.shift();
    else if (!t) {
      let e = n.shift();
      n[0] += 24 * e
    }
    let r = o()(n).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !a ? ":" : " ", (0, s.jsxs)("span", {
      children: [e, a ? i[n.length - t - 1] : null]
    }, t)]).flatten().value();
    return (0, s.jsx)("span", {
      className: l,
      children: r
    })
  }
  render() {
    let {
      deadline: e,
      children: t,
      className: a,
      stopAtOneSec: l
    } = this.props;
    if (e === 1 / 0) return (0, s.jsx)("span", {
      className: a,
      "aria-label": u.default.Messages.MAX_AGE_NEVER,
      children: "∞"
    });
    let n = (0, r.diffAsUnits)(Date.now(), e, l);
    return null != t ? t(n, this.defaultRender.bind(this, n)) : this.defaultRender(n)
  }
  constructor(...e) {
    super(...e), d(this, "_interval", void 0)
  }
}
d(f, "defaultProps", {
  showDays: !0,
  showUnits: !1,
  stopAtOneSec: !1,
  intervalDuration: 1e3
}), t.default = f