n.d(t, {
  Y: function() {
return c;
  }
}), n(653041);
var i = n(470079),
  s = n(143927),
  a = n(169559),
  r = n(836768),
  l = n(49898),
  o = n(689938);

function c() {
  var e;
  let t = (0, a.Z)('global_discovery'),
n = (0, r.d)(e => e.selectedServerTab, s.Z),
c = i.useMemo(() => {
  let e = [];
  return t && e.push({
    id: l.vf.GUILDS,
    label: o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_CATEGORY
  }), e.push({
    id: l.vf.GAMING,
    label: o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY
  }), e.push({
    id: l.vf.MUSIC,
    label: o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY
  }), e.push({
    id: l.vf.ENTERTAINMENT,
    label: o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY
  }), e.push({
    id: l.vf.TECH,
    label: o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY
  }), e.push({
    id: l.vf.EDUCATION,
    label: o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY
  }), e.push({
    id: l.vf.HUBS,
    label: o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUBS_CATEGORY
  }), e;
}, [t]),
d = null !== (e = c.find(e => e.id === n)) && void 0 !== e ? e : c[0];
  return {
tabs: c,
selectedTab: d,
onSelectTab: i.useCallback(e => {
  r.d.getState().setSelectedServerTab(e.id);
}, [])
  };
}