"use strict";
s.r(e), s.d(e, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var o = s("481060"),
  n = s("782568"),
  l = s("153124"),
  i = s("689938"),
  r = s("558656");

function d(t) {
  let {
    url: e,
    onClose: d,
    transitionState: c
  } = t, u = (0, l.useUID)();
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: c,
    "aria-labelledby": u,
    children: [(0, a.jsx)("img", {
      className: r.art,
      src: s("902623"),
      alt: ""
    }), (0, a.jsx)(o.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: r.modalContent,
        children: [(0, a.jsx)(o.Heading, {
          id: u,
          variant: "heading-lg/semibold",
          className: r.title,
          children: i.default.Messages.LINK_NOT_DISCORD_WARNING_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          className: r.body,
          children: i.default.Messages.LINK_NOT_DISCORD_WARNING_BODY.format({
            url: e
          })
        })]
      })
    }), (0, a.jsxs)(o.ModalFooter, {
      children: [(0, a.jsx)(o.Button, {
        type: "button",
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        onClick: d,
        children: i.default.Messages.LINK_NOT_DISCORD_WARNING_CANCEL
      }), (0, a.jsx)(o.Button, {
        type: "button",
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.TRANSPARENT,
        look: o.Button.Looks.LINK,
        onClick: () => {
          (0, n.default)(e, !0)
        },
        children: i.default.Messages.LINK_NOT_DISCORD_WARNING_CONTINUE
      })]
    })]
  })
}