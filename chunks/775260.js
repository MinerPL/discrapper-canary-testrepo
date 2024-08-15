n.d(t, {
  Y: function() {
return u;
  }
}), n(733860);
var i = n(470079),
  a = n(143927),
  s = n(731965),
  r = n(963202),
  l = n(169559),
  o = n(540742),
  c = n(766219),
  d = n(49898);

function u() {
  let e = (0, l.Z)('global_discovery'),
{
  enableClanCreation: t
} = (0, r.C3)({
  location: 'global_discovery',
  includeConverted: !0,
  autoTrackExposure: !0
}),
n = (0, o.B)(e => e.selectedTab, a.Z),
u = i.useMemo(() => {
  let n = [
    d.vf.GAMING,
    d.vf.MUSIC,
    d.vf.ENTERTAINMENT,
    d.vf.TECH,
    d.vf.EDUCATION,
    d.vf.HUBS
  ];
  return e || t ? n.unshift(d.vf.GUILDS) : n.unshift(d.vf.FEATURED), n.map(e => ({
    id: e,
    label: (0, c.vb)(e)
  }));
}, [
  t,
  e
]),
_ = i.useCallback(e => {
  (0, s.j)(() => o.B.setState({
    selectedTab: e,
    searchCategoryId: (0, c.lg)(e)
  }));
}, []);
  return i.useEffect(() => {
(null == n || !u.some(e => e.id === n)) && _(u[0].id);
  }, [
n,
u,
_
  ]), {
tabs: u,
selectedTab: null != n ? n : u[0].id,
setSelectedTab: _
  };
}