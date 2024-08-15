n.d(t, {
	O: function () {
		return r;
	}
});
var s = n(818083),
	o = n(977156);
let a = (0, s.B)({
		id: '2024-03_quest_bar_progress_cta',
		kind: 'user',
		label: 'Quest Bar Progress CTA',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 0,
				label: 'Control',
				config: { enabled: !1 }
			},
			{
				id: 1,
				label: 'Quest Bar Progress CTA enabled',
				config: { enabled: !0 }
			}
		]
	}),
	r = (e) => {
		let { location: t, autoTrackExposure: n = !1 } = e,
			s = (0, o.Zy)({ location: t }),
			{ enabled: r } = a.useExperiment({ location: t }, { autoTrackExposure: n });
		return s && r;
	};
