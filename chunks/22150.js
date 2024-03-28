"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  o = s("481060"),
  i = s("479531"),
  r = s("393869"),
  d = s("594174"),
  u = s("689938"),
  c = s("92190");

function E(e) {
  let {
    onNext: t,
    onClose: s
  } = e, [E, C] = l.useState(!1), _ = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), N = async e => {
    e.preventDefault(), C(!0);
    try {
      await (0, r.sendConfirmationCode)(), t()
    } catch (t) {
      let e = new i.default(t).getAnyErrorMessage();
      null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE))
    } finally {
      C(!1)
    }
  };
  return (0, a.jsxs)("form", {
    onSubmit: N,
    children: [(0, a.jsxs)(o.ModalHeader, {
      separator: !1,
      className: c.header,
      children: [(0, a.jsx)(o.Heading, {
        className: c.title,
        variant: "heading-xl/extrabold",
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
      }), (0, a.jsx)(o.ModalCloseButton, {
        onClick: s,
        className: c.modalCloseButton
      })]
    }), (0, a.jsx)(o.ModalContent, {
      className: c.content,
      children: (0, a.jsx)(o.Text, {
        className: c.description,
        variant: "text-md/normal",
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
          oldEmail: null == _ ? void 0 : _.email
        })
      })
    }), (0, a.jsxs)(o.ModalFooter, {
      className: c.modalFooter,
      children: [(0, a.jsx)(o.Button, {
        type: "submit",
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.MEDIUM,
        submitting: E,
        className: c.__invalid_submit,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
      }), (0, a.jsx)(o.Button, {
        className: c.__invalid_cancel,
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: s,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}