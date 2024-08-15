n.d(t, {
	a: function () {
		return a;
	},
	v: function () {
		return i;
	}
});
let r = (0, n(818083).B)({
	kind: 'user',
	id: '2024-07_global_discovery',
	label: 'Global Discovery',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Enabled',
			config: { enabled: !0 }
		}
	]
});
function i(e) {
	let { location: t, autoTrackExposure: n = !0 } = e,
		{ enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
	return i;
}
function a(e) {
	let { location: t, autoTrackExposure: n = !0 } = e,
		{ enabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
	return i;
}
