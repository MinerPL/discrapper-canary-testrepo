"use strict";
a.r(s), a.d(s, {
  default: function() {
    return c
  }
}), a("47120");
var t = a("735250"),
  o = a("470079"),
  n = a("481060"),
  l = a("153124"),
  r = a("273504"),
  d = a("689938"),
  i = a("140668");

function c(e) {
  let {
    initialCustomMessage: s,
    onSubmit: a,
    onClose: c,
    transitionState: _
  } = e, M = (0, l.useUID)(), [u, A] = o.useState(s);
  return (0, t.jsxs)(n.ModalRoot, {
    transitionState: _,
    "aria-labelledby": M,
    size: n.ModalSize.SMALL,
    children: [(0, t.jsxs)(n.ModalContent, {
      className: i.actionContentContainer,
      children: [(0, t.jsx)(n.Heading, {
        id: M,
        color: "header-primary",
        variant: "heading-md/semibold",
        className: i.header,
        children: d.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE
      }), (0, t.jsx)(n.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: d.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION
      }), (0, t.jsx)(n.TextArea, {
        className: i.customMessageTextArea,
        placeholder: d.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
        value: u,
        onChange: A,
        maxLength: r.MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH
      })]
    }), (0, t.jsxs)(n.ModalFooter, {
      children: [(0, t.jsx)(n.Button, {
        onClick: () => {
          a(u)
        },
        color: n.Button.Colors.BRAND,
        size: n.Button.Sizes.SMALL,
        children: d.default.Messages.EDIT
      }), (0, t.jsx)(n.Button, {
        onClick: () => {
          c()
        },
        color: n.Button.Colors.TRANSPARENT,
        look: n.Button.Looks.LINK,
        children: d.default.Messages.CANCEL
      })]
    })]
  })
}