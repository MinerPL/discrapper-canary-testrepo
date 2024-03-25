"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("744377");
class o extends s.PureComponent {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: n,
      className: s,
      forceHover: l,
      ...o
    } = this.props;
    return (0, a.jsxs)("div", {
      ...o,
      className: i(s, r.hoverRoll, {
        [r.disabled]: null == n,
        [r.forceHover]: l
      }),
      children: [(0, a.jsx)(e, {
        className: r.hovered,
        children: n
      }), (0, a.jsx)(e, {
        className: r.default,
        children: t
      })]
    })
  }
}
o.defaultProps = {
  tag: "div",
  forceHover: !1
};
var u = o