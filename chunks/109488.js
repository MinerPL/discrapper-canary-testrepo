a.d(t, {
	P: function () {
		return s;
	}
});
let n = (0, a(818083).B)({
		kind: 'user',
		label: 'Pomelo Suggestions',
		id: '2023-04_pomelo_suggestions',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 1,
				label: 'enabled',
				config: { enabled: !0 }
			}
		]
	}),
	s = () => n.getCurrentConfig({ location: '1907ae_1' }, { autoTrackExposure: !1 }).enabled;
