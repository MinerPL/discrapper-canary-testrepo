"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("378720"),
  n = s("689938"),
  l = s("742130");
class o extends i.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, a.jsxs)("div", {
      className: e,
      children: [(0, a.jsx)(r.default, {
        children: n.default.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, a.jsx)("div", {
        className: l.content,
        children: t.legalNotice
      })]
    })
  }
}
t.default = o