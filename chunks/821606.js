"use strict";
a.r(e), a.d(e, {
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  r = a("988158"),
  l = a("285952"),
  o = a("153124"),
  i = a("689938"),
  c = a("13012");

function u(t) {
  let {
    url: e,
    onClose: u,
    transitionState: d
  } = t, x = (0, o.useUID)(), {
    protocol: m,
    hostname: f,
    theRestOfTheUrl: h
  } = (0, r.useUrlParts)(e);
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: d,
    "aria-labelledby": x,
    children: [(0, n.jsx)("img", {
      className: c.art,
      src: a("902623"),
      alt: ""
    }), (0, n.jsx)(s.ModalContent, {
      children: (0, n.jsxs)(l.default, {
        direction: l.default.Direction.VERTICAL,
        justify: l.default.Justify.CENTER,
        children: [(0, n.jsx)(s.Heading, {
          id: x,
          variant: "heading-lg/semibold",
          className: c.title,
          children: i.default.Messages.BAD_LINK_WARNING_TITLE_V2
        }), (0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          className: c.body,
          children: i.default.Messages.BAD_LINK_WARNING_BODY_V2.format()
        }), (0, n.jsxs)(s.Scroller, {
          className: c.linkCalloutContainer,
          children: [(0, n.jsxs)(s.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: [m, "//"]
          }), (0, n.jsx)(s.Text, {
            tag: "span",
            variant: "text-md/semibold",
            color: "text-normal",
            children: f
          }), (0, n.jsx)(s.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: h
          })]
        })]
      })
    }), (0, n.jsx)(s.ModalFooter, {
      children: (0, n.jsx)(s.Button, {
        type: "button",
        size: s.Button.Sizes.MEDIUM,
        color: s.Button.Colors.BRAND,
        onClick: u,
        children: i.default.Messages.GO_BACK
      })
    })]
  })
}