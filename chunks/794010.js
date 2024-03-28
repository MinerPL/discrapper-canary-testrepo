"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var s, l = n("735250"),
  a = n("470079");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class r extends(s = a.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      eventName: n,
      data: s,
      track: a,
      trackOutboundLink: i,
      ...r
    } = this.props;
    return null == e ? null : (0, l.jsx)(e, {
      ...r,
      onClick: this.handleClick,
      children: t
    })
  }
  constructor(...e) {
    super(...e), i(this, "handleClick", e => {
      let {
        eventName: t,
        data: n,
        href: s,
        onClick: l,
        trackOutboundLink: a,
        track: i
      } = this.props;
      if (n.googleAnalytics && a && (null != s ? a(s) : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")), l && l(e), !t) return !1;
      i(t, n)
    })
  }
}
i(r, "defaultProps", {
  tag: "a",
  data: {}
})