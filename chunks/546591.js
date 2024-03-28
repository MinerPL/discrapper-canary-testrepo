"use strict";
n.r(t);
var a, s, l, i, r = n("735250"),
  o = n("470079"),
  u = n("803997"),
  d = n.n(u),
  c = n("182493");
class f extends(i = o.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: n,
      className: a,
      forceHover: s,
      ...l
    } = this.props;
    return (0, r.jsxs)("div", {
      ...l,
      className: d()(a, c.hoverRoll, {
        [c.disabled]: null == n,
        [c.forceHover]: s
      }),
      children: [(0, r.jsx)(e, {
        className: c.hovered,
        children: n
      }), (0, r.jsx)(e, {
        className: c.default,
        children: t
      })]
    })
  }
}
l = {
  tag: "div",
  forceHover: !1
}, (s = "defaultProps") in(a = f) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = f