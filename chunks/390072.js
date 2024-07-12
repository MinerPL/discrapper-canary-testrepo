n.d(t, {
  Z: function() {
return d;
  }
});
var s = n(735250),
  r = n(470079),
  i = n(481060),
  a = n(725436),
  l = n(11868),
  o = n(217804),
  c = n(765305),
  u = n(794797);

function d(e) {
  let {
guildScheduledEvent: t,
channel: n,
onClose: d
  } = e, h = t.entity_type === c.WX.EXTERNAL, _ = r.useCallback(e => (0, l.Qt)(t, d)(e), [
t,
d
  ]), E = (0, o.u)(t, n);
  if (null == E)
return null;
  let {
IconComponent: g,
locationName: p
  } = E, f = (0, s.jsxs)(s.Fragment, {
children: [
  null != g && (0, s.jsx)(g, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20,
    className: u.channelIcon
  }),
  (0, s.jsx)(i.Text, {
    color: 'header-secondary',
    variant: 'text-sm/normal',
    className: u.locationText,
    children: (0, a.m)(p, !0)
  })
]
  });
  return (0, s.jsx)('div', {
className: u.row,
children: null != _ ? (0, s.jsx)(i.Clickable, {
  className: h ? u.externalLocation : u.channelLocation,
  onClick: _,
  children: f
}) : f
  });
}