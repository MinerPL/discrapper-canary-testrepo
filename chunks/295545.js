t.d(s, {
	c3: function () {
		return i;
	},
	eA: function () {
		return a;
	}
});
let n = (0, t(818083).B)({
	kind: 'user',
	id: '2024-05_desktop_user_settings_search',
	label: 'Desktop User Settings Search',
	defaultConfig: {
		enabled: !1,
		showSearchCount: !1
	},
	treatments: [
		{
			id: 1,
			label: 'Enable User Settings Search on Desktop',
			config: {
				enabled: !0,
				showSearchCount: !1
			}
		},
		{
			id: 2,
			label: 'Enable User Settings Search on Desktop with Search Count',
			config: {
				enabled: !0,
				showSearchCount: !0
			}
		}
	]
});
function a(e) {
	let { location: s } = e;
	return n.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled;
}
function i(e) {
	let { location: s } = e,
		{ enabled: t, showSearchCount: a } = n.useExperiment({ location: s }, { autoTrackExposure: !0 });
	return t && a;
}
