n.d(t, {
	T: function () {
		return i;
	},
	p: function () {
		return a;
	}
});
let r = (0, n(818083).B)({
		id: '2024-07_quests_mobile_ga',
		kind: 'user',
		label: 'Quests Mobile GA',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 0,
				label: 'Control',
				config: { enabled: !1 }
			},
			{
				id: 1,
				label: 'Enabled',
				config: { enabled: !0 }
			}
		]
	}),
	i = (e) => {
		let { location: t } = e;
		return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
	},
	a = (e) => {
		let { location: t } = e;
		return r.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
	};
