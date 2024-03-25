"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("987317"),
  l = n("476765"),
  r = n("674083"),
  u = n("244480"),
  o = n("119184"),
  c = n("782340"),
  d = n("549797");

function T(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: T
  } = e, E = (0, l.useUID)();

  function _() {
    i.default.disconnect(), T()
  }
  return (0, a.jsxs)(s.ModalRoot, {
    transitionState: n,
    "aria-labelledby": E,
    children: [(0, a.jsxs)(s.ModalContent, {
      className: d.content,
      children: [(0, a.jsx)(o.default, {
        children: (0, a.jsx)("div", {
          className: d.iconBackground,
          children: (0, a.jsx)(r.default, {
            width: 40,
            height: 40,
            className: d.headerIcon
          })
        })
      }), (0, a.jsx)(s.Heading, {
        id: E,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: d.title,
        children: c.default.Messages.EXPLICIT_END_STAGE_TITLE
      }), (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: d.subtitle,
        children: c.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      children: [(0, a.jsx)(s.Button, {
        color: s.Button.Colors.RED,
        onClick: function() {
          (0, u.endStage)(t), _()
        },
        children: c.default.Messages.EXPLICIT_END_STAGE_CONFIRM
      }), (0, a.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: d.cancelButton,
        onClick: _,
        children: c.default.Messages.EXPLICIT_END_STAGE_CANCEL
      })]
    })]
  })
}