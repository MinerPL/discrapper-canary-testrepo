t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(79390),
  l = t(689938);

function o(e) {
  return null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, r.eQ)(e) ? null : (0, i.jsx)(a.MenuItem, {
id: 'reactions',
label: l.Z.Messages.VIEW_REACTIONS,
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