"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("77078"),
  o = n("782340"),
  u = n("440318");
let c = {
  BLOCK: u.block,
  INLINE: u.inline
};
class d extends i.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: i = c.BLOCK,
      style: s
    } = this.props;
    return (0, r.jsxs)("div", {
      className: l(t, i),
      style: s,
      children: [(0, r.jsxs)(a.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: u.pro,
        children: [o.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
      }), (0, r.jsx)(a.Text, {
        className: l(u.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}
d.Types = c;
var f = d