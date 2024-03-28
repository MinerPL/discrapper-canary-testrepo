"use strict";
t.r(s), t("47120");
var l = t("735250"),
  a = t("470079"),
  o = t("512722"),
  n = t.n(o),
  r = t("481060"),
  i = t("465670"),
  d = t("985002"),
  c = t("880257"),
  u = t("198952"),
  C = t("329242"),
  E = t("689938"),
  L = t("950474");
s.default = e => {
  let {
    currentUser: s,
    otherUser: t,
    transitionState: o,
    onClose: h
  } = e, [_, N] = a.useState(!1), M = a.useCallback(() => {
    N(!0)
  }, []), b = a.useCallback(() => {
    N(!1)
  }, []), f = a.useCallback(() => {
    h()
  }, [h]), m = (0, c.default)(), {
    cancelLinkRequest: x,
    isCancelLoading: A
  } = (0, d.useFamilyCenterActions)({
    onError: M,
    onSuccess: f
  });
  return n()(m, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, l.jsx)(r.ModalRoot, {
    transitionState: o,
    children: (0, l.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), x(t)
      },
      children: [_ ? (0, l.jsx)(r.FormErrorBlock, {
        className: L.error,
        onDismiss: b,
        children: E.default.Messages.FAMILY_CENTER_CANCEL_LINK_MODAL_ERROR
      }) : null, (0, l.jsx)(r.ModalContent, {
        children: (0, l.jsxs)("div", {
          className: L.header,
          children: [(0, l.jsx)(u.default, {
            currentUser: s,
            otherUser: t,
            children: (0, l.jsx)(i.default, {
              className: L.closeIcon
            })
          }), (0, l.jsx)(r.Heading, {
            className: L.headerText,
            variant: "text-lg/bold",
            children: E.default.Messages.FAMILY_CENTER_CANCEL_LINK_MODAL_TITLE
          }), (0, l.jsx)(C.default, {
            user: t,
            fill: !0
          })]
        })
      }), (0, l.jsx)(r.ModalFooter, {
        children: (0, l.jsxs)("div", {
          className: L.footer,
          children: [(0, l.jsx)(r.Button, {
            className: L.button,
            type: "button",
            disabled: A,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: h,
            size: r.Button.Sizes.SMALL,
            children: E.default.Messages.FAMILY_CENTER_CANCEL_REQUEST_BACK
          }), (0, l.jsx)(r.Button, {
            className: L.button,
            type: "submit",
            disabled: A || _,
            submitting: A,
            color: r.ButtonColors.RED,
            size: r.Button.Sizes.SMALL,
            children: E.default.Messages.FAMILY_CENTER_CANCEL_REQUEST
          })]
        })
      })]
    })
  })
}