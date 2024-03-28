"use strict";
s.r(a), s.d(a, {
  default: function() {
    return d
  }
});
var o = s("735250");
s("470079");
var t = s("481060"),
  l = s("174767"),
  n = s("689938"),
  i = s("105910");

function d(e) {
  let {
    transitionState: a,
    onClose: s,
    onDelete: d
  } = e;
  async function r() {
    await (0, l.deleteAllInvites)(), d()
  }
  return (0, o.jsxs)(t.ModalRoot, {
    size: t.ModalSize.SMALL,
    transitionState: a,
    className: i.__invalid_modal,
    children: [(0, o.jsxs)(t.ModalContent, {
      className: i.modalContent,
      children: [(0, o.jsxs)("div", {
        className: i.header,
        children: [(0, o.jsx)(t.Heading, {
          className: i.__invalid_title,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: n.default.Messages.GAME_INVITES_DELETE_MODAL_TITLE
        }), (0, o.jsx)(t.ModalCloseButton, {
          onClick: s
        })]
      }), (0, o.jsx)(t.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: i.__invalid_body,
        children: n.default.Messages.GAME_INVITES_DELETE_MODAL_SUBTITLE
      })]
    }), (0, o.jsxs)(t.ModalFooter, {
      children: [(0, o.jsx)(t.Button, {
        color: t.Button.Colors.RED,
        onClick: r,
        children: n.default.Messages.GAME_INVITES_DELETE_INVITES
      }), (0, o.jsx)(t.Button, {
        look: t.Button.Looks.LINK,
        color: t.Button.Colors.PRIMARY,
        onClick: s,
        children: n.default.Messages.CANCEL
      })]
    })]
  })
}