t.r(e), t.d(e, {
  default: function() {
return u;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(481060),
  r = t(239091),
  d = t(299206),
  s = t(689938);

function u(n) {
  var e;
  let t = (0, d.Z)({
id: n.id,
label: n.label,
shiftId: n.shiftId
  });
  return a.useEffect(() => {
null == t && (0, r.Zy)();
  }, [t]), (0, i.jsx)(l.Menu, {
onSelect: n.onSelect,
navId: 'dev-context',
'aria-label': null !== (e = n['aria-label']) && void 0 !== e ? e : s.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: r.Zy,
children: t
  });
}