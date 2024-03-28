"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
}), a("47120");
var s = a("735250"),
  o = a("470079"),
  l = a("803997"),
  n = a.n(l),
  d = a("481060"),
  i = a("153124"),
  r = a("689938"),
  c = a("530610");

function u(e) {
  let {
    transitionState: t,
    onConfirm: a,
    onClose: l,
    onDismiss: u
  } = e, [S, M] = o.useState(!1), [E, h] = o.useState(!0), [_, A] = o.useState(!0), m = (0, i.useUID)(), x = () => {
    u(), l()
  };
  return (0, s.jsxs)(d.ModalRoot, {
    transitionState: t,
    "aria-labelledby": m,
    size: d.ModalSize.SMALL,
    children: [(0, s.jsxs)(d.ModalContent, {
      className: c.modalContent,
      children: [(0, s.jsx)(d.ModalCloseButton, {
        onClick: x,
        className: c.closeButton
      }), (0, s.jsx)(d.Heading, {
        id: m,
        variant: "heading-lg/extrabold",
        color: "header-primary",
        className: c.__invalid_modalTitle,
        children: r.default.Messages.MESSAGE_REQUESTS_SPAM_HAM_MODAL_HEADER
      }), (0, s.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.modalBody,
        children: r.default.Messages.MESSAGE_REQUESTS_SPAM_HAM_MODAL_SUBHEADER
      }), (0, s.jsx)(d.FormSwitch, {
        hideBorder: !0,
        onChange: e => {
          h(e)
        },
        className: n()(c.modalBody, c.toggle),
        value: E,
        children: r.default.Messages.MESSAGE_REQUESTS_SPAM_HAM_TOGGLE
      })]
    }), (0, s.jsxs)(d.ModalFooter, {
      children: [(0, s.jsx)(d.Button, {
        type: "submit",
        color: d.Button.Colors.BRAND,
        onClick: () => {
          !S && (M(!0), a(E, _), M(!1), l())
        },
        submitting: S,
        children: r.default.Messages.CONFIRM
      }), (0, s.jsx)(d.Button, {
        type: "submit",
        color: d.Button.Colors.TRANSPARENT,
        grow: !0,
        look: d.ButtonLooks.LINK,
        onClick: x,
        submitting: S,
        className: c.cancelButton,
        children: r.default.Messages.CANCEL
      }), (0, s.jsx)(d.Checkbox, {
        value: _,
        type: d.Checkbox.Types.INVERTED,
        onChange: (e, t) => {
          A(t)
        },
        children: (0, s.jsx)(d.Text, {
          tag: "span",
          variant: "text-sm/normal",
          children: r.default.Messages.MESSAGE_REQUESTS_SPAM_HAM_OPT_OUT
        })
      })]
    })]
  })
}