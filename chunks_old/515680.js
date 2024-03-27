"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("77078"),
  o = n("476765"),
  s = n("200008"),
  l = n("782340"),
  u = n("118930");

function d(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, d = (0, o.useUID)(), [c, f] = r.useState("");
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, s.addFavoriteCategory)(c), t()
    },
    children: (0, a.jsxs)(i.ModalRoot, {
      transitionState: n,
      "aria-labelledby": d,
      children: [(0, a.jsxs)(i.ModalContent, {
        children: [(0, a.jsx)(i.Heading, {
          id: d,
          className: u.header,
          variant: "heading-xl/semibold",
          children: l.default.Messages.CREATE_CATEGORY
        }), (0, a.jsx)(i.ModalCloseButton, {
          onClick: t,
          className: u.closeButton
        }), (0, a.jsx)(i.FormItem, {
          title: l.default.Messages.CATEGORY_NAME,
          className: u.name,
          children: (0, a.jsx)(i.TextInput, {
            value: c,
            onChange: f,
            maxLength: 100,
            placeholder: l.default.Messages.CATEGORY_NAME_PLACEHOLDER,
            className: u.inputWrapper,
            autoFocus: !0
          })
        })]
      }), (0, a.jsxs)(i.ModalFooter, {
        children: [(0, a.jsx)(i.Button, {
          type: "submit",
          disabled: "" === c,
          children: l.default.Messages.CREATE_CATEGORY
        }), (0, a.jsx)(i.Button, {
          onClick: t,
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          children: l.default.Messages.CANCEL
        })]
      })]
    })
  })
}