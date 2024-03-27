"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("37983");
n("884691");
var o = n("77078"),
  a = n("782340"),
  r = n("917908");

function l(e) {
  let {
    email: t,
    onClose: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: !1,
      className: r.header,
      children: [(0, s.jsx)(o.Heading, {
        className: r.title,
        variant: "heading-xl/semibold",
        children: a.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE
      }), (0, s.jsx)(o.ModalCloseButton, {
        onClick: n,
        className: r.modalCloseButton
      })]
    }), (0, s.jsx)(o.ModalContent, {
      className: r.content,
      children: (0, s.jsx)(o.Text, {
        className: r.description,
        variant: "text-md/normal",
        children: a.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format({
          email: t
        })
      })
    }), (0, s.jsx)(o.ModalContent, {
      className: r.content,
      children: (0, s.jsx)(o.Text, {
        className: r.tooltip,
        variant: "text-sm/normal",
        children: a.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
      })
    }), (0, s.jsx)(o.ModalFooter, {
      className: r.modalFooter,
      children: (0, s.jsx)(o.Button, {
        className: r.submit,
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.MEDIUM,
        onClick: n,
        children: a.default.Messages.OKAY
      })
    })]
  })
}