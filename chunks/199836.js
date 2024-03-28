"use strict";
a.r(t);
var s = a("735250");
a("470079");
var n = a("481060"),
  r = a("153124"),
  o = a("112612"),
  l = a("689938"),
  i = a("326644");
t.default = function(e) {
  let {
    onClose: t,
    transitionState: a,
    onSubmit: c
  } = e, {
    submitting: d,
    errorMessage: u,
    onSubmit: I
  } = (0, o.default)({
    onSubmit: c,
    onClose: t
  }), N = (0, r.useUID)();
  return (0, s.jsxs)(n.ModalRoot, {
    className: i.container,
    transitionState: a,
    "aria-labelledby": N,
    children: [(0, s.jsxs)(n.ModalContent, {
      className: i.content,
      children: [(0, s.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        id: N,
        children: l.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_TITLE
      }), (0, s.jsx)(n.Text, {
        className: i.manualApprovalDescriptionText,
        color: "header-secondary",
        variant: "text-sm/normal",
        children: l.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_DESCRIPTION
      }), (0, s.jsx)(n.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: l.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_EXPLANATION.format()
      }), null != u && (0, s.jsx)(n.Text, {
        className: i.__invalid_errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: u
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      children: [(0, s.jsx)(n.Button, {
        className: i.actionButton,
        color: n.Button.Colors.BRAND,
        submitting: d,
        onClick: I,
        size: n.Button.Sizes.SMALL,
        children: (0, s.jsx)(n.Text, {
          variant: "text-sm/semibold",
          children: l.default.Messages.CONFIRM
        })
      }), (0, s.jsx)(n.Button, {
        color: n.Button.Colors.PRIMARY,
        onClick: t,
        size: n.Button.Sizes.SMALL,
        children: (0, s.jsx)(n.Text, {
          variant: "text-sm/semibold",
          children: l.default.Messages.CANCEL
        })
      })]
    })]
  })
}