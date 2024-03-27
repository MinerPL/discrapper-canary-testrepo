"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var n = r("37983"),
  i = r("884691"),
  s = r("414456"),
  l = r.n(s),
  a = r("77078"),
  u = r("145131"),
  o = r("750457"),
  d = r("890957");
class c extends i.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: r,
      disagreement: i,
      onAgree: s,
      onDisagree: c,
      imageClassName: f
    } = this.props;
    return (0, n.jsxs)(u.default, {
      className: o.gatedContent,
      justify: u.default.Justify.CENTER,
      align: u.default.Align.CENTER,
      direction: u.default.Direction.VERTICAL,
      children: [(0, n.jsx)("div", {
        className: l(o.image, f)
      }), (0, n.jsx)("div", {
        className: l(o.title, d.marginBottom8),
        children: e
      }), (0, n.jsx)("div", {
        className: l(o.description, d.marginBottom20),
        children: t
      }), (0, n.jsxs)(u.default, {
        justify: u.default.Justify.CENTER,
        align: u.default.Align.CENTER,
        grow: 0,
        children: [null != i ? (0, n.jsx)(a.Button, {
          className: o.action,
          size: a.ButtonSizes.LARGE,
          color: a.ButtonColors.PRIMARY,
          onClick: c,
          children: i
        }) : null, null != r ? (0, n.jsx)(a.Button, {
          className: o.action,
          color: a.Button.Colors.RED,
          size: a.ButtonSizes.LARGE,
          onClick: s,
          children: r
        }) : null]
      })]
    })
  }
}
var f = c