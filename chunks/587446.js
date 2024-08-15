n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(689938),
  l = n(78852);

function u(e) {
  let {
text: t = o.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
className: n
  } = e;
  return (0, r.jsx)(s.Tooltip, {
text: t,
children: e => (0, r.jsx)(s.Clickable, {
  ...e,
  children: (0, r.jsx)(s.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: a()(l.nitroWheel, n)
  })
})
  });
}