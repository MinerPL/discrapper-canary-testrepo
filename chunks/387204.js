"use strict";
n.r(t);
var s, a, l, i, r = n("735250"),
  o = n("470079"),
  u = n("803997"),
  d = n.n(u),
  c = n("481060"),
  f = n("689938"),
  E = n("522363");
let _ = {
  BLOCK: E.block,
  INLINE: E.inline
};
class T extends(i = o.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: s = _.BLOCK,
      style: a
    } = this.props;
    return (0, r.jsxs)("div", {
      className: d()(t, s),
      style: a,
      children: [(0, r.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: E.pro,
        children: [f.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
      }), (0, r.jsx)(c.Text, {
        className: d()(E.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}
s = T, a = "Types", l = _, a in s ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = T