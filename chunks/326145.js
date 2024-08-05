n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(745752),
  l = n(17181),
  o = n(689938),
  c = n(867411);

function d(e) {
  let {
guildId: t,
channelId: n
  } = e, d = a.useCallback(() => {
if (null != t && null != n)
  (0, r.I1)(t), (0, l.default)({
    guildId: t,
    returnChannelId: n
  });
  }, [
t,
n
  ]);
  return (0, i.jsx)('div', {
className: c.container,
children: (0, i.jsxs)('div', {
  className: c.explainerContainer,
  children: [
    (0, i.jsx)(s.Text, {
      variant: 'text-md/normal',
      children: o.Z.Messages.ONBOARDING_ERROR_PAGE_TEXT
    }),
    (0, i.jsx)(s.Button, {
      onClick: d,
      children: (0, i.jsx)(s.Text, {
        variant: 'text-md/medium',
        children: o.Z.Messages.START_ONBOARDING
      })
    })
  ]
})
  });
}