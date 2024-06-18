"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(392711),
  s = n(481060),
  o = n(689938),
  a = n(160503);
t.Z = e => {
  let t = (0, r.flatMap)(e.history, e => {
    var t;
    let {
      destination: [n],
      multiSelect: i
    } = e, r = [null, null], s = Object.values(null !== (t = null == i ? void 0 : i.state) && void 0 !== t ? t : {});
    return s.length > 0 && (r[0] = s.join(", ")), "" !== n && (r[1] = n), r
  }).filter(e => null != e);
  return 0 === t.length ? null : (0, i.jsxs)("div", {
    className: a.container,
    children: [(0, i.jsx)(s.Heading, {
      className: a.breadcrumbsHeader,
      color: "header-secondary",
      variant: "heading-sm/semibold",
      children: o.Z.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
    }), t.map((e, t) => (0, i.jsxs)("div", {
      className: a.breadcrumbContainer,
      children: [(0, i.jsx)("div", {
        className: a.breadcrumbDot
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        className: a.breadcrumbText,
        children: e
      })]
    }, "".concat(e, "+").concat(t)))]
  })
}