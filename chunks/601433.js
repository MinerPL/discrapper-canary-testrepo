t.d(s, {
	D: function () {
		return a;
	}
});
let n = (0, t(818083).B)({
	kind: 'user',
	id: '2023-03_text_playground_settings_pane',
	label: 'Text Playground',
	defaultConfig: { showSetting: !1 },
	treatments: [
		{
			id: 1,
			label: 'Enable settings pane',
			config: { showSetting: !0 }
		}
	]
});
function a() {
	return n.getCurrentConfig({ location: '26c832_1' }, { autoTrackExposure: !0 }).showSetting;
}
