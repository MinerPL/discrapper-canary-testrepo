var s = n(735250),
  a = n(470079),
  r = n(481060),
  i = n(377171),
  o = n(689938),
  u = n(484779);
t.Z = a.forwardRef(function(e, t) {
  let {
isInventory: n,
style: a
  } = e;
  return (0, s.jsxs)('div', {
ref: t,
className: u.desktopTooltip,
style: {
  marginTop: n ? 8 : 0,
  ...a
},
children: [
  (0, s.jsx)(r.CircleInformationIcon, {
    size: 'custom',
    className: u.infoIcon,
    height: n ? 16 : 12,
    width: n ? 16 : 12,
    color: n ? i.Z.TEXT_MUTED : i.Z.WHITE
  }),
  (0, s.jsx)(r.Text, {
    color: n ? 'text-muted' : 'always-white',
    variant: n ? 'text-xs/normal' : 'text-xxs/normal',
    children: o.Z.Messages.QUESTS_PROGRESS_WEB_TIP
  })
]
  });
});