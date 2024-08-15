t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(79390),
  r = t(689938);

function s(e) {
  return null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, l.eQ)(e) ? null : (0, i.jsx)(a.MenuItem, {
id: 'reactions',
label: r.Z.Messages.VIEW_REACTIONS,
icon: a.ReactionIcon,
action: () => (0, a.openModalLazy)(async () => {
  let {
    default: n
  } = await Promise.resolve().then(t.bind(t, 785388));
  return t => (0, i.jsx)(n, {
    ...t,
    message: e
  });
})
  });
}