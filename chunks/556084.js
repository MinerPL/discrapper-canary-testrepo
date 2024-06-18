"use strict";
n.d(t, {
  j: function() {
    return u
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(512751),
  o = n(57132),
  a = n(943209),
  l = n(628566);

function u(e) {
  let {
    channelId: t
  } = e;
  (0, o.SO)();
  let n = (0, s.o)(t),
    {
      installedIntegrations: u,
      applicationsShelf: _,
      integrationsFetchState: d,
      applicationsShelfFetchState: c
    } = (0, r.cj)([l.Z], () => ({
      installedIntegrations: l.Z.getIntegrations(t),
      applicationsShelf: l.Z.getApplicationsShelf(),
      integrationsFetchState: l.Z.getIntegrationsFetchState(t),
      applicationsShelfFetchState: l.Z.getApplicationsShelfFetchState()
    }));
  i.useEffect(() => {
    n && ((d === l.M.NOT_FETCHED || d === l.M.FETCH_FAILED) && (0, a.Yz)(t), (c === l.M.NOT_FETCHED || c === l.M.FETCH_FAILED) && (0, a.Rh)())
  }, [n, t, d, c]);
  let E = new Set(u.map(e => e.application.id));
  return {
    installedIntegrations: u,
    availableApplications: _.filter(e => !E.has(e.id)),
    applicationsShelf: _,
    fetched: d !== l.M.NOT_FETCHED && d !== l.M.FETCHING && c !== l.M.NOT_FETCHED && c !== l.M.FETCHING,
    appsInGDMEnabled: n
  }
}