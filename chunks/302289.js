"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("785681"),
  i = n("130310"),
  r = n("689938"),
  o = n("431049"),
  u = n("128216");
t.default = () => {
  let e = (0, l.useAgeSpecificText)(r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_TEEN, r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_PARENT);
  return (0, a.jsxs)("div", {
    className: o.container,
    children: [(0, a.jsxs)("div", {
      className: o.__invalid_content,
      children: [(0, a.jsx)(s.Heading, {
        className: o.header,
        variant: "heading-md/bold",
        children: (0, a.jsx)(s.HeadingLevel, {
          children: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_HEADER
        })
      }), (0, a.jsx)(s.Text, {
        className: o.description,
        variant: "text-sm/medium",
        color: "text-muted",
        children: e
      }), (0, a.jsx)(i.default, {})]
    }), (0, a.jsx)("div", {
      className: o.artContainer,
      children: (0, a.jsx)("img", {
        src: u,
        alt: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_ALT
      })
    })]
  })
}