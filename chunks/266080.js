n(47120);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  o = n(367907),
  s = n(434404),
  l = n(430824),
  u = n(346656),
  c = n(981631),
  d = n(689938),
  _ = n(329631);
t.Z = e => {
  let {
guildId: t,
reportId: n
  } = e, [E, f] = i.useState(!1), h = l.Z.getGuild(t), p = null != h;
  i.useEffect(() => {
f(!p);
  }, [p]);
  let m = i.useCallback(() => {
f(!0), o.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
  guild_id: t,
  report_id: n
}), s.Z.leaveGuild(t);
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
          (0, r.jsx)(u.Z, {
            guild: h,
            showBadge: !1,
            animate: !1,
            size: u.Z.Sizes.SMALL,
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