n(411104);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(386506),
	o = n(304761),
	l = n(865427),
	u = n(478543),
	c = n(366953);
async function d(e) {
	if (200 !== (await (0, s.f0)(e)).status) throw Error("Build override couldn't apply");
	window.location.reload(!0);
}
async function _(e) {
	if (200 !== (await (0, s.aD)(e)).status) throw Error("Build override couldn't apply");
	window.location.reload(!0);
}
async function E() {
	await (0, s.bF)(), window.location.reload(!0);
}
t.Z = i.memo(function (e) {
	let { url: t } = e,
		n = (0, a.cj)([o.C], () => o.C.getCurrentBuildOverride()),
		s = (0, a.e7)([o.C], () => o.C.getBuildOverride(t)),
		{ payload: f, validatedURL: h } = s,
		p = n.state === o.Z.Resolving || s.state === o.Z.Resolving,
		m = i.useCallback(() => {
			if ((0, l.mG)(s.url) && null != s.override) {
				var e;
				return _(null === (e = s.override) || void 0 === e ? void 0 : e.targetBuildOverride);
			}
			if (null == f) return Promise.reject(Error('Invalid override payload'));
			return (0, c.Z)(s.override, f), d(f);
		}, [f, s]);
	return null != h
		? (0, r.jsx)(u.Z, {
				loading: p,
				linkMeta: s.override,
				currentOverrides: n.overrides,
				applyBuildOverride: m,
				clearBuildOverride: E,
				url: h
			})
		: null;
});
