"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250");
n("470079");
var u = n("481060"),
  i = n("287734"),
  d = n("939863"),
  a = n("153124"),
  r = n("305878"),
  s = n("482241"),
  c = n("554747"),
  o = n("689938"),
  E = n("954088");

function f(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: f
  } = e, N = (0, a.useUID)(), S = (0, c.useActiveEvent)(t.id);
  if (null == S) return null;
  let _ = () => {
    i.default.selectVoiceChannel(null), f()
  };
  return (0, l.jsxs)(u.ModalRoot, {
    transitionState: n,
    "aria-labelledby": N,
    size: u.ModalSize.SMALL,
    children: [(0, l.jsxs)(u.ModalContent, {
      className: E.content,
      children: [(0, l.jsx)(d.default, {
        children: (0, l.jsx)("div", {
          className: E.iconBackground,
          children: (0, l.jsx)(r.default, {
            height: 40,
            width: 40,
            className: E.icon
          })
        })
      }), (0, l.jsx)(u.Heading, {
        id: N,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: E.title,
        children: o.default.Messages.GUILD_EVENT_END_PROMPT_TITLE
      }), (0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: E.subtitle,
        children: o.default.Messages.GUILD_EVENT_END_PROMPT_BODY
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        color: u.Button.Colors.RED,
        onClick: () => {
          s.default.endEvent(S.id, S.guild_id), _()
        },
        children: o.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
      }), (0, l.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        className: E.cancelButton,
        onClick: _,
        children: o.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL
      })]
    })]
  })
}