"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var o = n("37983"),
  s = n("884691"),
  a = n("446674"),
  r = n("77078"),
  l = n("599417"),
  i = n("734990"),
  E = n("697218"),
  _ = n("258078"),
  u = n("782340"),
  T = n("679012");

function S(e) {
  let {
    onNext: t,
    onClose: n
  } = e, [S, d] = s.useState(!1), N = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()), c = async e => {
    e.preventDefault(), d(!0);
    try {
      await (0, i.sendConfirmationCode)(), t()
    } catch (n) {
      let e = new l.default(n),
        t = e.getAnyErrorMessage();
      null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
    } finally {
      d(!1)
    }
  };
  return (0, o.jsxs)("form", {
    onSubmit: c,
    children: [(0, o.jsxs)(r.ModalHeader, {
      separator: !1,
      className: T.confirmStartHeader,
      children: [(0, o.jsx)(_.default, {
        color: _.default.Colors.HEADER_PRIMARY,
        size: _.default.Sizes.SIZE_24,
        className: T.title,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
      }), (0, o.jsx)(r.Text, {
        className: T.description,
        variant: "text-md/normal",
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
          oldEmail: null == N ? void 0 : N.email
        })
      }), (0, o.jsx)(r.ModalCloseButton, {
        onClick: n,
        className: T.modalCloseButton
      })]
    }), (0, o.jsx)(r.ModalContent, {
      className: T.content,
      children: (0, o.jsxs)("div", {
        className: T.buttons,
        children: [(0, o.jsx)(r.Button, {
          type: "submit",
          color: r.Button.Colors.BRAND,
          size: r.Button.Sizes.MEDIUM,
          submitting: S,
          className: T.submit,
          children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
        }), (0, o.jsx)(r.Button, {
          className: T.cancel,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          onClick: n,
          children: u.default.Messages.CANCEL
        })]
      })
    })]
  })
}