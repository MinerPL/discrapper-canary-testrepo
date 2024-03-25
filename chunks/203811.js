"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  i = n("987317"),
  d = n("119184"),
  r = n("476765"),
  a = n("943232"),
  s = n("322224"),
  c = n("534222"),
  o = n("782340"),
  E = n("999009");

function f(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: f
  } = e, _ = (0, r.useUID)(), N = (0, c.useActiveEvent)(t.id);
  if (null == N) return null;
  let v = () => {
    i.default.selectVoiceChannel(null), f()
  };
  return (0, l.jsxs)(u.ModalRoot, {
    transitionState: n,
    "aria-labelledby": _,
    size: u.ModalSize.SMALL,
    children: [(0, l.jsxs)(u.ModalContent, {
      className: E.content,
      children: [(0, l.jsx)(d.default, {
        children: (0, l.jsx)("div", {
          className: E.iconBackground,
          children: (0, l.jsx)(a.default, {
            height: 40,
            width: 40,
            className: E.icon
          })
        })
      }), (0, l.jsx)(u.Heading, {
        id: _,
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
          s.default.endEvent(N.id, N.guild_id), v()
        },
        children: o.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
      }), (0, l.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        className: E.cancelButton,
        onClick: v,
        children: o.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL
      })]
    })]
  })
}