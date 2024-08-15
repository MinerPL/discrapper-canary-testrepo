n(47120);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(367907),
  o = n(565138),
  l = n(434404),
  u = n(430824),
  c = n(981631),
  d = n(689938),
  _ = n(112811);
t.Z = e => {
  let {
guildId: t,
reportId: n
  } = e, [E, f] = i.useState(!1), h = u.Z.getGuild(t), p = null != h;
  i.useEffect(() => {
f(!p);
  }, [p]);
  let m = i.useCallback(() => {
f(!0), s.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
  guild_id: t,
  report_id: n
}), l.Z.leaveGuild(t);
  }, [
t,
n
  ]);
  if (null == h)
return null;
  let I = () => {
(0, a.openModal)(e => (0, r.jsx)(a.ConfirmModal, {
  header: d.Z.Messages.LEAVE_SERVER_TITLE.format({
    name: h.name
  }),
  confirmText: d.Z.Messages.LEAVE_SERVER,
  cancelText: d.Z.Messages.CANCEL,
  onConfirm: m,
  ...e,
  children: (0, r.jsx)(a.Text, {
    variant: 'text-md/normal',
    children: d.Z.Messages.LEAVE_SERVER_BODY.format({
      name: h.name
    })
  })
}));
  };
  return (0, r.jsxs)('div', {
className: _.container,
children: [
  (0, r.jsx)(a.Text, {
    className: _.description,
    variant: 'text-sm/normal',
    children: d.Z.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
  }),
  (0, r.jsxs)('div', {
    className: _.guildContainer,
    children: [
      (0, r.jsxs)('div', {
        className: _.guildInfo,
        children: [
          (0, r.jsx)(o.Z, {
            guild: h,
            showBadge: !1,
            animate: !1,
            size: o.Z.Sizes.SMALL,
            'aria-label': h.name,
            className: _.icon,
            active: !0
          }),
          (0, r.jsx)(a.Text, {
            className: _.guildName,
            variant: 'text-sm/semibold',
            children: h.name
          })
        ]
      }),
      (0, r.jsx)(a.Button, {
        onClick: () => I(),
        disabled: E,
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.RED,
        children: E ? d.Z.Messages.MOBILE_REPORTS_LEFT_SERVER : d.Z.Messages.LEAVE_SERVER
      })
    ]
  })
]
  });
};