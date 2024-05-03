"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  n = t("512722"),
  o = t.n(n),
  r = t("481060"),
  i = t("465670"),
  d = t("985002"),
  c = t("880257"),
  u = t("198952"),
  E = t("329242"),
  L = t("689938"),
  _ = t("965143");
s.default = e => {
  let {
    currentUser: s,
    otherUser: t,
    transitionState: n,
    onClose: N
  } = e, [h, C] = l.useState(!1), M = l.useCallback(() => {
    C(!0)
  }, []), x = l.useCallback(() => {
    C(!1)
  }, []), I = l.useCallback(() => {
    N()
  }, [N]), m = (0, c.default)(), {
    declineLinkRequest: b,
    isDeclineLoading: f
  } = (0, d.useFamilyCenterActions)({
    onError: M,
    onSuccess: I
  });
  return o()(!m, "FamilyCenterDeclineLinkModal should only be rendered for teens."), (0, a.jsx)(r.ModalRoot, {
    transitionState: n,
    children: (0, a.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), b(t)
      },
      children: [h ? (0, a.jsx)(r.FormErrorBlock, {
        className: _.error,
        onDismiss: x,
        children: L.default.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_ERROR
      }) : null, (0, a.jsx)(r.ModalContent, {
        children: (0, a.jsxs)("div", {
          className: _.header,
          children: [(0, a.jsx)(u.default, {
            currentUser: s,
            otherUser: t,
            children: (0, a.jsx)(i.default, {
              className: _.closeIcon
            })
          }), (0, a.jsx)(r.Heading, {
            className: _.headerText,
            variant: "text-lg/bold",
            children: L.default.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_TITLE
          }), (0, a.jsx)(E.default, {
            user: t
          }), (0, a.jsxs)("div", {
            className: _.content,
            children: [(0, a.jsx)(r.Text, {
              className: _.__invalid_noticeHeader,
              variant: "eyebrow",
              color: "header-primary",
              children: L.default.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_NOTICE_HEADER
            }), (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              children: L.default.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_DISCLAIMER_TEEN
            })]
          })]
        })
      }), (0, a.jsx)(r.ModalFooter, {
        children: (0, a.jsxs)("div", {
          className: _.footer,
          children: [(0, a.jsx)(r.Button, {
            className: _.button,
            type: "button",
            disabled: f,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: N,
            size: r.Button.Sizes.SMALL,
            children: L.default.Messages.CANCEL
          }), (0, a.jsx)(r.Button, {
            className: _.button,
            type: "submit",
            disabled: f,
            submitting: f,
            color: r.ButtonColors.RED,
            size: r.Button.Sizes.SMALL,
            children: L.default.Messages.FAMILY_CENTER_DECLINE_REQUEST
          })]
        })
      })]
    })
  })
}