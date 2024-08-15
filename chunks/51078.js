n.d(t, {
	Z: function () {
		return p;
	}
});
var o = n(735250);
n(470079);
var r = n(442837),
	i = n(481060),
	a = n(906732),
	u = n(313201),
	s = n(594174),
	c = n(74538),
	d = n(242291),
	l = n(710111),
	f = n(689938);
function p(e, t) {
	let { analyticsLocations: n } = (0, a.ZP)(),
		p = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
		O = (0, u.Dt)(),
		N = (0, u.Dt)();
	return null != t && c.ZP.canUseCustomCallSounds(p)
		? (0, o.jsxs)(o.Fragment, {
				children: [
					(0, o.jsx)(i.MenuItem, {
						id: O,
						label: f.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
						action: () => (0, d.SZ)(t, e, n)
					}),
					(0, o.jsx)(i.MenuItem, {
						id: N,
						label: f.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
						action: () => (0, d.SZ)(l.hY, e, n)
					})
				]
			})
		: null;
}
