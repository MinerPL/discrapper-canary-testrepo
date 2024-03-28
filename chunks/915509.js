"use strict";
t.r(l), t.d(l, {
  default: function() {
    return d
  }
}), t("47120");
var n = t("735250"),
  a = t("470079"),
  s = t("803997"),
  r = t.n(s),
  i = t("481060"),
  o = t("153124"),
  c = t("689938"),
  u = t("665395");

function d(e) {
  let {
    errorText: l,
    title: t,
    description: s,
    transitionState: d,
    onCancel: E,
    onConfirm: I,
    children: C
  } = e, h = (0, o.useUID)(), [m, M] = a.useState(!1), _ = a.useCallback(async () => {
    M(!0);
    try {
      await I()
    } catch (e) {
      throw e
    } finally {
      M(!1)
    }
  }, [I]);
  return (0, n.jsxs)(i.ModalRoot, {
    className: u.modal,
    transitionState: d,
    "aria-labelledby": h,
    size: i.ModalSize.SMALL,
    children: [(0, n.jsxs)(i.ModalContent, {
      className: u.modalContent,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        id: h,
        children: t
      }), null != s && "" !== s ? (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: u.description,
        children: s
      }) : null, (0, n.jsx)("div", {
        className: u.body,
        children: C
      }), null != l && "" !== l ? (0, n.jsx)(i.Text, {
        className: u.errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: l
      }) : null]
    }), (0, n.jsxs)(i.ModalFooter, {
      children: [(0, n.jsx)(i.Button, {
        submitting: m,
        className: u.button,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.BRAND,
        onClick: _,
        children: c.default.Messages.SAVE
      }), (0, n.jsx)(i.Button, {
        className: r()(u.cancelButton, u.button),
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        onClick: E,
        children: c.default.Messages.CANCEL
      })]
    })]
  })
}