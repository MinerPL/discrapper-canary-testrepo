t.r(e), t.d(e, {
  default: function() {
return r;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  u = t(239091),
  c = t(294299),
  d = t(689938);

function r(n) {
  let {
libraryApplication: e,
onPlay: t,
onSelect: r
  } = n, l = (0, c.Z)(e, t);
  return (0, i.jsx)(a.Menu, {
navId: 'launch-context',
onClose: u.Zy,
'aria-label': d.Z.Messages.APPLICATION_ACTIONS_MENU_LABEL,
onSelect: r,
children: l
  });
}