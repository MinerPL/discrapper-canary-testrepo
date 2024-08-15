n(47120);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(904245),
  o = n(367907),
  l = n(592125),
  u = n(496675),
  c = n(981631),
  d = n(689938),
  _ = n(451989);
t.Z = e => {
  let {
message: t,
reportId: n
  } = e, [E, f] = i.useState(!1), h = i.useCallback(() => {
f(!0), o.ZP.trackWithMetadata(c.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
  report_id: n
}), s.Z.deleteMessage(t.getChannelId(), t.id);
  }, [
t,
n
  ]), p = i.useMemo(() => {
let e = l.Z.getChannel(t.getChannelId());
return null != e && e.type !== c.d4z.DM && e.type !== c.d4z.GROUP_DM && u.Z.canWithPartialContext(c.Plq.MANAGE_MESSAGES, {
  channelId: e.id
});
  }, [t]);
  return null != t && p ? (0, r.jsx)('div', {
className: _.container,
children: (0, r.jsxs)('div', {
  className: _.messageContainer,
  children: [
    (0, r.jsx)('div', {
      className: _.description,
      children: (0, r.jsx)(a.Text, {
        variant: 'text-sm/normal',
        children: d.Z.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION
      })
    }),
    (0, r.jsx)(a.Button, {
      onClick: () => h(),
      disabled: E,
      size: a.Button.Sizes.SMALL,
      color: a.Button.Colors.RED,
      children: E ? d.Z.Messages.DELETED : d.Z.Messages.DELETE
    })
  ]
})
  }) : null;
};