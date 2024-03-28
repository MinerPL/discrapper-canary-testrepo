"use strict";
a.r(t);
var s = a("735250");
a("470079");
var o = a("106351"),
  l = a("481060"),
  r = a("933557"),
  n = a("689938");
t.default = e => {
  let {
    channel: t,
    onClose: a,
    onConfirm: E,
    transitionState: d
  } = e, {
    title: i,
    body: c,
    confirm: u
  } = function(e) {
    let t = (0, r.default)(e, !0);
    return e.type === o.ChannelTypes.GUILD_CATEGORY ? {
      title: n.default.Messages.DELETE_FAVORITES_CHANNEL_TITLE,
      body: n.default.Messages.DELETE_FAVORITES_CATEGORY_BODY.format({
        channelName: t
      }),
      confirm: n.default.Messages.DELETE_FAVORITES_CATEGORY_CONFIRM
    } : {
      title: n.default.Messages.DELETE_FAVORITES_CHANNEL_TITLE,
      body: n.default.Messages.DELETE_FAVORITES_CHANNEL_BODY.format({
        channelName: t
      }),
      confirm: n.default.Messages.DELETE_FAVORITES_CHANNEL_CONFIRM
    }
  }(t);
  return (0, s.jsxs)(l.ModalRoot, {
    transitionState: d,
    "aria-label": i,
    children: [(0, s.jsx)(l.ModalHeader, {
      separator: !1,
      children: (0, s.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: i
      })
    }), (0, s.jsx)(l.ModalContent, {
      children: (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: c
      })
    }), (0, s.jsxs)(l.ModalFooter, {
      children: [(0, s.jsx)(l.Button, {
        onClick: E,
        color: l.Button.Colors.RED,
        children: u
      }), (0, s.jsx)(l.Button, {
        onClick: a,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        children: n.default.Messages.CANCEL
      })]
    })]
  })
}