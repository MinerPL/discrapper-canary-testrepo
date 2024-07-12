n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(113434),
  r = n(497505),
  l = n(37303),
  o = n(683650),
  c = n(608390);

function d(e) {
  let {
questId: t
  } = e, {
quests: n,
isFetchingCurrentQuests: d
  } = (0, s.J2)({
fetchPolicy: 'cache-or-network'
  }), u = n.find(e => e.id === t);
  return d ? (0, i.jsx)(a.Spinner, {
className: c.spinner
  }) : null == u ? (0, i.jsx)(o.o, {}) : (0, i.jsx)(l.Z, {
quest: u,
location: r.jn.QUESTS_EMBED
  }, u.id);
}