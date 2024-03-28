"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("990547"),
  l = n("481060"),
  i = n("153124"),
  r = n("758119"),
  o = n("689938"),
  u = n("935779");

function d(e) {
  let {
    transitionState: t
  } = e, d = (0, i.useUID)();
  return (0, a.jsxs)(l.ModalRoot, {
    transitionState: t,
    size: l.ModalSize.SMALL,
    "aria-labelledby": d,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, a.jsx)(l.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: u.container,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: n("863181"),
          className: u.img
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          className: u.title,
          id: d,
          children: o.default.Messages.AGE_GATE_AGE_VERIFIED
        }), (0, a.jsx)(l.Text, {
          color: "header-secondary",
          className: u.subtitle,
          variant: "text-sm/normal",
          children: o.default.Messages.AGE_GATE_AGE_VERIFIED_BODY
        })]
      })
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        size: l.ButtonSizes.SMALL,
        fullWidth: !0,
        onClick: function() {
          (0, r.closeAgeGateModal)()
        },
        autoFocus: !0,
        children: o.default.Messages.CLOSE
      })
    })]
  })
}