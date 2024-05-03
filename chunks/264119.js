"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("689938"),
  o = s("414899");

function i(e) {
  let {
    email: t,
    onClose: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.ModalHeader, {
      separator: !1,
      className: o.header,
      children: [(0, a.jsx)(l.Heading, {
        className: o.title,
        variant: "heading-xl/semibold",
        children: n.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE
      }), (0, a.jsx)(l.ModalCloseButton, {
        onClick: s,
        className: o.modalCloseButton
      })]
    }), (0, a.jsx)(l.ModalContent, {
      className: o.content,
      children: (0, a.jsx)(l.Text, {
        className: o.description,
        variant: "text-md/normal",
        children: n.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format({
          email: t
        })
      })
    }), (0, a.jsx)(l.ModalContent, {
      className: o.content,
      children: (0, a.jsx)(l.Text, {
        className: o.tooltip,
        variant: "text-sm/normal",
        children: n.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
      })
    }), (0, a.jsx)(l.ModalFooter, {
      className: o.modalFooter,
      children: (0, a.jsx)(l.Button, {
        className: o.__invalid_submit,
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        onClick: s,
        children: n.default.Messages.OKAY
      })
    })]
  })
}