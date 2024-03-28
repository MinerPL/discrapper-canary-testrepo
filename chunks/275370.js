"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  o = t("512722"),
  n = t.n(o),
  r = t("481060"),
  d = t("757698"),
  i = t("51144"),
  c = t("985002"),
  u = t("880257"),
  C = t("198952"),
  _ = t("130310"),
  m = t("329242"),
  E = t("689938"),
  L = t("219998");
s.default = e => {
  let {
    currentUser: s,
    otherUser: t,
    transitionState: o,
    onClose: N
  } = e, A = l.useCallback(() => {
    N()
  }, [N]), M = (0, u.default)(), [h, x] = l.useState(!1), f = l.useCallback(() => {
    x(!0)
  }, []), {
    acceptLinkRequest: T,
    isAcceptLoading: I
  } = (0, c.useFamilyCenterActions)({
    onError: f,
    onSuccess: A
  });
  return n()(!M, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, a.jsxs)(r.ModalRoot, {
    transitionState: o,
    "aria-label": E.default.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE,
    className: L.root,
    children: [h ? (0, a.jsx)(r.FormErrorBlock, {
      className: L.error,
      children: E.default.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_ERROR
    }) : null, (0, a.jsxs)(r.ModalContent, {
      className: L.__invalid_modalContent,
      children: [(0, a.jsxs)("div", {
        className: L.header,
        children: [(0, a.jsx)(C.default, {
          currentUser: s,
          otherUser: t,
          children: (0, a.jsx)(d.default, {
            className: L.linkIcon
          })
        }), (0, a.jsx)(r.Heading, {
          className: L.headerText,
          variant: "text-lg/bold",
          children: E.default.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE
        }), (0, a.jsx)(m.default, {
          user: t,
          fill: !0
        })]
      }), (0, a.jsxs)("div", {
        className: L.content,
        children: [(0, a.jsx)(_.default, {
          inModal: !0
        }), (0, a.jsx)(r.Text, {
          className: L.disclaimer,
          variant: "text-xs/normal",
          color: "text-normal",
          children: E.default.Messages.FAMILY_CENTER_ACCEPT_LINK_ACTIVITY_DISCLAIMER.format({
            username: i.default.getName(t)
          })
        })]
      })]
    }), (0, a.jsx)(r.ModalFooter, {
      children: (0, a.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), T(t)
        },
        children: (0, a.jsxs)("div", {
          className: L.footer,
          children: [(0, a.jsx)(r.Button, {
            className: L.button,
            type: "button",
            disabled: I,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: N,
            size: r.Button.Sizes.SMALL,
            children: E.default.Messages.CANCEL
          }), (0, a.jsx)(r.Button, {
            className: L.button,
            type: "submit",
            disabled: I,
            submitting: I,
            color: r.ButtonColors.BRAND,
            size: r.Button.Sizes.SMALL,
            children: E.default.Messages.FAMILY_CENTER_ACCEPT_REQUEST
          })]
        })
      })
    })]
  })
}