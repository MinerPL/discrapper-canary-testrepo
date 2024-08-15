a.d(t, {
	E: function () {
		return s;
	}
});
let n = (0, a(818083).B)({
		kind: 'user',
		label: 'Pomelo Attempt',
		id: '2023-04_pomelo_attempt',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 1,
				label: 'enabled',
				config: { enabled: !0 }
			}
		]
	}),
	s = () => n.getCurrentConfig({ location: 'c22166_1' }, { autoTrackExposure: !1 }).enabled;
