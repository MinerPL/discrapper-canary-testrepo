"use strict";
a.r(s), a("47120");
var t = a("735250"),
  l = a("470079"),
  o = a("481060"),
  r = a("465670"),
  n = a("985002"),
  c = a("880257"),
  d = a("198952"),
  i = a("329242"),
  N = a("689938"),
  E = a("545019");
s.default = e => {
  let {
    currentUser: s,
    otherUser: a,
    transitionState: _,
    onClose: C
  } = e, u = l.useCallback(() => {
    C()
  }, [C]), I = (0, c.default)(), [T, L] = l.useState(!1), [h, M] = l.useState(!1), x = l.useCallback(() => {
    M(!0), L(!1)
  }, []), {
    disconnectLinkRequest: A,
    isDisconnectLoading: D
  } = (0, n.useFamilyCenterActions)({
    onSuccess: u,
    onError: x
  });
  return (0, t.jsx)(o.ModalRoot, {
    transitionState: _,
    children: (0, t.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), A(a)
      },
      children: [h ? (0, t.jsx)(o.FormErrorBlock, {
        className: E.error,
        children: N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_ERROR
      }) : null, (0, t.jsxs)(o.ModalContent, {
        children: [(0, t.jsxs)("div", {
          className: E.header,
          children: [(0, t.jsx)(d.default, {
            currentUser: s,
            otherUser: a,
            children: (0, t.jsx)(r.default, {
              className: E.closeIcon
            })
          }), (0, t.jsx)(o.Heading, {
            className: E.headerText,
            variant: "text-lg/bold",
            children: N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_TITLE.format({
              isAdult: I
            })
          }), (0, t.jsx)(i.default, {
            user: a,
            fill: !0
          })]
        }), (0, t.jsxs)("div", {
          className: E.content,
          children: [(0, t.jsx)(o.Text, {
            className: E.noticeHeader,
            variant: "eyebrow",
            color: "header-primary",
            children: N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_HEADER
          }), (0, t.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: I ? N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_PARENT : N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_TEEN
          })]
        }), (0, t.jsx)(o.Checkbox, {
          className: E.acknowledgementCheckbox,
          type: o.Checkbox.Types.INVERTED,
          value: T,
          onChange: (e, s) => {
            L(s), M(!1)
          },
          children: (0, t.jsx)("div", {
            className: E.checkboxLabel,
            children: (0, t.jsx)(o.Text, {
              variant: "text-xs/semibold",
              children: I ? N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_PARENT : N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_TEEN
            })
          })
        })]
      }), (0, t.jsx)(o.ModalFooter, {
        children: (0, t.jsxs)("div", {
          className: E.footer,
          children: [(0, t.jsx)(o.Button, {
            className: E.button,
            type: "button",
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.PRIMARY,
            onClick: C,
            size: o.Button.Sizes.SMALL,
            disabled: D,
            children: N.default.Messages.CANCEL
          }), (0, t.jsx)(o.Button, {
            className: E.button,
            type: "submit",
            disabled: !T || D,
            submitting: D,
            color: o.ButtonColors.RED,
            size: o.Button.Sizes.SMALL,
            children: N.default.Messages.FAMILY_CENTER_DISCONNECT_BUTTON
          })]
        })
      })]
    })
  })
}