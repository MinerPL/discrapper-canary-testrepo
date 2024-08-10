n.d(t, {
  B: function() {
return d;
  },
  y: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(278074),
  a = n(442837),
  s = n(481060),
  o = n(26033),
  l = n(594174),
  u = n(689938);

function c(e) {
  return (0, i.EQ)(e).when(o.dX, () => u.Z.Messages.USER_ACTIVITY_CLEAR_GAME_HISTORY).when(o.y0, () => u.Z.Messages.USER_ACTIVITY_CLEAR_WATCH_HISTORY).when(o.dU, () => u.Z.Messages.USER_ACTIVITY_CLEAR_LISTENING_HISTORY).otherwise(() => null);
}

function d(e) {
  let {
user: t,
entry: i,
display: o,
onAction: u,
onClose: d
  } = e, _ = (0, a.e7)([l.default], () => l.default.getCurrentUser());
  if (t.id !== (null == _ ? void 0 : _.id) || 'live' === o || null == i)
return null;
  let E = () => {
(0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('26545').then(n.bind(n, 81596));
  return n => (0, r.jsx)(e, {
    entry: i,
    user: t,
    onAction: u,
    ...n
  });
}), null == d || d();
  };
  return (0, r.jsx)(s.MenuItem, {
id: 'delete-entry-history',
label: c(i),
action: () => {
  null == u || u({
    action: 'PRESS_DELETE_HISTORY_MENU_ITEM'
  }), E();
},
color: 'danger'
  });
}