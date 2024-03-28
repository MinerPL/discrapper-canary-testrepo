"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("301822"),
  i = n("153124"),
  r = n("689938"),
  o = n("243488");
let u = () => n.e("39248").then(n.t.bind(n, "48603", 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});
t.default = e => {
  let t = (0, i.useUID)();
  return (0, a.jsxs)(l.ModalRoot, {
    ...e,
    transitionState: e.transitionState,
    "aria-labelledby": t,
    children: [(0, a.jsx)("div", {
      className: o.animationContainer,
      children: (0, a.jsx)(s.default, {
        importData: u,
        className: o.animationMiddle
      })
    }), (0, a.jsx)(l.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: o.container,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          className: o.header,
          id: t,
          children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({
            guildName: e.guildName
          })
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
        }), (0, a.jsx)(l.Button, {
          className: o.button,
          onClick: () => {
            e.onAccept(), e.onClose()
          },
          children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM
        })]
      })
    })]
  })
}