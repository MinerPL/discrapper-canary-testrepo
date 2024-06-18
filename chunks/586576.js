"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(285952),
  u = n(710909);
class _ extends r.PureComponent {
  render() {
    let {
      note: e,
      title: t,
      action: n,
      className: r
    } = this.props;
    return (0, i.jsx)("div", {
      className: o()(u.wrapper, r),
      children: (0, i.jsxs)(l.Z, {
        className: u.flexWrapper,
        direction: l.Z.Direction.VERTICAL,
        align: l.Z.Align.CENTER,
        justify: l.Z.Justify.CENTER,
        children: [(0, i.jsx)(l.Z.Child, {
          grow: 0,
          className: u.image
        }), (0, i.jsxs)(l.Z.Child, {
          grow: 0,
          className: u.text,
          children: [(0, i.jsx)(a.H, {
            className: u.title,
            children: t
          }), null != e ? (0, i.jsx)("div", {
            className: u.note,
            children: e
          }) : null]
        }), n]
      })
    })
  }
}
t.Z = _