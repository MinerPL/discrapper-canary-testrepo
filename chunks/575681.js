s.d(t, {
	n: function () {
		return n;
	}
});
let a = (0, s(818083).B)({
		kind: 'user',
		id: '2023-06_unique_username_live_check_in_settings',
		label: 'Username Livecheck in Settings',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 1,
				label: 'Livecheck enabled',
				config: { enabled: !0 }
			}
		]
	}),
	n = () => {
		let { enabled: e } = a.useExperiment({ location: '7e1108_1' }, { autoTrackExposure: !0 });
		return e;
	};
