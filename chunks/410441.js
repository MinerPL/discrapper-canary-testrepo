n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(423875),
  l = n(481060),
  s = n(908841),
  r = n(689938),
  o = n(634241);
let c = {
  [a.p.PROVIDER_UNSPECIFIED]: null,
  [a.p.SPOTIFY]: {
getLabel: () => r.Z.Messages.SPOTIFY,
Icon: s.Z
  }
};

function d(e) {
  var t;
  let {
onClick: n,
provider: a,
'aria-label': s
  } = e, r = (0, l.useToken)(l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), {
Icon: d,
getLabel: u
  } = null !== (t = c[a]) && void 0 !== t ? t : {};
  if (null == d)
return null;
  let h = null != s ? s : null == u ? void 0 : u(),
p = (0, i.jsx)(d, {
  color: r.hex(),
  width: 16,
  height: 16
});
  return null == n ? (0, i.jsx)('div', {
className: o.container,
'aria-label': h,
children: p
  }) : (0, i.jsx)(l.Tooltip, {
text: h,
children: e => (0, i.jsx)(l.Clickable, {
  className: o.container,
  ...e,
  onClick: n,
  children: p
})
  });
}