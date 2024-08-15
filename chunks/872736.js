t.d(s, {
	Z: function () {
		return o;
	}
});
var n = t(735250);
t(470079);
var a = t(481060),
	i = t(695346),
	r = t(689938);
function o(e) {
	let s = i.R_.useSetting();
	return (0, n.jsx)(a.FormSwitch, {
		hideBorder: !0,
		value: !s,
		onChange: () => i.R_.updateSetting(!s),
		note: s ? null : r.Z.Messages.UNIQUE_USERNAME_TOGGLE_SUBTITLE.format({ username: e.legacyUsername }),
		children: r.Z.Messages.UNIQUE_USERNAME_TOGGLE_TITLE
	});
}
