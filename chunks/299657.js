n(47120);
var s = n(735250),
	a = n(470079),
	r = n(120356),
	i = n.n(r),
	l = n(442837),
	o = n(481060),
	c = n(570140),
	d = n(355467),
	_ = n(179360),
	u = n(821849),
	E = n(497321),
	T = n(100527),
	I = n(906732),
	R = n(211242),
	C = n(15640),
	g = n(89057),
	p = n(433811),
	N = n(246946),
	A = n(594174),
	m = n(78839),
	f = n(626135),
	S = n(111361),
	h = n(357355),
	M = n(937579),
	x = n(91802),
	b = n(104494),
	O = n(639119),
	P = n(2359),
	v = n(132547),
	L = n(474936),
	Z = n(981631),
	D = n(874296);
t.Z = function (e) {
	let { entrypoint: t = L.EZ.UserSettings } = e;
	a.useEffect(() => {
		p.X.trigger();
	}, []);
	let n = (0, R.Q)(),
		{ sourceAnalyticsLocations: r, analyticsLocations: B } = (0, I.ZP)(T.Z.PREMIUM_MARKETING),
		j = (0, l.e7)([m.ZP], () => m.ZP.hasFetchedSubscriptions()),
		U = (0, l.e7)([A.default], () => A.default.getCurrentUser()),
		G = (0, O.N)(),
		y = (0, b.Ng)(),
		k = (0, C.V)(),
		[H, w] = a.useState(!0),
		F = a.useRef(0),
		V = (0, S.M5)(U, L.p9.TIER_2),
		W = (0, x.n)(),
		K = null == W ? void 0 : W.countryCode,
		Y = (0, l.e7)([h.Z], () => h.Z.hasFetched);
	return (a.useEffect(() => {
		!Y && d.MH();
	}, [Y]),
	a.useEffect(() => {
		c.Z.wait(async () => {
			let e = Date.now();
			await Promise.all([d.jg(), (0, _.X8)(), d.tZ(), (0, u.Y2)(K, null, Z.JjL.DISCOVERY)]),
				(F.current = Date.now() - e),
				w(!1);
		});
	}, [K]),
	a.useEffect(() => {
		n && (null != G || null != y) && (0, M.a)(G, y);
	}, [n, G, y]),
	a.useEffect(() => {
		!H &&
			f.default.track(Z.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
				location_stack: r,
				load_duration_ms: F.current
			});
	}, [r, H]),
	(0, l.e7)([N.Z], () => N.Z.enabled))
		? (0, s.jsx)(E.Z, {})
		: n
			? (0, s.jsx)(g.c8, {})
			: t === L.EZ.ApplicationStoreHome && V
				? (0, s.jsx)(I.Gt, {
						value: B,
						children: (0, s.jsx)(v.Z, {})
					})
				: j && k && !H
					? (0, s.jsx)(I.Gt, {
							value: B,
							children: (0, s.jsx)(P.Z, { entrypoint: t })
						})
					: (0, s.jsx)('div', {
							className: i()(D.container, D.loading),
							children: (0, s.jsx)(o.Spinner, {})
						});
};
