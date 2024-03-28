"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("481060"),
  c = l("689938"),
  o = l("774324"),
  d = l("902294");

function u(e) {
  let {
    heading: t = c.default.Messages.APP_DIRECTORY_ERROR_HEADING,
    body: l = c.default.Messages.APP_DIRECTORY_ERROR_BODY,
    className: n
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(o.container, n),
    children: [(0, i.jsx)("img", {
      className: o.image,
      src: d,
      alt: c.default.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
    }), (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(r.Heading, {
        className: o.header,
        variant: "heading-xl/semibold",
        children: t
      }), (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        children: l
      })]
    })]
  })
}