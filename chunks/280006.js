n.d(t, {
	E: function () {
		return r;
	},
	f: function () {
		return i;
	}
});
let r = (0, n(818083).B)({
	kind: 'user',
	id: '2024-07_gdm_blocked_user_warning',
	label: 'GDM Blocked User Warning',
	defaultConfig: {
		enabled: !1,
		showAsModal: !1,
		showAsBanner: !1
	},
	treatments: [
		{
			id: 1,
			label: 'Show blocked user warning in GDMs as a modal',
			config: {
				enabled: !0,
				showAsModal: !0,
				showAsBanner: !1
			}
		},
		{
			id: 2,
			label: 'Show blocked user warning in GDMs as a banner',
			config: {
				enabled: !0,
				showAsBanner: !0,
				showAsModal: !1
			}
		}
	]
});
function i(e) {
	let { location: t } = e,
		n = r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 });
	return n.enabled && n.showAsBanner;
}
