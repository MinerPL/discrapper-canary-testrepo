i.d(n, {
	A: function () {
		return a;
	}
});
let e = (0, i(818083).B)({
	kind: 'user',
	id: '2024-02_safety_hub_guild_violation_in_app_appeals',
	label: 'Safety Hub Guild Violation In App Appeals',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Allow guild violations to be applied using the new appeals ingestion flow',
			config: { enabled: !0 }
		}
	]
});
function a(t) {
	return !!e.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
