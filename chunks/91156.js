n.d(t, {
	p: function () {
		return i;
	}
});
let r = (0, n(818083).B)({
	kind: 'user',
	id: '2024-04_iar_message_dislike',
	label: 'IAR Message Dislike',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Enabled',
			config: { enabled: !0 }
		}
	]
});
function i(e) {
	let { enabled: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
	return t;
}
