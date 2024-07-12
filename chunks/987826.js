n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(154921),
  l = n(937602);

function u(e) {
  var t;
  let {
name: n,
className: i,
state: u,
isInline: c,
onClick: d
  } = e, _ = null, E = s.Z.Colors.HEADER_PRIMARY;
  (null == u ? void 0 : u.isActive) && !c ? _ = l.active : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? _ = l.error : (null == u ? void 0 : u.hasValue) && !c && (_ = l.set);
  let f = (0, r.jsx)(s.Z, {
size: c ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_14,
color: E,
className: a()(l.option, {
  [l.inline]: c
}, _, i),
children: n + (c ? ':' : '')
  });
  return null == d ? f : (0, r.jsx)(o.Clickable, {
className: l.clickable,
onClick: () => d(n),
children: f
  });
}