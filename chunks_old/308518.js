"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983"),
  r = s("884691"),
  i = s("895530"),
  n = s("782340"),
  l = s("641784");
class o extends r.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, a.jsxs)("div", {
      className: e,
      children: [(0, a.jsx)(i.default, {
        children: n.default.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, a.jsx)("div", {
        className: l.content,
        children: t.legalNotice
      })]
    })
  }
}
var u = o