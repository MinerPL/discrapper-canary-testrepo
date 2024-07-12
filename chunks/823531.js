t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(239091),
  s = t(299206),
  r = t(689938);

function o(e) {
  let {
application: n,
onSelect: t
  } = e, o = (0, s.Z)({
id: n.id,
label: r.Z.Messages.COPY_ID
  });
  return (0, i.jsx)(a.Menu, {
navId: 'activity-shelf-item-context',
onClose: l.Zy,
'aria-label': r.Z.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
onSelect: t,
children: (0, i.jsx)(a.MenuGroup, {
  children: o
}, 'developer-actions')
  });
}