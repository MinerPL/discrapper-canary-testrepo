t.r(e);
var i = t(735250);
t(470079);
var s = t(481060),
  a = t(287734),
  r = t(313201),
  l = t(471253),
  o = t(939863),
  c = t(689938),
  u = t(53771);
e.default = n => {
  let {
channel: e,
...t
  } = n, d = (0, r.Dt)();
  return (0, i.jsxs)(s.ConfirmModal, {
confirmText: c.Z.Messages.END_STAGE,
cancelText: c.Z.Messages.CANCEL,
onConfirm: () => {
  (0, l.NZ)(e), a.default.disconnect();
},
confirmButtonColor: s.Button.Colors.RED,
bodyClassName: u.body,
...t,
children: [
  (0, i.jsx)(o.Z, {
    className: u.headerIconContainer,
    children: (0, i.jsx)('div', {
      className: u.iconBackground,
      children: (0, i.jsx)(s.StageXIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 40,
        height: 40,
        className: u.headerIcon
      })
    })
  }),
  (0, i.jsx)(s.Heading, {
    id: d,
    variant: 'heading-xl/semibold',
    color: 'header-primary',
    className: u.title,
    children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: u.subtitle,
    children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
  })
]
  });
};