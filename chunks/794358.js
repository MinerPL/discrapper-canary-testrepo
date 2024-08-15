n.d(s, {
	d: function () {
		return o;
	}
});
let t = (0, n(818083).B)({
	kind: 'user',
	id: '2024-07_email_change_reasoning_buttons',
	label: 'Email Change Reasoning Buttons',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Add additional friction to the email change flow by asking users why they are changing their email',
			config: { enabled: !0 }
		}
	]
});
function o(e) {
	return !!t.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
s.Z = t;
