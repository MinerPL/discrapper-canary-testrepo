"use strict";
a.r(s), a.d(s, {
  ConfirmNoSharedServerSubscribeWarningModal: function() {
    return d
  }
});
var t = a("735250");
a("470079");
var n = a("481060"),
  o = a("689938"),
  i = a("600411"),
  r = a("607273");

function d(e) {
  let {
    applicationName: s,
    onConfirm: a,
    onClose: d,
    onCancel: l,
    ...c
  } = e;
  return (0, t.jsxs)(n.ModalRoot, {
    ...c,
    children: [(0, t.jsxs)(n.ModalContent, {
      className: i.body,
      children: [(0, t.jsx)("img", {
        alt: "",
        src: r,
        className: i.img,
        "aria-hidden": !0
      }), (0, t.jsx)(n.Heading, {
        variant: "heading-xl/extrabold",
        className: i.title,
        children: o.default.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_TITLE.format({
          applicationName: s
        })
      }), (0, t.jsx)(n.Text, {
        variant: "text-md/medium",
        children: o.default.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_BODY
      })]
    }), (0, t.jsxs)(n.ModalFooter, {
      children: [(0, t.jsx)(n.Button, {
        onClick: () => {
          a(), d()
        },
        children: o.default.Messages.CONTINUE
      }), (0, t.jsx)(n.Button, {
        className: i.__invalid_cancel,
        onClick: () => {
          l(), d()
        },
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        children: o.default.Messages.CANCEL
      })]
    })]
  })
}