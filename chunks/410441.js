t.d(n, {
  Z: function() {
return a;
  }
});
var l = t(735250);
t(470079);
var r = t(481060),
  i = t(634241);

function a(e) {
  let {
onClick: n,
Icon: t,
'aria-label': a
  } = e, o = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), s = (0, l.jsx)(t, {
color: o.hex(),
size: 'custom',
width: 16,
height: 16
  });
  return null == n ? (0, l.jsx)('div', {
className: i.container,
'aria-label': a,
children: s
  }) : (0, l.jsx)(r.Tooltip, {
text: a,
children: e => (0, l.jsx)(r.Clickable, {
  className: i.container,
  ...e,
  onClick: n,
  children: s
})
  });
}