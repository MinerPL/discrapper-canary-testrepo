"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  a = n("446674"),
  r = n("77078"),
  l = n("599417"),
  i = n("734990"),
  E = n("697218"),
  _ = n("782340"),
  u = n("679012");

function d(e) {
  let {
    onNext: t,
    onClose: n
  } = e, [d, T] = o.useState(!1), S = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()), N = async e => {
    e.preventDefault(), T(!0);
    try {
      await (0, i.sendConfirmationCode)(), t()
    } catch (n) {
      let e = new l.default(n),
        t = e.getAnyErrorMessage();
      null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
    } finally {
      T(!1)
    }
  };
  return (0, s.jsxs)("form", {
    onSubmit: N,
    children: [(0, s.jsxs)(r.ModalHeader, {
      separator: !1,
      className: u.header,
      children: [(0, s.jsx)(r.Heading, {
        className: u.title,
        variant: "heading-xl/extrabold",
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
      }), (0, s.jsx)(r.ModalCloseButton, {
        onClick: n,
        className: u.modalCloseButton
      })]
    }), (0, s.jsx)(r.ModalContent, {
      className: u.content,
      children: (0, s.jsx)(r.Text, {
        className: u.description,
        variant: "text-md/normal",
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
          oldEmail: null == S ? void 0 : S.email
        })
      })
    }), (0, s.jsxs)(r.ModalFooter, {
      className: u.modalFooter,
      children: [(0, s.jsx)(r.Button, {
        type: "submit",
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.MEDIUM,
        submitting: d,
        className: u.submit,
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
      }), (0, s.jsx)(r.Button, {
        className: u.cancel,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: n,
        children: _.default.Messages.CANCEL
      })]
    })]
  })
}