"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var o = n("37983");
n("884691");
var i = n("77078"),
  r = n("145131"),
  s = n("476765"),
  u = n("769791"),
  l = n("782340"),
  a = n("508069");

function d(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, d = (0, s.useUID)();
  return (0, o.jsxs)(i.ModalRoot, {
    "aria-labelledby": d,
    transitionState: t,
    size: i.ModalSize.SMALL,
    children: [(0, o.jsx)(i.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(i.Heading, {
        id: d,
        variant: "heading-lg/semibold",
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
      })
    }), (0, o.jsxs)(i.ModalContent, {
      children: [(0, o.jsx)(r.default, {
        justify: r.default.Justify.CENTER,
        children: (0, o.jsx)("div", {
          className: a.image
        })
      }), (0, o.jsx)(i.Text, {
        className: a.text,
        variant: "text-sm/normal",
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
      })]
    }), (0, o.jsxs)(i.ModalFooter, {
      children: [(0, o.jsx)(i.Button, {
        onClick: function() {
          (0, u.openPremiumSite)(), n()
        },
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
      }), (0, o.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: n,
        children: l.default.Messages.CANCEL
      })]
    })]
  })
}