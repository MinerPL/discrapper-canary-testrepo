"use strict";
s.r(a), s.d(a, {
  default: function() {
    return l
  }
});
var t = s("735250");
s("470079");
var n = s("481060"),
  r = s("468706"),
  i = s("153124"),
  o = s("689938"),
  d = s("72242");

function l(e) {
  let {
    channelId: a,
    messageId: s,
    onClose: l,
    transitionState: c
  } = e, u = (0, i.useUID)();
  return (0, t.jsx)(n.ModalRoot, {
    transitionState: c,
    "aria-labelledby": u,
    size: n.ModalSize.SMALL,
    children: (0, t.jsxs)(n.ModalContent, {
      className: d.container,
      children: [(0, t.jsx)(n.Heading, {
        id: u,
        variant: "heading-lg/bold",
        color: "header-primary",
        className: d.header,
        children: o.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE
      }), (0, t.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: d.__invalid_subheader,
        children: o.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE
      }), (0, t.jsxs)("div", {
        className: d.buttonContainer,
        children: [(0, t.jsx)(n.Button, {
          className: d.button,
          size: n.Button.Sizes.MEDIUM,
          color: n.Button.Colors.BRAND,
          onClick: l,
          children: o.default.Messages.DISMISS
        }), (0, t.jsx)(n.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: o.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
            handleFalsePositiveHook: () => {
              l(), (0, r.handleSenderFalsePositiveFlow)(a, s)
            }
          })
        })]
      })]
    })
  })
}