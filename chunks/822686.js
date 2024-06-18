"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(904245),
  a = n(367907),
  l = n(592125),
  u = n(496675),
  _ = n(981631),
  d = n(689938),
  c = n(566580);
t.Z = e => {
  let {
    message: t,
    reportId: n
  } = e, [E, I] = r.useState(!1), T = r.useCallback(() => {
    I(!0), a.ZP.trackWithMetadata(_.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
      report_id: n
    }), o.Z.deleteMessage(t.getChannelId(), t.id)
  }, [t, n]), h = r.useMemo(() => {
    let e = l.Z.getChannel(t.getChannelId());
    return null != e && e.type !== _.d4z.DM && e.type !== _.d4z.GROUP_DM && u.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, {
      channelId: e.id
    })
  }, [t]);
  return null != t && h ? (0, i.jsx)("div", {
    className: c.container,
    children: (0, i.jsxs)("div", {
      className: c.messageContainer,
      children: [(0, i.jsx)("div", {
        className: c.description,
        children: (0, i.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: d.Z.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION
        })
      }), (0, i.jsx)(s.Button, {
        onClick: () => T(),
        disabled: E,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.RED,
        children: E ? d.Z.Messages.DELETED : d.Z.Messages.DELETE
      })]
    })
  }) : null
}