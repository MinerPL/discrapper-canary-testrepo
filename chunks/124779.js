"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("287734"),
  l = n("153124"),
  r = n("873438"),
  o = n("471253"),
  u = n("939863"),
  c = n("689938"),
  d = n("8732");

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
      children: [(0, a.jsx)(u.default, {
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
          (0, o.endStage)(t), _()
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