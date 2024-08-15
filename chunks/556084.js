n.d(t, {
	j: function () {
		return c;
	}
}),
	n(47120);
var i = n(470079),
	a = n(442837),
	s = n(512751),
	l = n(57132),
	r = n(943209),
	o = n(628566);
function c(e) {
	let { channelId: t } = e;
	(0, l.SO)();
	let n = (0, s.o)(t),
		{
			installedIntegrations: c,
			applicationsShelf: u,
			integrationsFetchState: d,
			applicationsShelfFetchState: h
		} = (0, a.cj)([o.Z], () => ({
			installedIntegrations: o.Z.getIntegrations(t),
			applicationsShelf: o.Z.getApplicationsShelf(),
			integrationsFetchState: o.Z.getIntegrationsFetchState(t),
			applicationsShelfFetchState: o.Z.getApplicationsShelfFetchState()
		}));
	i.useEffect(() => {
		n &&
			((d === o.M.NOT_FETCHED || d === o.M.FETCH_FAILED) && (0, r.Yz)(t),
			(h === o.M.NOT_FETCHED || h === o.M.FETCH_FAILED) && (0, r.Rh)());
	}, [n, t, d, h]);
	let m = new Set(c.map((e) => e.application.id));
	return {
		installedIntegrations: c,
		availableApplications: u.filter((e) => !m.has(e.id)),
		applicationsShelf: u,
		fetched: d !== o.M.NOT_FETCHED && d !== o.M.FETCHING && h !== o.M.NOT_FETCHED && h !== o.M.FETCHING,
		appsInGDMEnabled: n
	};
}
