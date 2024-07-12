t.d(n, {
  Z: function() {
return r;
  }
});
var a = t(735250);
t(470079);
var l = t(481060),
  s = t(689938),
  i = t(674814);

function r(e) {
  let {
sendStartNotification: n,
setSendStartNotification: t
  } = e, r = n ? s.Z.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : s.Z.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
  return (0, a.jsx)('div', {
className: i.notificationToggle,
children: (0, a.jsx)(l.Checkbox, {
  type: l.Checkbox.Types.INVERTED,
  size: 14,
  className: i.__invalid_checkbox,
  value: n,
  onChange: function() {
    t(!n);
  },
  children: (0, a.jsx)(l.Text, {
    color: 'header-secondary',
    variant: 'text-sm/normal',
    children: (0, a.jsx)(l.Tooltip, {
      position: 'bottom',
      tooltipClassName: i.tooltip,
      text: s.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
      'aria-label': s.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
      children: e => (0, a.jsx)('span', {
        ...e,
        children: r
      })
    })
  })
})
  });
}