var r = n(818083);
t.Z = (0, r.B)({
	kind: 'user',
	id: '2021-03_videotoolbox_rate_optimization',
	label: 'VideoToolbox Rate Control Optimizations',
	defaultConfig: { useExperimentalRateControl: !1 },
	treatments: [
		{
			id: 1,
			label: 'On',
			config: { useExperimentalRateControl: !0 }
		}
	]
});
