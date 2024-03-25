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
  d = n("782340"),
  c = n("905430"),
  T = e => {
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