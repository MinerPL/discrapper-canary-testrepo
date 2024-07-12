n.d(t, {
  j: function() {
return c;
  }
}), n(47120);
var i = n(470079),
  a = n(442837),
  l = n(512751),
  s = n(57132),
  r = n(943209),
  o = n(628566);

function c(e) {
  let {
channelId: t
  } = e;
  (0, s.SO)();
  let n = (0, l.o)(t),
{
  installedIntegrations: c,
  applicationsShelf: d,
  integrationsFetchState: u,
  applicationsShelfFetchState: h
} = (0, a.cj)([o.Z], () => ({
  installedIntegrations: o.Z.getIntegrations(t),
  applicationsShelf: o.Z.getApplicationsShelf(),
  integrationsFetchState: o.Z.getIntegrationsFetchState(t),
  applicationsShelfFetchState: o.Z.getApplicationsShelfFetchState()
}));
  i.useEffect(() => {
n && ((u === o.M.NOT_FETCHED || u === o.M.FETCH_FAILED) && (0, r.Yz)(t), (h === o.M.NOT_FETCHED || h === o.M.FETCH_FAILED) && (0, r.Rh)());
  }, [
n,
t,
u,
h
  ]);
  let p = new Set(c.map(e => e.application.id));
  return {
installedIntegrations: c,
availableApplications: d.filter(e => !p.has(e.id)),
applicationsShelf: d,
fetched: u !== o.M.NOT_FETCHED && u !== o.M.FETCHING && h !== o.M.NOT_FETCHED && h !== o.M.FETCHING,
appsInGDMEnabled: n
  };
}