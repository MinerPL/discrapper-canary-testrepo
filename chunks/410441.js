l.d(n, {
  Z: function() {
return a;
  }
});
var t = l(735250);
l(470079);
var r = l(481060),
  i = l(76927);

function a(e) {
  let {
onClick: n,
Icon: l,
'aria-label': a
  } = e, u = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), s = (0, t.jsx)(l, {
color: u.hex(),
size: 'custom',
width: 16,
height: 16
  });
  return null == n ? (0, t.jsx)('div', {
className: i.container,
'aria-label': a,
children: s
  }) : (0, t.jsx)(r.Tooltip, {
text: a,
children: e => (0, t.jsx)(r.Clickable, {
  className: i.container,
  ...e,
  onClick: n,
  children: s
})
  });
}