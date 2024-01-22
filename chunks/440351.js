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
  o = n("145131"),
  u = n("296165"),
  c = n("926622");
class d extends i.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: i,
      onAgree: s,
      onDisagree: d,
      imageClassName: f
    } = this.props;
    return (0, r.jsxs)(o.default, {
      className: u.gatedContent,
      justify: o.default.Justify.CENTER,
      align: o.default.Align.CENTER,
      direction: o.default.Direction.VERTICAL,
      children: [(0, r.jsx)("div", {
        className: l(u.image, f)
      }), (0, r.jsx)("div", {
        className: l(u.title, c.marginBottom8),
        children: e
      }), (0, r.jsx)("div", {
        className: l(u.description, c.marginBottom20),
        children: t
      }), (0, r.jsxs)(o.default, {
        justify: o.default.Justify.CENTER,
        align: o.default.Align.CENTER,
        grow: 0,
        children: [null != i ? (0, r.jsx)(a.Button, {
          className: u.action,
          size: a.ButtonSizes.LARGE,
          color: a.ButtonColors.PRIMARY,
          onClick: d,
          children: i
        }) : null, null != n ? (0, r.jsx)(a.Button, {
          className: u.action,
          color: a.Button.Colors.RED,
          size: a.ButtonSizes.LARGE,
          onClick: s,
          children: n
        }) : null]
      })]
    })
  }
}
var f = d