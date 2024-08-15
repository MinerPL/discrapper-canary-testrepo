n.d(t, {
	o: function () {
		return i;
	}
});
let r = (0, n(818083).B)({
	kind: 'user',
	id: '2024-04_server_peek',
	label: 'Change the guild tooltip',
	defaultConfig: { showNewGuildTooltip: !1 },
	treatments: [
		{
			id: 1,
			label: 'Show new tooltip',
			config: { showNewGuildTooltip: !0 }
		}
	]
});
function i(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		{ showNewGuildTooltip: n } = r.useExperiment({ location: e }, { autoTrackExposure: t });
	return n;
}
t.Z = r;
