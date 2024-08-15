n.d(t, {
	T: function () {
		return h;
	},
	Z: function () {
		return f;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(481060),
	s = n(100527),
	o = n(82892),
	l = n(432877),
	u = n(726521),
	c = n(87620),
	d = n(314897),
	_ = n(981631),
	E = n(689938);
function f(e) {
	let { user: t, guildId: n, color: o, onAction: l, location: f = s.Z.CONTEXT_MENU } = e,
		h = (0, c.oV)(f),
		p = (0, i.e7)([d.default], () => d.default.getId() === t.id);
	return !h || p || t.isNonUserBot()
		? null
		: (0, r.jsx)(a.MenuItem, {
				id: 'report-user',
				color: o,
				label: E.Z.Messages.REPORTS_USER_BUTTON_TITLE,
				action: () => (0, u.pX)(t, n === _.ME ? void 0 : n, l)
			});
}
function h(e) {
	let { user: t, guildId: n, color: s, onAction: c } = e,
		d = (0, i.e7)([l.ZP], () => l.ZP.get('iar_testing')),
		E = (0, o.x)();
	return t.id === E.id || t.isNonUserBot() || !E.isStaff() || !d
		? null
		: (0, r.jsx)(a.MenuItem, {
				id: 'staff-test-report-user',
				color: s,
				label: '[STAFF] Test Profile Report',
				action: () => (0, u.I6)(t, n === _.ME ? void 0 : n, c)
			});
}
