n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(921944),
  r = n(689938),
  l = n(941653);

function o(e) {
  let {
markAsDismissed: t
  } = e;
  return (0, i.jsxs)('div', {
className: l.container,
children: [
  (0, i.jsx)('div', {
    className: l.pointer
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-sm/normal',
    className: l.content,
    children: r.Z.Messages.HUB_PRIVACY_SETTINGS_TOOLTIP
  }),
  (0, i.jsx)(s.Button, {
    color: s.Button.Colors.BRAND_INVERTED,
    fullWidth: !0,
    onClick: () => {
      t(a.L.AUTO);
    },
    children: r.Z.Messages.GOT_IT
  })
]
  });
}