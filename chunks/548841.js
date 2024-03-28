"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("287734"),
  l = n("153124"),
  r = n("873438"),
  u = n("471253"),
  o = n("939863"),
  d = n("689938"),
  c = n("142335");
t.default = e => {
  let {
    channel: t,
    ...n
  } = e, T = (0, l.useUID)();
  return (0, a.jsxs)(s.ConfirmModal, {
    confirmText: d.default.Messages.END_STAGE,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: () => {
      (0, u.endStage)(t), i.default.disconnect()
    },
    confirmButtonColor: s.Button.Colors.RED,
    bodyClassName: c.body,
    ...n,
    children: [(0, a.jsx)(o.default, {
      className: c.headerIconContainer,
      children: (0, a.jsx)("div", {
        className: c.iconBackground,
        children: (0, a.jsx)(r.default, {
          width: 40,
          height: 40,
          className: c.headerIcon
        })
      })
    }), (0, a.jsx)(s.Heading, {
      id: T,
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: c.title,
      children: d.default.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: d.default.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
    })]
  })
}