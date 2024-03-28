"use strict";
n.r(t);
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("285952"),
  u = n("849577"),
  d = n("794711");
class c extends a.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: a,
      onAgree: l,
      onDisagree: c,
      imageClassName: f
    } = this.props;
    return (0, s.jsxs)(o.default, {
      className: u.gatedContent,
      justify: o.default.Justify.CENTER,
      align: o.default.Align.CENTER,
      direction: o.default.Direction.VERTICAL,
      children: [(0, s.jsx)("div", {
        className: i()(u.image, f)
      }), (0, s.jsx)("div", {
        className: i()(u.title, d.marginBottom8),
        children: e
      }), (0, s.jsx)("div", {
        className: i()(u.description, d.marginBottom20),
        children: t
      }), (0, s.jsxs)(o.default, {
        justify: o.default.Justify.CENTER,
        align: o.default.Align.CENTER,
        grow: 0,
        children: [null != a ? (0, s.jsx)(r.Button, {
          className: u.action,
          size: r.ButtonSizes.LARGE,
          color: r.ButtonColors.PRIMARY,
          onClick: c,
          children: a
        }) : null, null != n ? (0, s.jsx)(r.Button, {
          className: u.action,
          color: r.Button.Colors.RED,
          size: r.ButtonSizes.LARGE,
          onClick: l,
          children: n
        }) : null]
      })]
    })
  }
}
t.default = c