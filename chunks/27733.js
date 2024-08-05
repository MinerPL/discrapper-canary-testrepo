n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(929204),
  s = n(689938),
  o = n(420442);

function l(e) {
  let {
analyticsSection: t,
buttonText: n
  } = e;
  return (0, r.jsxs)(i.ShinyButton, {
className: o.premiumButton,
innerClassName: o.premiumButtonInner,
color: i.Button.Colors.GREEN,
size: i.Button.Sizes.SMALL,
onClick: () => (0, a.Z)({
  section: t
}),
children: [
  (0, r.jsx)(i.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: o.premiumButtonNitroWheel
  }),
  null != n ? n : s.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA
]
  });
}