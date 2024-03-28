"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  o = s("481060"),
  l = s("153124"),
  d = s("117984"),
  i = s("689938"),
  r = s("538367");

function u(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, u = (0, l.useUID)(), [c, h] = n.useState("");
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, d.addFavoriteCategory)(c), t()
    },
    children: (0, a.jsxs)(o.ModalRoot, {
      transitionState: s,
      "aria-labelledby": u,
      children: [(0, a.jsxs)(o.ModalContent, {
        children: [(0, a.jsx)(o.Heading, {
          id: u,
          className: r.header,
          variant: "heading-xl/semibold",
          children: i.default.Messages.CREATE_CATEGORY
        }), (0, a.jsx)(o.ModalCloseButton, {
          onClick: t,
          className: r.closeButton
        }), (0, a.jsx)(o.FormItem, {
          title: i.default.Messages.CATEGORY_NAME,
          className: r.name,
          children: (0, a.jsx)(o.TextInput, {
            value: c,
            onChange: h,
            maxLength: 100,
            placeholder: i.default.Messages.CATEGORY_NAME_PLACEHOLDER,
            className: r.__invalid_inputWrapper,
            autoFocus: !0
          })
        })]
      }), (0, a.jsxs)(o.ModalFooter, {
        children: [(0, a.jsx)(o.Button, {
          type: "submit",
          disabled: "" === c,
          children: i.default.Messages.CREATE_CATEGORY
        }), (0, a.jsx)(o.Button, {
          onClick: t,
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          children: i.default.Messages.CANCEL
        })]
      })]
    })
  })
}