"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(434404),
  l = n(430824),
  u = n(346656),
  _ = n(981631),
  d = n(689938),
  c = n(93138);
t.Z = e => {
  let {
    guildId: t,
    reportId: n
  } = e, [E, I] = r.useState(!1), T = l.Z.getGuild(t), h = null != T;
  r.useEffect(() => {
    I(!h)
  }, [h]);
  let S = r.useCallback(() => {
    I(!0), o.ZP.trackWithMetadata(_.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
      guild_id: t,
      report_id: n
    }), a.Z.leaveGuild(t)
  }, [t, n]);
  if (null == T) return null;
  let f = () => {
    (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
      header: d.Z.Messages.LEAVE_SERVER_TITLE.format({
        name: T.name
      }),
      confirmText: d.Z.Messages.LEAVE_SERVER,
      cancelText: d.Z.Messages.CANCEL,
      onConfirm: S,
      ...e,
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: d.Z.Messages.LEAVE_SERVER_BODY.format({
          name: T.name
        })
      })
    }))
  };
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(s.Text, {
      className: c.description,
      variant: "text-sm/normal",
      children: d.Z.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
    }), (0, i.jsxs)("div", {
      className: c.guildContainer,
      children: [(0, i.jsxs)("div", {
        className: c.guildInfo,
        children: [(0, i.jsx)(u.Z, {
          guild: T,
          showBadge: !1,
          animate: !1,
          size: u.Z.Sizes.SMALL,
          "aria-label": T.name,
          className: c.icon,
          active: !0
        }), (0, i.jsx)(s.Text, {
          className: c.guildName,
          variant: "text-sm/semibold",
          children: T.name
        })]
      }), (0, i.jsx)(s.Button, {
        onClick: () => f(),
        disabled: E,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.RED,
        children: E ? d.Z.Messages.MOBILE_REPORTS_LEFT_SERVER : d.Z.Messages.LEAVE_SERVER
      })]
    })]
  })
}