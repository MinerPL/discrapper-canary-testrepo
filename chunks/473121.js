"use strict";
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(454585),
  a = n(273744),
  l = n(689938),
  u = n(991917);
t.Z = e => {
  let {
    node: {
      header: t,
      subheader: n,
      button: _
    }
  } = e, d = (null == _ ? void 0 : _.type) === "submit", c = r.useRef(o.Z.reactParserFor({
    ...o.Z.defaultRules,
    link: a.s
  }));
  return (0, i.jsxs)("div", {
    className: u.headerContainer,
    children: [null != t && "" !== t ? (0, i.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: t
    }) : null, null != n && "" !== t ? (0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: c.current(n)
    }) : null, d && (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: l.Z.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()
    })]
  })
}