n.d(t, {
	Z: function () {
		return o;
	}
});
var s = n(735250);
n(470079);
var u = n(481060),
	c = n(906732),
	a = n(695346),
	l = n(626135),
	i = n(981631),
	r = n(689938);
function o() {
	let e = a.up.useSetting(),
		{ analyticsLocations: t } = (0, c.ZP)();
	return (0, s.jsx)(u.MenuCheckboxItem, {
		id: 'sticker-suggestions',
		label: r.Z.Messages.SUGGEST_STICKERS,
		checked: e,
		action: () => {
			l.default.track(i.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
				enabled: !e,
				location: { object: i.qAy.CONTEXT_MENU },
				location_stack: t
			}),
				a.up.updateSetting(!e);
		}
	});
}
