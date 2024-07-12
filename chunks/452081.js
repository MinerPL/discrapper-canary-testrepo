n.d(t, {
  z: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  s = n(113434),
  a = n(689938);

function r() {
  var e;
  let [t, n] = i.useState(s.e5.UNCLAIMED), r = i.useMemo(() => [{
  id: s.e5.UNCLAIMED,
  label: a.Z.Messages.QUESTS_ALL
},
{
  id: s.e5.CLAIMED,
  label: a.Z.Messages.QUESTS_CLAIMED
}
  ], []), l = null !== (e = r.find(e => e.id === t)) && void 0 !== e ? e : r[0];
  return {
tabs: r,
selectedTab: l,
onSelectTab: i.useCallback(e => {
  n(e.id);
}, [])
  };
}