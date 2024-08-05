n.d(t, {
  Z: function() {
return o;
  }
});
var a = n(735250);
n(470079);
var i = n(481060),
  l = n(239091),
  s = n(299206),
  r = n(689938);

function o(e) {
  let {
application: t,
onSelect: n
  } = e, o = (0, s.Z)({
id: t.id,
label: r.Z.Messages.COPY_ID
  });
  return (0, a.jsx)(i.Menu, {
navId: 'activity-shelf-item-context',
onClose: l.Zy,
'aria-label': r.Z.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
onSelect: n,
children: (0, a.jsx)(i.MenuGroup, {
  children: o
}, 'developer-actions')
  });
}