t.d(n, {
  I9: function() {
return m;
  }
});
var a = t(735250),
  r = t(470079),
  i = t(692547),
  s = t(481060),
  o = t(496675),
  l = t(484455),
  c = t(981631),
  d = t(689938),
  u = t(944309);

function m(e) {
  switch (e) {
case c.sFg.LOW:
  return d.Z.Messages.VERIFICATION_LEVEL_LOW;
case c.sFg.MEDIUM:
  return d.Z.Messages.VERIFICATION_LEVEL_MEDIUM;
case c.sFg.HIGH:
  return d.Z.Messages.VERIFICATION_LEVEL_HIGH;
case c.sFg.VERY_HIGH:
  return d.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH;
default:
  return '';
  }
}
let _ = {
  [c.sFg.NONE]: '',
  [c.sFg.LOW]: i.Z.unsafe_rawColors.GREEN_360.css,
  [c.sFg.MEDIUM]: i.Z.unsafe_rawColors.YELLOW_300.css,
  [c.sFg.HIGH]: i.Z.unsafe_rawColors.ORANGE_345.css,
  [c.sFg.VERY_HIGH]: i.Z.unsafe_rawColors.RED_400.css
};
n.ZP = function(e) {
  let {
guild: n
  } = e, i = o.Z.can(c.Plq.MANAGE_GUILD, n), f = n.verificationLevel, C = f === c.sFg.VERY_HIGH ? s.MobilePhoneIcon : s.EnvelopeIcon, h = r.useMemo(() => m(f), [f]), x = _[f], p = (0, a.jsx)('div', {
className: u.verificationLevelTitle,
children: d.Z.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
  verificationLevelHook: function() {
    return (0, a.jsx)(s.Text, {
      className: u.verificationLevelHook,
      style: {
        color: x
      },
      variant: 'text-sm/semibold',
      children: h
    }, 'hook');
  }
})
  }), g = f === c.sFg.VERY_HIGH ? d.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : d.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(l.Z, {
title: p,
children: (0, a.jsxs)('div', {
  className: u.verificationContainer,
  children: [
    (0, a.jsx)(C, {
      size: 'custom',
      color: 'currentColor',
      width: 20,
      height: 20,
      className: u.icon
    }),
    (0, a.jsx)(s.Text, {
      className: u.guildVerificationText,
      variant: 'text-sm/normal',
      children: g
    }),
    i && (0, a.jsx)(s.Clickable, {
      className: u.iconInteractiveContainer,
      onClick: () => (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await t.e('72458').then(t.bind(t, 694278));
        return t => (0, a.jsx)(e, {
          ...t,
          guild: n
        });
      }),
      children: (0, a.jsx)(s.PencilIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20,
        height: 20,
        className: u.iconInteractive
      })
    })
  ]
})
  });
};